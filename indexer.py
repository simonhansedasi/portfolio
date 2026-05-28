#!/usr/bin/env python3
import os
import json
import re
import shutil
import subprocess

try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
root = os.path.expanduser('~/coding')
output = os.path.join(SCRIPT_DIR, 'scripts', 'file_structure.js')
GRAPH_DATA_YAML = os.path.expanduser('~/coding/drawing/graph_data.yaml')
GRAPH_DATA_JS   = os.path.join(SCRIPT_DIR, 'scripts', 'graph_data.js')
IMAGES_OUTPUT_DIR = os.path.join(SCRIPT_DIR, 'images')

SKIP_DIRS = {
    '.git', '__pycache__', 'node_modules', '.venv', 'venv', 'env',
    'dist', 'build', '.mypy_cache', '.pytest_cache', '.tox',
    '_site', '.ipynb_checkpoints', 'Miniforge3-Linux-x86_64.sh',
}

SKIP_EXTENSIONS = {
    '.pyc', '.pyo', '.so', '.pkl', '.db', '.sqlite', '.sqlite3',
    '.png', '.jpg', '.jpeg', '.gif', '.pdf', '.ico',
    '.zip', '.tar', '.gz', '.bz2', '.xz',
    '.parquet', '.feather', '.npy', '.npz', '.arrow',
    '.md', '.ipynb', '.json', '.lock', '.txt',
}

IMAGE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'}

SKIP_REPOS = {'portfolio', 'dscience', 'simonhansedasi.github.io', 'OmaElu', 'rippleforge'}

# Ordered by scientific/technical excitement.
REPO_ORDER = [
    'GeoGastronomy',
    'rippleforge',
    'glacier_prethicktor',
    'glacier_prethicktor_2',
    'sf_majick',
    'char_gen',
    'strat_hacking',
    'statistical_uniqueness',
    'dada_science',
    'game_ranking',
    'gov_inertia',
    'rejection_matrix',
    'alphabet_soup',
    'pyopoly',
    'blackjack',
    'commuting',
    'crm',
    'drawing',
    'trivia',
    'wiki-index',
    'timer',
]

MAX_DEPTH = 3
MAX_IMAGES = 4

SUBPROJECTS = {
    'dada_science': ['library_recommender', 'scheduling'],
}

# Images that live outside the repo tree (e.g. in a sibling repo).
# src: absolute local path to the image file
# rel: filename/subpath to use inside portfolio/images/{repo}/
# remote: GitHub raw URL fallback
CURATED_IMAGES = {
    'GeoGastronomy': [
        {
            'src': os.path.expanduser('~/coding/GeoGastronomy/JavaScript/Fig1.png'),
            'rel': 'JavaScript/Fig1.png',
            'remote': 'https://raw.githubusercontent.com/simonhansedasi/GeoGastronomy/main/JavaScript/Fig1.png',
        },
        {
            'src': os.path.expanduser('~/coding/GeoGastronomy/JavaScript/Fig4.png'),
            'rel': 'JavaScript/Fig4.png',
            'remote': 'https://raw.githubusercontent.com/simonhansedasi/GeoGastronomy/main/JavaScript/Fig4.png',
        },
    ],
    'glacier_prethicktor': [
        {
            'src': os.path.expanduser(
                '~/coding/simonhansedasi.github.io/images/discrepancy_boxplot.png'
            ),
            'rel': 'discrepancy_boxplot.png',
            'remote': 'https://raw.githubusercontent.com/simonhansedasi/'
                      'simonhansedasi.github.io/main/images/discrepancy_boxplot.png',
        }
    ],
}


# ── Image copying ─────────────────────────────────────────────────────────────

def copy_to_portfolio(src_abs, repo_name, rel_in_repo):
    """Copy image file into portfolio/images/{repo_name}/{rel_in_repo}.
    Returns the portfolio-relative path (e.g. images/sf_majick/figures/fig1.png),
    or None if the source file does not exist.
    """
    if not os.path.isfile(src_abs):
        return None
    dest_rel = os.path.join(IMAGES_OUTPUT_DIR, repo_name, rel_in_repo)
    dest_dir = os.path.dirname(dest_rel)
    if dest_dir:
        os.makedirs(dest_dir, exist_ok=True)
    shutil.copy2(src_abs, dest_rel)
    return dest_rel.replace(os.sep, '/')


def copy_readme_images(readme_text, repo_path, repo_name):
    """Find all ![](relative/path) refs in readme and copy those files into
    portfolio/images/{repo_name}/ so local_base resolution works offline."""
    for m in re.finditer(r'!\[[^\]]*\]\(([^)]+)\)', readme_text):
        href = m.group(1)
        if href.startswith('http'):
            continue
        src_abs = os.path.join(repo_path, href)
        copy_to_portfolio(src_abs, repo_name, href)


