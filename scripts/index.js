const ORDER = [
  'GeoGastronomy',
  'rippleforge',
  'sf_majick',
  'glacier_prethicktor',
  'glacier_prethicktor_2',
  'dada_science',
  'char_gen',
  'gov_inertia',
  'commuting',
  'blackjack',
  'game_ranking',
  'pyopoly',
  'alphabet_soup',
  'OmaElu',
  'crm',
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

  // README + inline images
  if (proj.readme || (proj.images && proj.images.length > 0)) {
    const readmeSection = document.createElement('div');
    readmeSection.className = 'readme-section';

    if (proj.readme) {
      try {
        // Custom renderer: rewrite relative img paths to local_base + path,
        // with GitHub raw URL as onerror fallback.
        const rawBase = proj.github
          ? proj.github
              .replace('github.com', 'raw.githubusercontent.com')
              .replace(/\/tree\/[^/]+.*$/, '') + '/' + proj.branch + '/'
          : null;

        const renderer = new marked.Renderer();
        renderer.image = function(href, title, text) {
          const isRelative = !/^https?:\/\//.test(href);
          const localSrc = isRelative && proj.local_base
            ? proj.local_base + href
            : href;
          const remoteSrc = isRelative && rawBase ? rawBase + href : href;
          const onerr = `if(this.src!=='${remoteSrc}'){this.src='${remoteSrc}'}else{this.parentElement.style.display='none'}`;
          const titleAttr = title ? ` title="${title}"` : '';
          return `<figure class="readme-figure"><a href="${remoteSrc}" target="_blank" rel="noopener">`
            + `<img src="${localSrc}" alt="${text || ''}"${titleAttr} class="readme-inline-img" loading="lazy" onerror="${onerr}">`
            + `</a>${text ? `<figcaption>${text}</figcaption>` : ''}</figure>`;
        };

        readmeSection.innerHTML = marked.parse(proj.readme, { renderer });
      } catch (e) {
        readmeSection.textContent = proj.readme;
      }
    }

    if (proj.images && proj.images.length > 0) {
      const gallery = document.createElement('div');
      gallery.className = 'readme-gallery';
      proj.images.forEach(entry => {
        const local = entry.local || entry;
        const remote = entry.remote || entry;
        const a = document.createElement('a');
        a.href = remote;
        a.target = '_blank';
        a.rel = 'noopener';
        const img = document.createElement('img');
        img.className = 'readme-img';
        img.src = local;
        img.loading = 'lazy';
        img.alt = '';
        img.onerror = function () {
          if (this.src !== remote) {
            this.src = remote;
          } else {
            this.parentElement.style.display = 'none';
          }
        };
        a.appendChild(img);
        gallery.appendChild(a);
      });
      readmeSection.appendChild(gallery);
    }

    body.appendChild(readmeSection);
  }

  // File tree
  if (proj.tree) {
    const rootUl = buildTree(proj.tree, proj.github, proj.branch, '');
    if (rootUl) {
      const treeSection = document.createElement('div');
      treeSection.className = 'tree-section';

      const label = document.createElement('div');
      label.className = 'tree-section-label';
      label.textContent = 'Files';
      treeSection.appendChild(label);

      const treeEl = document.createElement('div');
      treeEl.className = 'tree';
      treeEl.appendChild(rootUl);
      treeSection.appendChild(treeEl);

      body.appendChild(treeSection);
    }
  }

  card.appendChild(body);
  return card;
}

function buildTree(node, github, branch, pathPrefix) {
  const ul = document.createElement('ul');

  // Directories first
  const dirs = node.dirs || {};
  for (const dirName of Object.keys(dirs).sort()) {
    const subtree = buildTree(dirs[dirName], github, branch,
      pathPrefix ? `${pathPrefix}/${dirName}` : dirName);
    if (!subtree) continue; // skip empty dirs

    const li = document.createElement('li');

    const label = document.createElement('span');
    label.className = 'dir-label';
    label.innerHTML = `<span class="tri">▶</span> ${dirName}`;

    const children = document.createElement('div');
    children.className = 'dir-children';
    children.appendChild(subtree);

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

  return ul.hasChildNodes() ? ul : null;
}
