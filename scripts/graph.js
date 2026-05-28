const DOMAIN_COLORS = {
  research_academic: '#4e9af1',
  creative_tech:     '#c084fc',
  pi_infra:          '#22c55e',
  creative_writing:  '#f472b6',
  life:              '#fb923c',
  tools:             '#f59e0b',
  hardware:          '#84cc16',
  civic:             '#14b8a6',
  art:               '#06b6d4',
  shelved:           '#4b5563',
};

const CONCEPT_COLORS = {
  theory:          '#ff6b6b',
  tech:            '#38bdf8',
  research_domain: '#34d399',
  creative:        '#e879f9',
  life:            '#fbbf24',
};

function buildElements() {
  const elements = [];

  // Count degrees to size nodes
  const degree = {};
  for (const p of graphData.projects) {
    degree[p.id] = (degree[p.id] || 0);
    for (const cid of (p.connects_to || [])) {
      degree[p.id] = (degree[p.id] || 0) + 1;
      degree[cid]  = (degree[cid]  || 0) + 1;
    }
  }
  for (const [u, v] of (graphData.concept_edges || [])) {
    degree[u] = (degree[u] || 0) + 1;
    degree[v] = (degree[v] || 0) + 1;
  }

  for (const c of graphData.concepts) {
    elements.push({ data: {
      id:     c.id,
      label:  c.label,
      type:   'concept',
      group:  c.group,
      color:  CONCEPT_COLORS[c.group] || '#888',
      degree: degree[c.id] || 0,
    }});
  }

  for (const p of graphData.projects) {
    elements.push({ data: {
      id:      p.id,
      label:   p.label,
      type:    'project',
      domain:  p.domain,
      repoKey: p.repo_key || null,
      color:   DOMAIN_COLORS[p.domain] || '#888',
      degree:  degree[p.id] || 0,
    }});
    for (const cid of (p.connects_to || [])) {
      elements.push({ data: {
        id:       p.id + '--' + cid,
        source:   p.id,
        target:   cid,
        etype:    'project-concept',
      }});
    }
  }

  for (const [u, v] of (graphData.concept_edges || [])) {
    elements.push({ data: {
      id:     u + '--' + v,
      source: u,
      target: v,
      etype:  'concept-concept',
    }});
  }

  return elements;
}

if (typeof cytoscapeFcose !== 'undefined') cytoscape.use(cytoscapeFcose);

const cy = cytoscape({
  container: document.getElementById('graph-canvas'),
  elements: buildElements(),

  layout: {
    name: (typeof cytoscapeFcose !== 'undefined') ? 'fcose' : 'cose',
    quality: 'default',
    randomize: true,
    animate: false,
    fit: true,
    padding: 60,
    nodeDimensionsIncludeLabels: true,
    nodeRepulsion: 12000,
    idealEdgeLength: 120,
    edgeElasticity: 0.4,
    gravity: 0.15,
    gravityRange: 3.8,
    numIter: 3000,
    tile: true,
    tilingPaddingVertical: 20,
    tilingPaddingHorizontal: 20,
  },

  style: [
    {
      selector: 'node',
      style: {
        'label':           'data(label)',
        'text-valign':     'bottom',
        'text-halign':     'center',
        'text-margin-y':   6,
        'text-wrap':       'none',
        'font-family':     'Segoe UI, Arial, sans-serif',
        'cursor':          'pointer',
      },
    },
    {
      selector: 'node[type = "project"]',
      style: {
        'shape':            'ellipse',
        'background-color': 'data(color)',
        'width':            'mapData(degree, 0, 10, 22, 46)',
        'height':           'mapData(degree, 0, 10, 22, 46)',
        'shadow-blur':      14,
        'shadow-color':     'data(color)',
        'shadow-opacity':   0.65,
        'shadow-offset-x':  0,
        'shadow-offset-y':  0,
        'color':            '#bbbbbb',
        'font-size':        10,
        'border-width':     1,
        'border-color':     'rgba(255,255,255,0.2)',
      },
    },
    {
      selector: 'node[type = "concept"]',
      style: {
        'shape':            'diamond',
        'background-color': 'data(color)',
        'width':            'mapData(degree, 0, 12, 38, 72)',
        'height':           'mapData(degree, 0, 12, 38, 72)',
        'shadow-blur':      22,
        'shadow-color':     'data(color)',
        'shadow-opacity':   0.85,
        'shadow-offset-x':  0,
        'shadow-offset-y':  0,
        'color':            '#ffffff',
        'font-size':        12,
        'font-weight':      'bold',
        'border-width':     1,
        'border-color':     'rgba(255,255,255,0.3)',
      },
    },
    {
      selector: 'edge[etype = "project-concept"]',
      style: {
        'line-color':           'rgba(255,255,255,0.16)',
        'width':                1.3,
        'curve-style':          'bezier',
        'target-arrow-shape':   'none',
      },
    },
    {
      selector: 'edge[etype = "concept-concept"]',
      style: {
        'line-color':           'rgba(255,255,255,0.45)',
        'width':                2.2,
        'curve-style':          'bezier',
        'target-arrow-shape':   'none',
      },
    },
    {
      selector: '.dimmed',
      style: { 'opacity': 0.12 },
    },
    {
      selector: 'node.active',
      style: {
        'border-width':   2.5,
        'border-color':   '#ffffff',
        'shadow-opacity': 1.0,
      },
    },
  ],
});

// ── Interaction ──────────────────────────────────────────────────────────────

function highlightNeighborhood(node) {
  cy.elements().removeClass('active').addClass('dimmed');
  const hood = node.closedNeighborhood();
  hood.removeClass('dimmed').addClass('active');
}

function resetHighlight() {
  cy.elements().removeClass('dimmed active');
}

cy.on('tap', 'node[type = "project"]', function(evt) {
  const node = evt.target;
  highlightNeighborhood(node);
  showPanel(node.data('id'), node.data('repoKey'), node.data('label'), node.data('domain'));
});

cy.on('tap', 'node[type = "concept"]', function(evt) {
  highlightNeighborhood(evt.target);
  closePanel();
});

cy.on('tap', function(evt) {
  if (evt.target === cy) {
    resetHighlight();
    closePanel();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { resetHighlight(); closePanel(); }
});