# ── Git helpers ───────────────────────────────────────────────────────────────

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


# ── README parsing ────────────────────────────────────────────────────────────

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
        if line.startswith('[!['):
            continue
        line = re.sub(r'\*\*(.+?)\*\*', r'\1', line)
        line = re.sub(r'\*(.+?)\*', r'\1', line)
        line = re.sub(r'`(.+?)`', r'\1', line)
        line = line.lstrip('*_>')
        return line.strip()
    return ''


def extract_tech(text):
    """Parse ## Tech or ## Stack section into a list of tag strings."""
    in_tech = False
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.lower().startswith(('## tech', '## stack')):
            in_tech = True
            continue
        if in_tech:
            if not stripped:
                continue
            if stripped.startswith('#'):
                break
            stripped = stripped.lstrip('-* ')
            for sep in [' \u2014 ', ' \u2013 ', ' \u2013 ']:
                stripped = stripped.split(sep)[0]
            raw_tags = [t.strip() for t in stripped.split(',')]
            tags = []
            for tag in raw_tags:
                tag = tag.strip().strip('`')
                if tag:
                    tags.append(tag)
            return tags
    return []


# ── Image collection ──────────────────────────────────────────────────────────

def collect_images(repo_path, github, branch):
    """Find up to MAX_IMAGES images, copy them into portfolio/images/{repo}/,
    and return a list of {local, remote} dicts.

    local  — portfolio-relative path (images/reponame/...)
    remote — GitHub raw URL fallback

    Priority:
      1. Fig\\d named files anywhere in the repo (paper figures), sorted numerically
      2. figures/ directory files
      3. img/ dirs up to depth 2 — prefer higher-numbered (later analysis stage) files
      4. Root-level images (fallback)
    """
    if not github:
        return []

    repo_name = os.path.basename(repo_path.rstrip('/'))
    raw_base = github.replace('github.com', 'raw.githubusercontent.com') + '/' + branch

    def to_entry(rel_path):
        fwd = rel_path.replace(os.sep, '/')
        src_abs = os.path.join(repo_path, rel_path)
        local = copy_to_portfolio(src_abs, repo_name, fwd)
        remote = raw_base + '/' + fwd
        return {'local': local or remote, 'remote': remote}

    def is_image(name):
        return os.path.splitext(name)[1].lower() in IMAGE_EXTENSIONS

    def skip_file(name, dirpath=''):
        return (
            'frame' in name.lower()
            or 'checkpoint' in name.lower()
            or '.ipynb_checkpoints' in dirpath
            or '_site' in dirpath.split(os.sep)
        )

    SKIP_IMG_DIRS = SKIP_DIRS | {'_site', '.ipynb_checkpoints'}

    def walk_capped(base, max_depth=3):
        for dirpath, dirnames, filenames in os.walk(base):
            rel = os.path.relpath(dirpath, base)
            depth = 0 if rel == '.' else len(rel.split(os.sep))
            if depth >= max_depth:
                dirnames.clear()
                continue
            dirnames[:] = [d for d in sorted(dirnames)
                           if d not in SKIP_IMG_DIRS and 'frame' not in d.lower()]
            yield dirpath, rel, filenames

    # 1. Fig\d files anywhere
    fig_files = []
    seen_basenames = set()
    for dirpath, rel, filenames in walk_capped(repo_path):
        for name in filenames:
            if (is_image(name) and re.match(r'(?i)fig\d', name)
                    and not skip_file(name, dirpath)
                    and name not in seen_basenames):
                rel_path = name if rel == '.' else os.path.join(rel, name)
                fig_files.append(rel_path)
                seen_basenames.add(name)

    def fig_sort_key(p):
        m = re.search(r'(?i)fig(\d+)', p)
        return (int(m.group(1)) if m else 99, p)
    fig_files.sort(key=fig_sort_key)

    # 2. figures/ dir
    fig_dir_files = []
    figures_dir = os.path.join(repo_path, 'figures')
    if os.path.isdir(figures_dir):
        for name in sorted(os.listdir(figures_dir)):
            full = os.path.join(figures_dir, name)
            if os.path.isfile(full) and is_image(name) and not skip_file(name, figures_dir):
                fig_dir_files.append(os.path.join('figures', name))

    # 3. img/ dirs — higher-numbered files first
    img_files = []
    seen_img_basenames = set()
    for dirpath, rel, filenames in walk_capped(repo_path):
        if os.path.basename(dirpath) == 'img' and dirpath != repo_path:
            for name in sorted(filenames, reverse=True):
                if (is_image(name) and not skip_file(name, dirpath)
                        and name not in seen_img_basenames):
                    rel_path = name if rel == '.' else os.path.join(rel, name)
                    img_files.append(rel_path)
                    seen_img_basenames.add(name)

    # 4. Root-level images
    root_files = []
    try:
        for name in sorted(os.listdir(repo_path)):
            full = os.path.join(repo_path, name)
            if os.path.isfile(full) and is_image(name) and not skip_file(name):
                root_files.append(name)
    except OSError:
        pass

    seen = set()
    unique = []
    for rel_path in fig_files + fig_dir_files + img_files + root_files:
        key = rel_path.replace(os.sep, '/')
        if key not in seen:
            seen.add(key)
            entry = to_entry(rel_path)
            if entry:
                unique.append(entry)
        if len(unique) >= MAX_IMAGES:
            break
    return unique


