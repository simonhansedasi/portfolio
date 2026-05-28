const panel      = document.getElementById('detail-panel');
const panelTitle = document.getElementById('panel-title');
const panelBody  = document.getElementById('panel-body');

const DOMAIN_LABELS = {
  research_academic: 'Research / Academic',
  creative_tech:     'Creative Tech',
  pi_infra:          'Pi Infrastructure',
  creative_writing:  'Creative Writing',
  life:              'Life / Personal',
  tools:             'Tools',
  hardware:          'Hardware',
  civic:             'Civic',
  art:               'Art',
  shelved:           'Shelved',
};

function resolveProject(nodeId, repoKey) {
  // Direct match
  if (fileStructure[nodeId]) return fileStructure[nodeId];
  // Explicit repo_key override from graph_data.yaml
  if (repoKey && fileStructure[repoKey]) return fileStructure[repoKey];
  // Normalise separators (wiki_index <-> wiki-index)
  const dash  = nodeId.replace(/_/g, '-');
  const under = nodeId.replace(/-/g, '_');
  return fileStructure[dash] || fileStructure[under] || null;
}

function showPanel(nodeId, repoKey, label, domain) {
  panel.classList.add('open');
  panelTitle.textContent = label;
  panelBody.innerHTML = '';

  const proj = resolveProject(nodeId, repoKey);

  if (proj) {
    panelBody.appendChild(buildDetail(proj));
  } else {
    panelBody.appendChild(buildPrivateCard(label, domain));
  }
}

function closePanel() {
  panel.classList.remove('open');
}

// ── Full detail view (for indexed projects) ─────────────────────────────────

function buildDetail(proj) {
  const wrap = document.createElement('div');
  wrap.className = 'panel-detail';

  // Header row: GitHub link
  if (proj.github) {
    const gh = document.createElement('a');
    gh.className = 'github-link';
    gh.href = proj.github;
    gh.target = '_blank';
    gh.rel = 'noopener';
    gh.textContent = 'GitHub ↗';
    wrap.appendChild(gh);
  }

  // Description
  if (proj.description) {
    const desc = document.createElement('p');
    desc.className = 'card-desc';
    desc.textContent = proj.description;
    wrap.appendChild(desc);
  }

  // Tech pills
  if (proj.tech && proj.tech.length) {
    const tags = document.createElement('div');
    tags.className = 'tags';
    proj.tech.forEach(t => {
      const pill = document.createElement('span');
      pill.className = 'tag';
      pill.textContent = t;
      tags.appendChild(pill);
    });
    wrap.appendChild(tags);
  }

  // README + inline images
  if (proj.readme || (proj.images && proj.images.length)) {
    const section = document.createElement('div');
    section.className = 'readme-section';

    if (proj.readme) {
      try {
        const rawBase = proj.github
          ? proj.github
              .replace('github.com', 'raw.githubusercontent.com')
              .replace(/\/tree\/[^/]+.*$/, '') + '/' + proj.branch + '/'
          : null;

        const renderer = new marked.Renderer();
        renderer.image = function(href, title, text) {
          const isRel = !/^https?:\/\//.test(href);
          const local  = isRel && proj.local_base ? proj.local_base + href : href;
          const remote = isRel && rawBase ? rawBase + href : href;
          const onerr  = `if(this.src!=='${remote}'){this.src='${remote}'}else{this.parentElement.style.display='none'}`;
          const ta     = title ? ` title="${title}"` : '';
          return `<figure class="readme-figure"><a href="${remote}" target="_blank" rel="noopener">`
            + `<img src="${local}" alt="${text||''}"${ta} class="readme-inline-img" loading="lazy" onerror="${onerr}">`
            + `</a>${text ? `<figcaption>${text}</figcaption>` : ''}</figure>`;
        };

        section.innerHTML = marked.parse(proj.readme, { renderer });
      } catch (e) {
        section.textContent = proj.readme;
      }
    }

    if (proj.images && proj.images.length) {
      const gallery = document.createElement('div');
      gallery.className = 'readme-gallery';
      proj.images.forEach(entry => {
        const local  = entry.local  || entry;
        const remote = entry.remote || entry;
        const a = document.createElement('a');
        a.href = remote; a.target = '_blank'; a.rel = 'noopener';
        const img = document.createElement('img');
        img.className = 'readme-img';
        img.src = local; img.loading = 'lazy'; img.alt = '';
        img.onerror = function() {
          if (this.src !== remote) this.src = remote;
          else this.parentElement.style.display = 'none';
        };
        a.appendChild(img);
        gallery.appendChild(a);
      });
      section.appendChild(gallery);
    }

    wrap.appendChild(section);
  }

  return wrap;
}

// ── Minimal card for private / unindexed projects ───────────────────────────

function buildPrivateCard(label, domain) {
  const wrap = document.createElement('div');
  wrap.className = 'panel-detail private';

  const pill = document.createElement('span');
  pill.className = 'tag domain-tag';
  pill.textContent = DOMAIN_LABELS[domain] || domain;
  wrap.appendChild(pill);

  const note = document.createElement('p');
  note.className = 'private-note';
  note.textContent = 'Private or unindexed project — not in public portfolio.';
  wrap.appendChild(note);

  return wrap;
}
