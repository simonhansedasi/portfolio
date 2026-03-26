#!/usr/bin/env python3
import os
import json
import subprocess

root = os.path.expanduser('~/coding')
output = 'scripts/file_structure.js'

SKIP_DIRS = {
    '.git', '__pycache__', 'node_modules', '.venv', 'venv', 'env',
    'dist', 'build', '.mypy_cache', '.pytest_cache', '.tox',
}

SKIP_EXTENSIONS = {
    '.pyc', '.pyo', '.so', '.pkl', '.db', '.sqlite', '.sqlite3',
    '.png', '.jpg', '.jpeg', '.gif', '.pdf', '.ico',
    '.zip', '.tar', '.gz', '.bz2', '.xz',
    '.parquet', '.feather', '.npy', '.npz', '.arrow',
}

SKIP_REPOS = {'portfolio', 'dscience', 'simonhansedasi.github.io'}

MAX_DEPTH = 3


def get_git_info(repo_path):
    try:
        remote = subprocess.check_output(
            ['git', '-C', repo_path, 'config', '--get', 'remote.origin.url'],
            text=True, stderr=subprocess.DEVNULL
        ).strip()
    except subprocess.CalledProcessError:
        return None, None

    try:
        branch = subprocess.check_output(
            ['git', '-C', repo_path, 'rev-parse', '--abbrev-ref', 'HEAD'],
            text=True, stderr=subprocess.DEVNULL
        ).strip()
    except subprocess.CalledProcessError:
        branch = 'main'

    if remote.startswith('git@github.com:'):
        remote = remote.replace('git@github.com:', 'https://github.com/')
    if remote.endswith('.git'):
        remote = remote[:-4]

    return remote, branch


def parse_readme(repo_path):
    """Return (description, tech_tags, full_text) from README.md, or defaults."""
    for name in ('README.md', 'readme.md', 'README.txt'):
        path = os.path.join(repo_path, name)
        if os.path.exists(path):
            try:
                with open(path, encoding='utf-8', errors='replace') as f:
                    text = f.read()
                description = extract_description(text)
                tech = extract_tech(text)
                return description, tech, text
            except OSError:
                pass
    return '', [], ''


def extract_description(text):
    """First non-empty, non-heading, non-badge line of the README."""
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        if line.startswith('[!['):  # skip badge lines
            continue
        # Strip leading markdown markers and inline bold/italic syntax
        import re
        line = re.sub(r'\*\*(.+?)\*\*', r'\1', line)  # **bold**
        line = re.sub(r'\*(.+?)\*', r'\1', line)       # *italic*
        line = re.sub(r'`(.+?)`', r'\1', line)          # `code`
        line = line.lstrip('*_>')
        return line.strip()
    return ''


def extract_tech(text):
    """Parse the ## Tech section into a list of tag strings."""
    in_tech = False
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.lower().startswith('## tech'):
            in_tech = True
            continue
        if in_tech:
            if not stripped:
                continue
            if stripped.startswith('#'):
                break  # hit the next section
            # Take everything before a code block or bullet marker
            stripped = stripped.lstrip('-* ')
            # Split on comma, then take only the part before ' — ' or ' - '
            # Strip the whole line at the em-dash level first, then split on comma
            for sep in [' — ', ' — ', ' – ']:
                stripped = stripped.split(sep)[0]
            raw_tags = [t.strip() for t in stripped.split(',')]
            tags = []
            for tag in raw_tags:
                tag = tag.strip().strip('`')
                if tag:
                    tags.append(tag)
            return tags
    return []


def scan_tree(path, depth=0):
    """Recursively build a compact file tree (names only, no URLs)."""
    if depth >= MAX_DEPTH:
        return None

    result = {'dirs': {}, 'files': []}
    try:
        entries = sorted(os.listdir(path))
    except OSError:
        return result

    for entry in entries:
        if entry.startswith('.'):
            continue
        if entry in SKIP_DIRS or entry.endswith('.egg-info'):
            continue

        full = os.path.join(path, entry)

        if os.path.isdir(full):
            subtree = scan_tree(full, depth + 1)
            if subtree and (subtree['dirs'] or subtree['files']):
                result['dirs'][entry] = subtree

        else:
            ext = os.path.splitext(entry)[1].lower()
            if ext in SKIP_EXTENSIONS:
                continue
            result['files'].append(entry)

    return result


def main():
    projects = {}

    for entry in sorted(os.listdir(root)):
        if entry in SKIP_REPOS or entry.startswith('.'):
            continue
        full_path = os.path.join(root, entry)
        if not os.path.isdir(full_path):
            continue

        github, branch = get_git_info(full_path)
        if not github:
            continue

        description, tech, readme_text = parse_readme(full_path)
        tree = scan_tree(full_path)

        projects[entry] = {
            'name': entry,
            'description': description,
            'tech': tech,
            'github': github,
            'branch': branch,
            'readme': readme_text,
            'tree': tree,
        }

    os.makedirs(os.path.dirname(output), exist_ok=True)
    with open(output, 'w') as f:
        f.write(f'const fileStructure = {json.dumps(projects, indent=2)};\n')

    total = len(projects)
    size_kb = os.path.getsize(output) // 1024
    print(f'Generated {output}: {total} projects, {size_kb} KB')


if __name__ == '__main__':
    main()