# ── File tree ─────────────────────────────────────────────────────────────────

def scan_tree(path, depth=0):
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


# ── Project assembly ──────────────────────────────────────────────────────────

def add_project(projects, key, name, full_path, github, branch, github_subpath=None):
    description, tech, readme_text = parse_readme(full_path)
    tree = scan_tree(full_path)

    repo_name = os.path.basename(full_path.rstrip('/'))

    # Gallery images
    if key in CURATED_IMAGES:
        images = []
        for item in CURATED_IMAGES[key]:
            local = copy_to_portfolio(item['src'], key, item['rel'])
            images.append({'local': local or item['remote'], 'remote': item['remote']})
    else:
        images = collect_images(full_path, github, branch)

    # Copy images referenced inline in the README
    copy_readme_images(readme_text, full_path, repo_name)

    gh_link = '{}/tree/{}/{}'.format(github, branch, github_subpath) if github_subpath else github

    # local_base: portfolio-relative prefix for resolving README image paths.
    # e.g. "images/GeoGastronomy/" so that "GrapeExpectations/img/foo.png"
    # becomes "images/GeoGastronomy/GrapeExpectations/img/foo.png"
    local_base = 'images/{}/'.format(repo_name)

    projects[key] = {
        'name': name,
        'description': description,
        'tech': tech,
        'github': gh_link,
        'branch': branch,
        'readme': readme_text,
        'tree': tree,
        'images': images,
        'local_base': local_base,
    }


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    projects = {}

    # Clear stale images from previous runs
    if os.path.isdir(IMAGES_OUTPUT_DIR):
        shutil.rmtree(IMAGES_OUTPUT_DIR)
    os.makedirs(IMAGES_OUTPUT_DIR)

    all_entries = set(os.listdir(root))
    ordered = [e for e in REPO_ORDER if e in all_entries]
    ordered += sorted(e for e in all_entries if e not in REPO_ORDER)

    for entry in ordered:
        if entry in SKIP_REPOS or entry.startswith('.'):
            continue
        full_path = os.path.join(root, entry)
        if not os.path.isdir(full_path):
            continue

        github, branch = get_git_info(full_path)
        if not github:
            continue

        if entry in SUBPROJECTS:
            for subname in SUBPROJECTS[entry]:
                subpath = os.path.join(full_path, subname)
                if os.path.isdir(subpath):
                    add_project(projects, subname, subname, subpath,
                                github, branch, github_subpath=subname)
        else:
            add_project(projects, entry, entry, full_path, github, branch)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    with open(output, 'w') as f:
        f.write('const fileStructure = {};\n'.format(json.dumps(projects, indent=2)))

    total = len(projects)
    size_kb = os.path.getsize(output) // 1024

    # Count copied images
    img_count = sum(
        len(files)
        for _, _, files in os.walk(IMAGES_OUTPUT_DIR)
    )
    print('Generated {}: {} projects, {} KB, {} images copied'.format(
        output, total, size_kb, img_count))

    # Bake graph_data.yaml → graph_data.js
    if HAS_YAML and os.path.exists(GRAPH_DATA_YAML):
        with open(GRAPH_DATA_YAML) as f:
            graph_data = yaml.safe_load(f)
        with open(GRAPH_DATA_JS, 'w') as f:
            f.write('const graphData = {};\n'.format(json.dumps(graph_data, indent=2)))
        print('Generated {}'.format(GRAPH_DATA_JS))
    else:
        if not HAS_YAML:
            print('Warning: pyyaml not installed — skipping graph_data.js (pip install pyyaml)')
        else:
            print('Warning: {} not found — skipping graph_data.js'.format(GRAPH_DATA_YAML))


if __name__ == '__main__':
    main()
