#!/usr/bin/env python3
import os
import json
import subprocess

# Folder containing all your coding projects (including portfolio itself)
root = os.path.expanduser('~/coding')

# Where to write output
output = 'scripts/file_structure.js'


def get_git_info(repo_path):
    '''Return (remote_url, branch) for a repo, or (None, None) if not a git repo.'''
    try:
        remote = subprocess.check_output(
            ['git', '-C', repo_path, 'config', '--get', 'remote.origin.url'],
            text=True
        ).strip()
    except subprocess.CalledProcessError:
        return None, None

    try:
        branch = subprocess.check_output(
            ['git', '-C', repo_path, 'rev-parse', '--abbrev-ref', 'HEAD'],
            text=True
        ).strip()
    except subprocess.CalledProcessError:
        branch = 'main'

    # Normalize GitHub URL (convert SSH to HTTPS if needed)
    if remote.startswith('git@github.com:'):
        remote = remote.replace('git@github.com:', 'https://github.com/').replace('.git', '')

    return remote, branch


def scan_folder(path, repo_name, github_url, branch, rel_path=''):
    '''Recursively scan folder and build file tree with actions.'''
    tree = {}
    entries = []

    for entry in sorted(os.listdir(path)):
        if entry.startswith('.') or entry.startswith('__pycache__') or entry.startswith('dsc'):
            continue
            
        if rel_path == '' and entry == 'dscience':
            continue
        full_path = os.path.join(path, entry)
        rel_entry_path = os.path.join(rel_path, entry)

        if os.path.isdir(full_path):
            tree[entry] = scan_folder(full_path, repo_name, github_url, branch, rel_entry_path)
        else:
            # File entry with actions
            file_info = {
                'name': entry,
                'path': rel_entry_path,
                'actions': {
                    'view_markdown': f'/viewer/{repo_name}/{rel_entry_path}',
                    'view_github': f'{github_url}/blob/{branch}/{rel_entry_path}',
                    'download': f'https://raw.githubusercontent.com/{github_url.split("github.com/")[1]}/{branch}/{rel_entry_path}'
                }
            }
            entries.append(file_info)

    if entries:
        tree['files'] = entries
    return tree


def main():
    projects = {}

    for entry in sorted(os.listdir(root)):
        full_path = os.path.join(root, entry)
        if not os.path.isdir(full_path):
            continue
        if entry == 'portfolio' or entry == 'dscience':  # Skip the portfolio repo itself
            continue

        github_url, branch = get_git_info(full_path)
        if not github_url:
            continue  # skip non-git dirs

        projects[entry] = {
            'github': github_url,
            'branch': branch,
            'tree': scan_folder(full_path, entry, github_url, branch)
        }

    # Make sure output folder exists
    os.makedirs(os.path.dirname(output), exist_ok=True)

    with open(output, 'w') as f:
        f.write(f'const fileStructure = {json.dumps(projects, indent=4)};\n')

    print(f'file_structure.js generated successfully at \'{output}\'!')


if __name__ == '__main__':
    main()
