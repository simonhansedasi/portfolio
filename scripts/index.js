const ORDER = [
  'dada_science',
  'glacier_prethicktor',
  'sf_majick',
  'gov_inertia',
  'encounterMCMC',
  'game_ranking',
  'crm',
  'GrapeExpectations',
  'blackjack',
  'pyopoly',
  'alphabet_soup',
  'gcp_analysis',
  'commuting',
  'char_gen',
  'rejection_matrix',
  'wiki-index',
  'drawing',
  'trivia',
  'timer',
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cards');

  const sorted = ORDER.filter(k => k in fileStructure)
    .concat(Object.keys(fileStructure).filter(k => !ORDER.includes(k)).sort());

  for (const key of sorted) {
    container.appendChild(buildCard(fileStructure[key]));
  }
});

function buildCard(proj) {
  const card = document.createElement('div');
  card.className = 'card';

  // ── Face ──────────────────────────────────────────
  const face = document.createElement('div');
  face.className = 'card-face';

  // Top row: name + github link
  const top = document.createElement('div');
  top.className = 'card-top';

  const name = document.createElement('h2');
  name.className = 'card-name';
  name.textContent = proj.name;
  top.appendChild(name);

  if (proj.github) {
    const gh = document.createElement('a');
    gh.className = 'github-link';
    gh.href = proj.github;
    gh.target = '_blank';
    gh.rel = 'noopener';
    gh.textContent = 'GitHub ↗';
    top.appendChild(gh);
  }
  face.appendChild(top);

  // Description
  if (proj.description) {
    const desc = document.createElement('p');
    desc.className = 'card-desc';
    desc.textContent = proj.description;
    face.appendChild(desc);
  }

  // Bottom row: tech pills + expand button
  const bottom = document.createElement('div');
  bottom.className = 'card-bottom';

  const tags = document.createElement('div');
  tags.className = 'tags';
  (proj.tech || []).forEach(t => {
    const pill = document.createElement('span');
    pill.className = 'tag';
    pill.textContent = t;
    tags.appendChild(pill);
  });
  bottom.appendChild(tags);

  const btn = document.createElement('button');
  btn.className = 'expand-btn';
  btn.innerHTML = '<span class="arrow">▶</span> details';
  btn.addEventListener('click', () => {
    card.classList.toggle('open');
    btn.innerHTML = card.classList.contains('open')
      ? '<span class="arrow">▶</span> collapse'
      : '<span class="arrow">▶</span> details';
  });
  bottom.appendChild(btn);

  face.appendChild(bottom);
  card.appendChild(face);

  // ── Expanded body ─────────────────────────────────
  const body = document.createElement('div');
  body.className = 'card-body';

  // README
  if (proj.readme) {
    const readmeSection = document.createElement('div');
    readmeSection.className = 'readme-section';
    try {
      readmeSection.innerHTML = marked.parse(proj.readme);
    } catch (e) {
      readmeSection.textContent = proj.readme;
    }
    body.appendChild(readmeSection);
  }

  // File tree
  if (proj.tree) {
    const treeSection = document.createElement('div');
    treeSection.className = 'tree-section';

    const label = document.createElement('div');
    label.className = 'tree-section-label';
    label.textContent = 'Files';
    treeSection.appendChild(label);

    const treeEl = document.createElement('div');
    treeEl.className = 'tree';
    treeEl.appendChild(buildTree(proj.tree, proj.github, proj.branch, ''));
    treeSection.appendChild(treeEl);

    body.appendChild(treeSection);
  }

  card.appendChild(body);
  return card;
}

function buildTree(node, github, branch, pathPrefix) {
  const ul = document.createElement('ul');

  // Directories first
  const dirs = node.dirs || {};
  for (const dirName of Object.keys(dirs).sort()) {
    const li = document.createElement('li');
    const childPath = pathPrefix ? `${pathPrefix}/${dirName}` : dirName;

    const label = document.createElement('span');
    label.className = 'dir-label';
    label.innerHTML = `<span class="tri">▶</span> ${dirName}`;

    const children = document.createElement('div');
    children.className = 'dir-children';
    children.appendChild(buildTree(dirs[dirName], github, branch, childPath));

    label.addEventListener('click', () => {
      label.classList.toggle('open');
      children.classList.toggle('open');
    });

    li.appendChild(label);
    li.appendChild(children);
    ul.appendChild(li);
  }

  // Files
  const files = node.files || [];
  for (const fileName of files) {
    const li = document.createElement('li');
    const filePath = pathPrefix ? `${pathPrefix}/${fileName}` : fileName;
    const href = github ? `${github}/blob/${branch}/${filePath}` : '#';

    const a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = fileName;
    li.appendChild(a);
    ul.appendChild(li);
  }

  return ul;
}
