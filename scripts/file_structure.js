const fileStructure = {
  "GeoGastronomy": {
    "name": "GeoGastronomy",
    "description": "GeoGastronomy is the study and modeling of how Earth system variables \u2014 climate, geology, biodiversity \u2014 give rise to spatial patterns in flavor potential and culinary expression.",
    "tech": [
      "Python",
      "scikit-learn",
      "XGBoost",
      "Google Earth Engine",
      "rasterstats",
      "rasterio",
      "geopandas",
      "GDAL",
      "pandas",
      "NumPy",
      "SciPy",
      "matplotlib",
      "Jupyter"
    ],
    "github": "https://github.com/simonhansedasi/GeoGastronomy",
    "branch": "main",
    "readme": "# GeoGastronomy\n\n**GeoGastronomy** is the study and modeling of how Earth system variables \u2014 climate, geology, biodiversity \u2014 give rise to spatial patterns in flavor potential and culinary expression.\n\nThe core hypothesis: flavor complexity and intensity are partially predictable from structured Earth system features.\n\n---\n\n## Projects\n\n### [GrapeExpectations](GrapeExpectations/)\n\nPrecision viticulture research pipeline \u2014 fuses 9 years of satellite imagery, topographic data, and soil maps to model vineyard canopy health and microclimate frost risk at meter resolution. Stacked ensemble achieving R\u00b2 = 0.967. Includes a research proposal for Distributed Temperature Sensing (DTS) fiber-optic deployment across vineyard rows. Funding decision pending ~April 2026.\n\n### [JavaScript](JavaScript/)\n\nMachine-learning pipeline mapping current and future coffee suitability across the Big Island of Hawai\u02bbi (Kona and Ka\u02bbu districts). Integrates terrain, climate (ERA5-Land + NEX-GDDP-CMIP6), satellite vegetation, and soil at 500 m resolution. Includes forward climate projections to ~2045 and a USDA NIFA SCRI grant application.\n\n### [TerraMetabolica](TerraMetabolica/)\n\nGlobal-scale deterministic mapping from observed regional food systems to measured metabolite profiles. Constructs Region Sample Units (RSUs) \u2014 bounded geographic regions defined by climate regime, geology, and endemic food ingredients \u2014 and analyzes metabolite-space structure through distance computation, PCA, and clustering. No inferred values; empirical data only.\n\n---\n\n## Causal Chain\n\n```\nClimate + Geology \u2192 Ecosystem Conditions \u2192 Biodiversity & Plant Chemistry\n\u2192 Ingredient Selection \u2192 Culinary Processing \u2192 Perceived Flavor\n```\n\n---\n\n## Tech\n\nPython, scikit-learn, XGBoost, Google Earth Engine, rasterstats, rasterio, geopandas, GDAL, pandas, NumPy, SciPy, matplotlib, Jupyter\n",
    "tree": {
      "dirs": {
        "GrapeExpectations": {
          "dirs": {
            "RegressionRidge": {
              "dirs": {},
              "files": [
                "paper.tex"
              ]
            },
            "docs": {
              "dirs": {},
              "files": [
                "GrapeExpectations.tex",
                "Sample Business Plan - We Can Do It Consulting.doc",
                "Sample Business Plan - Wooden Grain Toy Company.doc",
                "Sample Lean Business Plan - Wooden Grain Toy Company.doc",
                "lean_plan.tex"
              ]
            },
            "grape_expectations": {
              "dirs": {},
              "files": [
                "__init__.py",
                "config.py"
              ]
            },
            "sensing": {
              "dirs": {},
              "files": [
                "FO_DTS_Cable_Track.csv",
                "FO_DTS_Seeps_Obstructions.csv",
                "FO_DTS_Temperature_Data.csv"
              ]
            }
          },
          "files": [
            "GrapeExpectations.py",
            "data_wrangling_env",
            "ml_env_setup"
          ]
        },
        "JavaScript": {
          "dirs": {
            "ML": {
              "dirs": {},
              "files": [
                "01_model.py",
                "02_clustering.py",
                "03_ndvi_regression.py",
                "04_similarity_search.py",
                "05_forward_projection.py"
              ]
            }
          },
          "files": [
            "cover_letter.tex",
            "paper.tex",
            "references.bib",
            "run.sh",
            "supplementary.tex"
          ]
        },
        "KushCountry": {
          "dirs": {
            "writing": {
              "dirs": {},
              "files": [
                "cover_letter.tex",
                "paper.tex",
                "references.bib",
                "utf_framework_diagram.py"
              ]
            }
          },
          "files": []
        },
        "TerraMetabolica": {
          "dirs": {
            "src": {
              "dirs": {},
              "files": [
                "fdc_fetcher.py",
                "migrate_schema.py",
                "rsu_loader.py",
                "rsu_schema.py"
              ]
            },
            "writing": {
              "dirs": {},
              "files": [
                "terrametabolica.bib",
                "terrametabolica_paper.tex",
                "terrametabolica_supplement.tex"
              ]
            }
          },
          "files": []
        }
      },
      "files": []
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/GeoGastronomy/JavaScript/Fig1.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/GeoGastronomy/main/JavaScript/Fig1.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/GeoGastronomy/JavaScript/Fig4.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/GeoGastronomy/main/JavaScript/Fig4.png"
      }
    ],
    "local_base": "images/GeoGastronomy/"
  },
  "rippleforge": {
    "name": "rippleforge",
    "description": "A causality engine for narrative. Characters, factions, and events form a relationship graph \u2014 log one event, and every connected entity feels it automatically. Cause propagates. Consequence compounds. The world keeps moving.",
    "tech": [
      "Python",
      "Flask",
      "Jinja2",
      "JavaScript",
      "Cytoscape.js",
      "Anthropic API",
      "Stripe",
      "SQLite",
      "Gunicorn",
      "nginx",
      "DigitalOcean"
    ],
    "github": "https://github.com/simonhansedasi/rippleforge",
    "branch": "master",
    "readme": "# RippleForge\n\nA causality engine for narrative. Characters, factions, and events form a relationship graph \u2014 log one event, and every connected entity feels it automatically. Cause propagates. Consequence compounds. The world keeps moving.\n\nUse it for tabletop campaigns, novels, historical timelines, alternate histories, or any story where what happens to one character ripples through everyone else.\n\n## Live\n\n`https://rippleforge.gg`\n\nTry it: `https://rippleforge.gg/demo/`\n\n---\n\n## What it does\n\nRippleForge is not a note-taking tool or character sheet replacement. It models **cause and effect** across a narrative world.\n\n### As a worldbuilding tool\n\n- **Ripple system** \u2014 log one event against any entity, and every connected character and faction updates automatically based on their relationship (allies share the impact, rivals feel the opposite)\n- **AI event parsing** \u2014 paste raw session notes, chapter summaries, or historical records; get structured log entries matched to known entities with polarity and intensity assigned\n- **Projected consequences** \u2014 AI reads every active tension in the world and forecasts what happens next; Narrator reviews, selects, commits\n- **World diff** \u2014 every commit shows a before/after snapshot: score changes, relationship label shifts, entries added\n- **Intelligence layer** \u2014 algorithmic ranked lists of active pressure, consequence risk, stale threads, and narrative gaps; no manual curation\n- **Branching timelines** \u2014 fork from any point and write alternate histories inside the same world; switch between timelines to compare how the graph diverges\n\n### As a writing assistant\n\n- **Dual-axis relationships** \u2014 formal and personal relationship axes that can conflict; rendered as separate arcs in the world graph\n- **Per-player fog of war** \u2014 each character knows only what they've witnessed; author can preview the world through any character's eyes\n- **Ripple chain view** \u2014 visual cause\u2192effect chains showing every downstream consequence of any source event\n- **Session brief** \u2014 algorithmic pre-session intel: pending futures, active tensions, stale threads, narrative gaps\n\n### As a party game\n\n- **Pass-the-phone collaborative storytelling** \u2014 30-minute session, 2\u20136 players, no prep\n- **Secret objectives** \u2014 each player gets a private mission that may conflict with the group's arc; relationship biases (trusts/suspects) add tension\n- **AI arc generation** \u2014 give the group a genre, place, and faction; the AI writes an arc with three open-ended leads (not linear steps)\n- **AI epilogue** \u2014 at the end, reveals everyone's secret missions and generates a prose epilogue\n- **World persists** \u2014 after the game, the campaign lives on as a full RippleForge world\n\nRippleForge does not invent narrative. AI proposes; Narrator approves; the world updates.\n\n---\n\n## Concept: AI as referee\n\nThe AI role is constraint enforcement, not storytelling:\n\n- **Summarization** \u2014 compresses session notes into a chronicle\n- **Event parsing** \u2014 extracts discrete world events from freeform notes or text\n- **Consequence projection** \u2014 given current world state, predicts what logically follows\n- **Arc generation** \u2014 builds story arcs with open-ended leads for groups to pursue\n- **Narrator always approves** \u2014 nothing is written without explicit commit\n\n---\n\n## Starter Worlds\n\nSix cloneable demo campaigns show the system across domains:\n\n| World | Domain | Sessions |\n|-------|--------|---------|\n| The Iliad | Epic fiction | 8 books |\n| The Book of Genesis | Biblical fiction | 15 |\n| World War II | Historical (1933\u20131945) | 12 |\n| Wars of the Roses | Historical | 9 periods |\n| The Ashcroft Vein | Original TTRPG fiction | 5 |\n| Paladin's Grace | Original TTRPG fiction | 4 |\n\nThe Ashcroft Vein doubles as the demo source (`DEMO_SOURCE=ashford`).\n\n**Note on share links:** Each starter world has a read-only `/share/<token>` URL. The token is stored in `campaign.json` and regenerates every time the seed script runs. After any re-seed, retrieve the new token from `campaigns/<slug>/campaign.json` on the Pi and update any hardcoded links in `templates/landing.html`.\n\n---\n\n## Pricing\n\n| Tier | Price | Worlds |\n|------|-------|--------|\n| Free | \u2014 | 1 world |\n| Pro Monthly | $8/mo | 5 worlds + AI features |\n| Pro Annual | $76/yr (save $20) | 5 worlds + AI features |\n| World add-on | $1 one-time | +1 world (stacks) |\n| Party game | 1 free, then $2/game | Non-Pro users |\n\nPlayers (read-only share link) are always free. Only Narrator accounts pay.\n\n14-day free trial on Pro Monthly.\n\n---\n\n## User Accounts\n\nGoogle OAuth at `/auth/google` \u2014 no password required. Username derived from email prefix on first sign-in.\n\nUsername/password login still works for legacy accounts (`users.json`, werkzeug pbkdf2).\n\n```json\n{\n  \"users\": {\n    \"username\": {\n      \"password_hash\": \"<hash>\",\n      \"display_name\": \"Display Name\",\n      \"ai_enabled\": true,\n      \"world_limit\": 5,\n      \"party_plays\": 0\n    }\n  }\n}\n```\n\n**AI gate:** AI features require `ai_enabled: true`. New signups default to `false`. Admin generates KS codes at `/admin/ks-codes`. Users redeem at `/redeem`.\n\n---\n\n## Worlds (Campaigns)\n\nEach world is a folder under `campaigns/<slug>/`. Three access modes:\n\n| Mode | Flag in campaign.json | Who can write |\n|------|----------------------|---------------|\n| Normal | `\"owner\": \"username\"` | Owner + Narrator PIN |\n| Public (read-only) | `\"public\": true` | Nobody (Narrator login still works) |\n| Demo | `\"demo_mode\": true` | Everyone |\n\nThree world modes: `ttrpg` | `fiction` | `historical`. Mode drives all UI labels and nav structure. Party games use `fiction` mode.\n\n---\n\n## Demo\n\n`/demo/` is a live writable copy of The Ashcroft Vein (original fiction, no third-party IP). Resets every 30 minutes.\n\nThe demo includes a 4-step guided tour and an AI tools page at `/demo/ai`.\n\n**Parse limit:** Visitors get 3 free live parses. Tracked via `demo_id` cookie (30-day).\n\n---\n\n## Narrator Mode\n\nLog in via the **Narrator** link in the nav. Each world has a Narrator PIN in `campaign.json`.\n\n---\n\n## AI Features\n\nRequires `ANTHROPIC_API_KEY` in `.env` at repo root. Uses `claude-haiku-4-5-20251001`.\n\n| Feature | Route | Description |\n|---------|-------|-------------|\n| Generate Recap | `POST /<slug>/dm/session/recap` | Chronicle from session notes |\n| Parse into Events | `POST /<slug>/dm/session/propose` | Notes \u2192 structured log entries for review |\n| Commit parsed | `POST /<slug>/dm/session/commit_proposals` | Write approved entries + trigger ripples |\n| What happens next | `POST /<slug>/dm/world/futures` | Consequence projections from world state |\n| Commit futures | `POST /<slug>/dm/world/commit_futures` | Write as PROJECTED entries, returns world diff |\n| Party arc | `POST /<slug>/play/generate-arc` | Generate story arc + 3 open-ended leads |\n| Party secrets | `POST /<slug>/play/generate-secrets` | Generate per-character secret objectives |\n| Party summary | `POST /<slug>/play/generate-summary` | Generate prose epilogue for done screen |\n\nAll narrative AI routes require Narrator auth **and** `ai_enabled: true` (or `admin: true`). Party AI routes are unauthed (rate-limited).\n\n---\n\n## URL Structure\n\n```\n/                            Login page / My worlds (authenticated)\n/demo/                       Live writable demo\n/demo/ai                     AI tools demo page\n/share/<token>               Read-only via share link\n/welcome                     Party mode entry point (POST choice=party)\n/billing                     Subscription management\n/billing/checkout/pro        Stripe checkout \u2014 monthly Pro\n/billing/checkout/pro-annual Stripe checkout \u2014 annual Pro\n/billing/party/success       Post-payment redirect for $2 party game\n\n/<slug>/                     World home\n/<slug>/party                Cast roster\n/<slug>/assets               Currency, items, ships, stronghold\n/<slug>/world                Entity and faction overview\n/<slug>/world/ripples        Ripple chain visualization\n/<slug>/world/npc/<id>       Character detail + interaction log\n/<slug>/world/faction/<id>   Faction detail\n/<slug>/story                Quest / arc log\n/<slug>/journal              Session journal\n/<slug>/brief                Narrator briefing (full intelligence report)\n/<slug>/play                 Party game screen (setup/arc/secrets/play/done)\n\n/<slug>/dm                   Narrator dashboard\n/<slug>/dm/login             Narrator PIN entry\n/<slug>/branch/create        Create alternate timeline branch (POST)\n/<slug>/branch/switch        Switch active branch (POST)\n/<slug>/branch/delete        Delete branch + purge entries (POST)\n```\n\n---\n\n## Data Model\n\n```\ncampaigns/<slug>/\n  campaign.json        name, system, slug, owner, dm_pin, share_token, mode, terminology, observer_name, branches[]\n  party.json           characters: [{name, assigned_user, known_events, ...}]\n  assets.json          currency, items, ships[{name, type, log[]}], stronghold\n  world/\n    npcs.json          npcs: [{id, name, role, relationship, log, hidden, factions, relations}]\n    factions.json      factions: [{id, name, relationship, log, hidden, relations}]\n    locations.json     locations: [{id, name, role, description, log, hidden, dm_notes}]\n  story/\n    quests.json\n  dm/\n    session.json       plan (markdown), notes\n    party_game.json    phase, genre, characters, place, faction, arc, history, secret_objectives\n  journal.json         {entries: [{session, date, recap}]}\n  references.json\n```\n\n### Log entry schema\n\n```json\n{\n  \"id\": \"evt_abc123\",\n  \"session\": 4,\n  \"note\": \"Allied with the resistance against the occupation.\",\n  \"visibility\": \"public\",\n  \"polarity\": \"positive\",\n  \"intensity\": 2,\n  \"event_type\": \"politics\",\n  \"axis\": \"formal\",\n  \"actor_id\": \"iarno_albrek\",\n  \"actor_type\": \"npc\",\n  \"ripple_source\": { \"entity_id\": \"iarno_albrek\", \"entity_type\": \"npc\", \"event_id\": \"evt_111\" },\n  \"branch\": \"br_ef30f2\",\n  \"deleted\": true\n}\n```\n\n`event_type` is freeform. Reserved: `projected` (AI-committed consequence projection).\n`axis` = `\"formal\"` | `\"personal\"` | absent. Only tagged entries feed the dual-axis conflict display.\n`deleted: true` = soft-deleted. Never shown or counted in scores. Filter in every code path that reads logs.\n`actor_id` / `actor_type` \u2014 display context for inter-entity events. Not a scoring exclusion.\n`branch` is only present on entries belonging to an alternate timeline branch.\n\n### Relationship computation\n\n`compute_npc_relationship(npc)` \u2014 decay-weighted score from all polarity events (0.85^age per session). Score thresholds: `allied` (\u22656), `friendly` (\u22653), `neutral` (\u2265\u22123), `hostile` (<\u22123). Stored `relationship` field acts as score floor.\n\n---\n\n## Setup\n\n```bash\ncd rippleforge\npython3 -m venv venv\nvenv/bin/pip install flask markdown werkzeug anthropic python-dotenv flask-limiter\nvenv/bin/python app.py\n```\n\nRuns at `http://localhost:5052`.\n\n---\n\n## Deploy\n\n**Live site is on DigitalOcean (68.183.130.60). Edits happen on sbook. Two-step deploy:**\n\n**Step 1 \u2014 push sbook \u2192 Pi:**\n```bash\nrsync -av --exclude='venv/' --exclude='campaigns/' --exclude='.env' \\\n  /home/simonhans/coding/rippleforge/ simonhans@raspberrypi:/mnt/serverdrive/coding/rippleforge/\n```\n\n**Step 2 \u2014 Pi \u2192 DO:**\n```bash\nssh simonhans@raspberrypi \"cd /mnt/serverdrive/coding/rippleforge && ./deploy_do.sh\"\n```\n\nSkipping step 1 means `deploy_do.sh` pushes the Pi's stale copy \u2014 nothing new arrives on the live site.\n\nSystemd service: `/etc/systemd/system/rippleforge.service`. nginx routes `rippleforge.gg` \u2192 `127.0.0.1:5052`.\n\n\n## Stack\n\nPython, Flask, Jinja2, JavaScript, Cytoscape.js, Anthropic API, Stripe, SQLite, Gunicorn, nginx, DigitalOcean\n",
    "tree": {
      "dirs": {
        "seeds": {
          "dirs": {},
          "files": [
            "seed_ashford.py",
            "seed_genesis.py",
            "seed_iliad.py",
            "seed_paladins_grace.py",
            "seed_roses.py",
            "seed_ww2.py"
          ]
        },
        "src": {
          "dirs": {},
          "files": [
            "__init__.py",
            "ai.py",
            "app.py",
            "data.py",
            "email.py",
            "importer.py",
            "npc.html"
          ]
        },
        "static": {
          "dirs": {},
          "files": [
            "style.css",
            "sw.js",
            "tour.js"
          ]
        },
        "templates": {
          "dirs": {
            "account": {
              "dirs": {},
              "files": [
                "password.html"
              ]
            },
            "admin": {
              "dirs": {},
              "files": [
                "index.html",
                "invites.html",
                "ks_codes.html",
                "login.html"
              ]
            },
            "dm": {
              "dirs": {},
              "files": [
                "add_character.html",
                "add_faction.html",
                "add_npc.html",
                "add_quest.html",
                "brief.html",
                "import.html",
                "index.html",
                "log.html",
                "login.html",
                "npc.html"
              ]
            }
          },
          "files": [
            "add_npc.html",
            "app.py",
            "assets.html",
            "base.html",
            "billing.html",
            "brief.html",
            "campaign.html",
            "demo_ai.html",
            "demo_splash.html",
            "faction.html",
            "graph.html",
            "guide.html",
            "index.html",
            "journal.html",
            "landing.html",
            "location.html",
            "login.html",
            "npc.html",
            "party.html",
            "party_play.html",
            "redeem.html",
            "references.html",
            "ripples.html",
            "setup_wizard.html",
            "signup.html",
            "story.html",
            "welcome.html",
            "wiki.html",
            "world.html"
          ]
        }
      },
      "files": [
        "app.py",
        "backup.sh",
        "deploy.sh",
        "make_icons.py"
      ]
    },
    "images": [],
    "local_base": "images/rippleforge/"
  },
  "glacier_prethicktor": {
    "name": "glacier_prethicktor",
    "description": "Published: Edasi SH and Lipovsky BP (2026) \"Tidewater and lake-terminating glaciers are systematically thicker.\" Journal of Glaciology 72, e28, 1\u20138. https://doi.org/10.1017/jog.2026.10123",
    "tech": [
      "Python 3.8",
      "TensorFlow/Keras 2.12",
      "pandas",
      "NumPy",
      "geopy",
      "matplotlib",
      "tqdm",
      "Pillow",
      "Jupyter"
    ],
    "github": "https://github.com/simonhansedasi/glacier_prethicktor",
    "branch": "main",
    "readme": "# glacier_prethicktor\n\n[![DOI](https://zenodo.org/badge/459624562.svg)](https://zenodo.org/doi/10.5281/zenodo.11105541)\n\n**Published:** Edasi SH and Lipovsky BP (2026) \"Tidewater and lake-terminating glaciers are systematically thicker.\" *Journal of Glaciology* **72**, e28, 1\u20138. https://doi.org/10.1017/jog.2026.10123\n\nA data-driven pipeline to estimate glacier thicknesses globally using a shallow neural network, and to quantify how ice\u2013ocean and ice\u2013lake interactions shape glacier volume at a planetary scale.\n\nRather than relying on ice-flow physics, we treat thickness estimation as a regression problem: train on glacier-averaged thickness measurements from GlaThiDa, predict for all glaciers in the RGI, then compare models trained with and without water-terminating glaciers to isolate the volumetric imprint of tidewater and lake termini.\n\n---\n\n## Key Finding\n\nTidewater and lake-terminating glaciers are systematically thicker than land-terminating glaciers. Globally, this effect accounts for approximately **20% of non-ice-sheet glacier volume** \u2014 equivalent to ~6 cm of sea level rise. The result is consistent with height-above-buoyancy mechanics: water pressure at the ice front permits thicker termini than are stable in air, setting a different boundary condition for equilibrium glacier geometry.\n\n---\n\n## Data\n\n| Dataset | Content | n |\n|---------|---------|---|\n| GlaThiDa 3.1.0 (T dataset) | Glacier-averaged (mean scale) thickness measurements | 500 unique glaciers |\n| RGI 6.0 | Surface attributes: latitude, longitude, area, slope, elevation, max length | 216,501 glaciers (globally complete) |\n| Farinotti et al. 2019 | Consensus physics-based thickness estimates (reference benchmark) | All RGI glaciers |\n\nOnly the 'T' dataset from GlaThiDa is used \u2014 glacier-averaged thicknesses, not point measurements.\n\n---\n\n## Pipeline\n\nRun notebooks in order. Set `home_path` in `path_manager.py` first.\n\n| Notebook | What it does |\n|----------|-------------|\n| `00-install_packages.ipynb` | Install TensorFlow, verify versions |\n| `01-acquire_data.ipynb` | Download RGI, GlaThiDa, Farinotti; extract data files |\n| `02-match_glacier_centroids.ipynb` | Co-register GlaThiDa to nearest RGI centroid; produce `matched.pkl` |\n| `1-coregistration_testing.ipynb` | Test 4 distance thresholds (T = 999, 0.75, 0.5, 0.25 \u2192 400/273/202/105 labels); select T = 0.75 |\n| `2-LOO_archtesting.ipynb` | Architecture search over neuron counts and loss functions |\n| `3-LOO_archselection.ipynb` | Rank and select best model |\n| `4-LOO.ipynb` | Leave-one-out CV: train 273 models, one glacier held out per iteration |\n| `5-vol_confidence_interval.ipynb` | Glacier volume \u00d7 uncertainty; global volume estimate |\n| `6-LOO_analysis.ipynb` | Residuals, Farinotti comparison, regional breakdown |\n\nSupplementary analysis: `P1\u2013P5` (plots), `T1\u2013T2` (results tables), `permutation_test.ipynb`, `global_sum_differences.ipynb`.\n\n---\n\n## Model\n\n**Architecture** (Shallow Neural Network):\n```\nInput (6 features) \u2192 Normalization (z-score) \u2192 Dense(6, ReLU) \u2192 Dropout(0.1) \u2192 Dense(2, ReLU) \u2192 Dense(1)\n```\n- Optimizer: Adam (lr=0.01), validation split: 0.2\n- Loss: MAE and MSE (both evaluated)\n- Early stopping: patience=10, min_delta=0.001, up to 500 epochs, restore best weights\n- Seed: `SEED=378`, deterministic via `set_global_determinism()`\n\n**Validation**: Leave-one-out CV over N_j = 273 co-registered glaciers \u2014 every glacier is held out once and trained on many times, producing a full distribution of predictions for uncertainty quantification.\n\n**Uncertainty sources** (three components per glacier):\n1. Measurement uncertainty from GlaThiDa (power law fit: \u221aVar \u2248 0.07 \u00d7 h^0.8)\n2. LOO variance (spread of predictions across iterations)\n3. Model residual uncertainty (power law fit: \u221aVar \u2248 0.04 \u00d7 h^0.6)\n\n---\n\n## Results\n\n| Model | Global volume |\n|-------|--------------|\n| This study (excluding ice-shelf terminating from training) | 136 \u00b1 2 \u00d7 10\u00b3 km\u00b3 |\n| This study (also excluding ocean- and lake-terminating) | 126.1 \u00b1 3.3 \u00d7 10\u00b3 km\u00b3 |\n| Farinotti et al. 2019 | 158 \u00b1 16 \u00d7 10\u00b3 km\u00b3 |\n\nThe ~20% difference between the land-terminating-only model and the full dataset is driven by a small number of glaciers: 70% of the discrepancy comes from just 0.4% of RGI glaciers (~1,000 glaciers), concentrated in Antarctic/Subantarctic, North Canadian Arctic, Iceland, Svalbard, and the Russian Arctic.\n\nThickness residual: \u22123 \u00b1 28 m (this study) vs. 3 \u00b1 33 m (F19).\n\n---\n\n## Setup\n\n```bash\nconda create -n glacierml python=3.8.10\nconda activate glacierml\npip install ipykernel\npython -m ipykernel install --user --name=glacierml --display-name=\"glacierml (Python 3.8.10)\"\npip install tensorflow==2.12.0 pandas numpy geopy tqdm requests matplotlib scikit-learn pillow\n```\n\nEdit `path_manager.py` and set `home_path` to your working directory.\n\n---\n\n## Tech\n\nPython 3.8, TensorFlow/Keras 2.12, pandas, NumPy, geopy, matplotlib, tqdm, Pillow, Jupyter\n\n---\n\n## Citation\n\n```\nEdasi SH and Lipovsky BP (2026) Tidewater and lake-terminating glaciers are\nsystematically thicker. Journal of Glaciology 72, e28, 1\u20138.\nhttps://doi.org/10.1017/jog.2026.10123\n```\n\nCode archived at: https://zenodo.org/records/11106415\n\n## References\n\n- Farinotti et al. 2019 \u2014 \"A consensus estimate for the ice thickness distribution of all glaciers on Earth.\" *Nature Geoscience* 12, 168\u2013173. https://doi.org/10.1038/s41561-019-0300-3\n- RGI Consortium (2017). Randolph Glacier Inventory, Version 6. https://doi.org/10.7265/4m1f-gd79\n- Welty et al. 2020 \u2014 GlaThiDa v3.1.0. *Earth System Science Data* 12, 3039\u20133055. https://doi.org/10.5194/essd-12-3039-2020\n",
    "tree": {
      "dirs": {
        "project2": {
          "dirs": {},
          "files": [
            "path_manager2.py"
          ]
        },
        "scripts": {
          "dirs": {},
          "files": [
            "00_install_packages.py",
            "01_acquire_data.py",
            "02_match_glacier_centroids.py"
          ]
        }
      },
      "files": [
        "glacierml.py",
        "path_manager.py",
        "setup.py"
      ]
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/glacier_prethicktor/discrepancy_boxplot.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/simonhansedasi.github.io/main/images/discrepancy_boxplot.png"
      }
    ],
    "local_base": "images/glacier_prethicktor/"
  },
  "glacier_prethicktor_2": {
    "name": "glacier_prethicktor_2",
    "description": "",
    "tech": [],
    "github": "https://github.com/simonhansedasi/glacier_prethicktor_2",
    "branch": "main",
    "readme": "",
    "tree": {
      "dirs": {
        "data_wrangling": {
          "dirs": {},
          "files": [
            "01_acquire_data.py",
            "02_extract_depths.py",
            "03_bedmachine.py"
          ]
        },
        "figures": {
          "dirs": {},
          "files": [
            "05_figures_observed.py",
            "06_figures_modeled.py",
            "07_figures_bedmachine.py"
          ]
        },
        "ml": {
          "dirs": {},
          "files": [
            "03_constraint_analysis.py",
            "04_hab_modeled.py",
            "05_robustness.py"
          ]
        }
      },
      "files": [
        "glacierml.py",
        "main.tex",
        "paths.py",
        "references.bib"
      ]
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/glacier_prethicktor_2/figures/bedmachine_vs_farinotti.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/glacier_prethicktor_2/main/figures/bedmachine_vs_farinotti.png"
      }
    ],
    "local_base": "images/glacier_prethicktor_2/"
  },
  "sf_majick": {
    "name": "sf_majick",
    "description": "A Salesforce sales org simulator \u2014 imports real CRM data, calibrates a behavioral model to match observed outcomes, and runs agent-based simulations to predict and experiment on org performance.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/sf_majick",
    "branch": "main",
    "readme": "# sf_majick\n\nA Salesforce sales org simulator \u2014 imports real CRM data, calibrates a behavioral model to match observed outcomes, and runs agent-based simulations to predict and experiment on org performance.\n\n![AND vs OR gate logic and resulting funnel shapes](figures/fig0_gate_mechanism.png)\n\n## What it does\n\nThe goal is to \"clone\" a Salesforce org: given a SOQL export of real opportunities, accounts, leads, and users, back-fit a parameterized simulation whose conversion rates, cycle times, and deal difficulty distribution match the real org. Then run what-if experiments \u2014 different rep archetypes, coaching interventions, pipeline hygiene changes \u2014 and measure the impact.\n\n### Simulation layer\n\nEach simulated day, rep agents work through their pipeline using a 3-step lookahead decision engine. They pick micro-actions (emails, calls, meetings, proposals, internal prep) based on their personality archetype, the entity's sentiment state, and expected future value. Macro events (stage advancement, lead conversion, close/lost) fire stochastically, with probabilities modulated by sentiment, momentum, friction, deal difficulty, and rep behavior.\n\n**Rep archetypes:** Closer, Nurturer, Grinder, Scattered \u2014 each with distinct personality traits (aggression, empathy, discipline) that drive action affinity, distraction rates, and burnout thresholds. Reps can be scheduled to join mid-simulation via `RepSlot.start_day`.\n\n**Micro-actions (9):** `send_email`, `make_call`, `hold_meeting`, `follow_up`, `research_account`, `internal_prep`, `solution_design`, `stakeholder_alignment`, `send_proposal` \u2014 each with attention cost, gating requirements, and sentiment effect.\n\n**Macro transitions (5):** Lead advancement, lead conversion \u2192 Account + Opportunity, stage advancement (Prospecting \u2192 Qualification \u2192 Proposal \u2192 Negotiation), opportunity close (Won/Lost), passive decay/death.\n\n**Sentiment engine:** Every touch updates entity sentiment; neglected entities decay passively. Sentiment history feeds momentum and friction signals that modulate macro probabilities and rep decision-making.\n\n**Burnout dynamics:** Reps accumulate workload stress each day via `end_of_day()` (actions taken, deals worked). Stress above the archetype's burnout threshold craters available attention and increments `days_burned_out`.\n\n**Human biases modeled:** Recency bias, sunk-cost bias, distraction (discipline-dependent), burnout, and learned timing weights (per-rep EMA of observed sentiment deltas per action/stage pair).\n\n### Calibration\n\n`OrgCalibrator` takes a Salesforce SOQL export and derives simulation parameters by back-fitting observed metrics:\n\n- Win rate, lost rate, cycle time \u2192 `base_prob_close`, `base_prob_lost`, stagnation/inactivity alphas\n- Stage distribution \u2192 per-stage advancement probabilities\n- Account and revenue distributions \u2192 seed state for the simulation\n\nThe result is an `OrgConfig` \u2014 probability fields overlay the `theta` dict \u2014 whose simulated org behaviorally matches the real one. Experiments run against this baseline.\n\n`OrgConfig` also accepts deal-size parameters (`lead_revenue_base`, `lead_revenue_sigma`, `account_revenue_mean_log`, `account_revenue_sigma_log`) to control revenue distributions directly from config rather than relying on entity defaults.\n\n### Experiments\n\n`ExperimentRunner` runs N iterations of a baseline and alternative scenarios and compares:\n- Won rate, revenue per run, avg rep earnings\n- Stage distribution and deal stall analysis\n- Rep stress / burnout distribution\n- Sentiment trajectory and action effect sizes\n\n**Statistical analysis:** `pipeline.py` computes terminal-state feature dataframes and `build_sentiment_effects()` runs raw mean sentiment delta per action (with CIs) and OLS-adjusted coefficients controlling for stage, rep, and outcome \u2014 identifying which actions actually move deals vs. which just correlate with deals that were going to move anyway.\n\n## Tests\n\n```bash\npytest tests/test_sim.py -v\n```\n\nCovers: requirement-tree consume logic (AND/OR correctness), commission single-credit, burnout accumulation, deferred rep `start_day`, full smoke runs, and double-commission regression.\n\n## Tech\n\nPython \u2014 `requests` (Salesforce OAuth/SOQL), `dataclasses`, `numpy`, `pandas`, `statsmodels` (OLS), `scipy`, `setuptools`\n\n## Setup\n\n```bash\npip install -e .\n```\n\nRequires a `.env` with Salesforce credentials:\n```\nSF_CLIENT_ID=...\nSF_CLIENT_SECRET=...\nSF_REFRESH_TOKEN=...\nSF_INSTANCE_URL=https://yourorg.salesforce.com\n```\n\n## Run\n\n```python\nfrom sf_majick.sim.org_calibrator import OrgCalibrator, ExperimentRunner, build_state_from_config\nfrom sf_majick.sim.org_config import OrgConfig, RepSlot\nfrom sf_majick.functions import SalesforceAuth\n\nsf = SalesforceAuth()\ncalibrator = OrgCalibrator(sf)\nconfig = calibrator.calibrate()\n\nrunner = ExperimentRunner(config)\nresults = runner.compare([\n    config,                             # baseline\n    config_with_more_closers,           # scenario A\n    config_with_coaching_intervention,  # scenario B\n])\n```\n\nHire reps mid-simulation:\n```python\nfrom sf_majick.sim.org_config import OrgConfig, RepSlot\n\ncfg = OrgConfig(\n    rep_slots=[\n        RepSlot(\"Closer\", count=3, start_day=0),\n        RepSlot(\"Grinder\", count=2, start_day=30),   # joins on day 30\n    ],\n    days=90,\n)\n```\n\nOr run the simulation directly with a hand-built config:\n```python\nfrom sf_majick.sim.run_simulation import run_experiment\nresults = run_experiment(n_runs=100, days=90)\n```\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {},
          "files": [
            "whitepaper_funnel.csv",
            "whitepaper_results.csv",
            "whitepaper_summary.csv",
            "whitepaper_transitions.csv"
          ]
        },
        "sf_majick": {
          "dirs": {
            "sim": {
              "dirs": {},
              "files": [
                "__init__.py",
                "build_baseline.py",
                "economics.py",
                "entities.py",
                "logger.py",
                "macro_actions.py",
                "micro_actions.py",
                "micro_policy.py",
                "org_calibrator.py",
                "org_config.py",
                "pipeline.py",
                "probabilities.py",
                "reps.py",
                "requirement_config.py",
                "requirement_integration.py",
                "requirement_miner.py",
                "run_simulation.py",
                "sentiment.py",
                "sentiment_effects.py",
                "simulate.py",
                "simulator.html",
                "theta.py",
                "usage_examples.py",
                "utility_engine.py",
                "utils.py"
              ]
            }
          },
          "files": [
            "__init__.py",
            "functions.py"
          ]
        },
        "tests": {
          "dirs": {},
          "files": [
            "test_sim.py"
          ]
        }
      },
      "files": [
        "make_figures.py",
        "make_gate_figure.py",
        "run_whitepaper.py",
        "setup.py"
      ]
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/sf_majick/figures/fig0_gate_mechanism.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/sf_majick/main/figures/fig0_gate_mechanism.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/sf_majick/figures/fig1_winrate_paradox.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/sf_majick/main/figures/fig1_winrate_paradox.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/sf_majick/figures/fig2_revenue_distribution.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/sf_majick/main/figures/fig2_revenue_distribution.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/sf_majick/figures/fig3_funnel_shape.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/sf_majick/main/figures/fig3_funnel_shape.png"
      }
    ],
    "local_base": "images/sf_majick/"
  },
  "char_gen": {
    "name": "char_gen",
    "description": "A population-scale stochastic simulation of D&D 5e (2014 PHB) character demographics, supporting the paper:",
    "tech": [
      "Python",
      "SQLite",
      "NumPy",
      "pandas",
      "matplotlib",
      "scipy",
      "LaTeX",
      "Jupyter"
    ],
    "github": "https://github.com/simonhansedasi/char_gen",
    "branch": "main",
    "readme": "# char_gen\n\nA population-scale stochastic simulation of D&D 5e (2014 PHB) character demographics, supporting the paper:\n\n> **\"The Fingerprint of Rules: Procedural Demographic Attractors in the D&D 5e Player's Handbook\"**\n> Simon-Hans Edasi\n\nRule-based generative systems implicitly define populations. This project treats the PHB's character creation rules as a generative demographic model and simulates 500,000 first-level characters to recover the theoretical population those rules produce \u2014 and to demonstrate a method for extracting latent population structure from any rule-based system.\n\n## Key findings\n\n- **Human-adjacent species** (Human, Human Variant, Half-Elf) account for ~37% of adventurers despite representing only 20% of available species \u2014 they function as global high-flexibility attractors.\n- **Fighter** is the demographic default: ~25% of adventurers. Sensitivity analysis confirms this is entirely structural \u2014 not an artifact of the selection algorithm.\n- **Physical-skill backgrounds** dominate; scholarly backgrounds (Sage) are the least represented.\n- **Alignment** tracks world difficulty: stricter viability thresholds produce more \"dead farmers\" and shift the surviving population toward Evil/Chaotic alignments.\n\n## Attractor taxonomy\n\nThe paper introduces *procedural demographic attractors* \u2014 stable configurations in a rule system's design space where structural constraints concentrate generated agents into recurring demographic patterns:\n\n- **High-flexibility attractors** dominate the population (Fighter, human-adjacent species)\n- **Conditional attractors** capture mass at specific configurations (Rangers, Clerics, classical demi-human species)\n- **Low-density attractors** remain rare despite equal availability (Druids, Warlocks, fantastical species)\n- **Dynamic attractors** shift under pressure (alignment, via the dead-farmer mechanism)\n\n## Structure\n\n```\ngen.py                          core generation logic\nsimulate.py                     CLI Monte Carlo runner\ntables.py                       LaTeX table generation from dnd.db\nsensitivity_analysis.py         feat-weight sensitivity runner\ndnd.db                          SQLite: game data + simulation results\nmain.tex                        paper (LaTeX)\nreferences.bib                  bibliography\nfigs/                           generated figures\nsimulation.ipynb                main results analysis\nattribute_class.ipynb           attribute\u2013class correlations\nattribute_correlation.ipynb     chi-squared residuals, Cram\u00e9r's V\nfighter_tiebreak_sensitivity.ipynb   tie-breaking sensitivity analysis\ndndbeyond_comparison.ipynb      comparison with D&D Beyond 2023 player data\nthreshold_sensitivity.ipynb     viability threshold grid analysis\n```\n\n## Running the simulation\n\n```bash\npython simulate.py              # 50 runs \u00d7 10,000 characters (baseline)\n```\n\nCached results are stored as `.pkl` files. Notebooks load from cache if present.\n\n## Demographics at a glance\n\n![Chi-squared residuals: species \u00d7 class](chisq_resid_species_class.png)\n![Attribute correlation across builds](attribute_correlation.png)\n\n## Tech\n\nPython, SQLite, NumPy, pandas, matplotlib, scipy, LaTeX, Jupyter\n",
    "tree": {
      "dirs": {
        "js": {
          "dirs": {},
          "files": [
            "character-loader.js"
          ]
        },
        "templates": {
          "dirs": {},
          "files": [
            "index.html"
          ]
        }
      },
      "files": [
        "app.py",
        "author_biography.docx",
        "chargen.py",
        "gen.py",
        "index.html",
        "main.docx",
        "main.tex",
        "references.bib",
        "sensitivity_analysis.py",
        "simulate.py",
        "style.css",
        "tables.py",
        "title_page.docx"
      ]
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/char_gen/attribute_correlation.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/attribute_correlation.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/char_gen/chisq_resid_class_background.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/chisq_resid_class_background.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/char_gen/chisq_resid_species_background.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/chisq_resid_species_background.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/char_gen/chisq_resid_species_class.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/chisq_resid_species_class.png"
      }
    ],
    "local_base": "images/char_gen/"
  },
  "dada_science": {
    "name": "dada_science",
    "description": "Rigorous statistical analysis of toddler behavior \u2014 plus a real-time data logging app on Raspberry Pi and a library book recommender.",
    "tech": [
      "Python",
      "Flask",
      "SQLite",
      "pandas",
      "NumPy",
      "matplotlib",
      "seaborn",
      "statsmodels (ANOVA/STL/ARIMAX)",
      "scikit-learn (TF-IDF)",
      "Click",
      "Rich",
      "Requests",
      "Raspberry Pi",
      "Tailscale"
    ],
    "github": "https://github.com/simonhansedasi/dada_science",
    "branch": "main",
    "readme": "# Dada Science\n\nRigorous statistical analysis of toddler behavior \u2014 plus a real-time data logging app on Raspberry Pi and a library book recommender.\n\n> *noun* **dada scientist** /\u02c8d\u0251\u02d0d\u0251\u02d0 \u02c8sa\u026a\u0259nt\u026ast/ \u2014 a data scientist hired, ostensibly against their better judgement, to raise a toddler. Applies rigorous statistical methods to questions that would embarrass a peer reviewer but are of urgent operational importance at 6:45 AM.\n\nA collection of analytical studies on toddler behavior \u2014 sleep, snacks, potty training, Easter eggs \u2014 conducted with the same seriousness one would bring to modeling commodity futures. The repo also includes a real-time data logging app (Dada Tracker) running on a Raspberry Pi and a library book recommendation engine. All study data is **simulated/synthetic**. No actual toddlers were mined for data without consent, or denied their Cocopuff incentive in the name of science.\n\n---\n\n## Studies\n\n| Script | Description | Method |\n|--------|-------------|--------|\n| `potty_training.py` | Time Until Potty (TuP) by location, book reading, and incentive type | Simulated week of events; scatter + boxplot visualizations |\n| `snack_sugar_content.py` | Tantrum duration drivers across 1,000 synthetic snack records | Two-way ANOVA + Tukey HSD; time-of-day explains 76.9% of variance |\n| `nap_timeseries.py` | 141-day Jul\u2013Nov time series: daylight + DST end drive nap collapse | STL decomposition (trend, seasonal, residual) |\n| `missed_nap_lag.py` | 130-day lagged analysis of missed naps vs. overnight sleep quality | ARIMAX with \"berry season\" as natural experiment |\n| `Poisson_eggs.py` | Easter egg selectivity vs. random baseline | Poisson fits, KL divergence, sparsity metrics |\n| `winter_spring_transition.py` | Jan\u2013Mar parenting shift (TV \u2192 books) + DST spring-forward effect | Behavioral transition tracking, nap latency analysis |\n\nRun any study directly: `python potty_training.py` \u2014 each outputs PNG visualizations.\n\n---\n\n## Dada Tracker\n\nA mobile-first Flask app running on a Raspberry Pi that logs toddler events in real time.\n\n**Tracks**: sleep/naps, food & drink, activities, meltdowns (severity + trigger), potty, mood.\n\n**Stack**: Flask, SQLite (7-table schema), Jinja2 templates, systemd on Pi, Tailscale VPN for remote access.\n\n```bash\ncd tracker\npython app.py   # http://192.168.88.9:5000 (local) or Tailscale IP\n```\n\nPull data to a laptop for notebook analysis:\n\n```python\nfrom tracker.analysis import TrackerDB\ndb = TrackerDB()\ndb.sync()                          # scp from Pi\nsleep_df    = db.sleep()\nmeltdown_df = db.meltdowns()\ndb.daily_summary('2025-03-25')\n```\n\nSee `tracker/README.md` for full schema and systemd management.\n\n---\n\n## Library Recommender\n\nA CLI tool that scrapes the Sno-Isle library catalog into SQLite, learns taste from user ratings (1\u20135), and recommends books via TF-IDF + cosine similarity.\n\n**Stack**: Python, Click, Rich, scikit-learn, Requests, SQLite, BiblioCommons API.\n\n```bash\ncd library_recommender\npython catalog_scraper.py          # Scrape catalog (~165k books, ~45 min)\n./library recommend                # 5 best matches + 2 experimental + 3 hidden gems\n./library rate                     # Rate returned books\n./library hold 42 --branch 18      # Place a hold via BiblioCommons\n./library export-ratings           # Sync ratings to JSON for cross-machine use\n```\n\nMulti-user capable \u2014 separate rating histories per parent. See `library_recommender/README.md`.\n\n---\n\n## Tech\n\nPython, Flask, SQLite, pandas, NumPy, matplotlib, seaborn, statsmodels (ANOVA/STL/ARIMAX), scikit-learn (TF-IDF), Click, Rich, Requests, Raspberry Pi, Tailscale\n\n---\n\n## Data\n\nAll study datasets are fully synthetic, generated with seeded NumPy for reproducibility. Tracker data lives on the Pi in a `.gitignored` database \u2014 no real data is committed to this repo.\n",
    "tree": {
      "dirs": {
        "library_recommender": {
          "dirs": {},
          "files": [
            "catalog_scraper.py",
            "cli.py",
            "db.py",
            "explore_catalog.py",
            "failed_pages.csv",
            "hold.py",
            "importer.py",
            "library",
            "recommender.py",
            "sno_isle_catalog.csv"
          ]
        },
        "tracker": {
          "dirs": {
            "static": {
              "dirs": {},
              "files": [
                "style.css"
              ]
            },
            "templates": {
              "dirs": {},
              "files": [
                "activity.html",
                "base.html",
                "edit.html",
                "edit_daily.html",
                "food.html",
                "index.html",
                "meltdown.html",
                "potty.html",
                "today.html"
              ]
            }
          },
          "files": [
            "analysis.py",
            "app.py",
            "remind_dada.py",
            "schema.sql"
          ]
        }
      },
      "files": [
        "Poisson_eggs.py",
        "missed_nap_lag.py",
        "nap_timeseries.py",
        "potty_training.py",
        "snack_sugar_content.py",
        "winter_spring_transition.py"
      ]
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/dada_science/DST_spring.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/dada_science/main/DST_spring.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/dada_science/effect_chart.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/dada_science/main/effect_chart.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/dada_science/missed_nap_stl.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/dada_science/main/missed_nap_stl.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/dada_science/missed_naps.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/dada_science/main/missed_naps.png"
      }
    ],
    "local_base": "images/dada_science/"
  },
  "game_ranking": {
    "name": "game_ranking",
    "description": "Leaderboard tracker for daily word puzzle games (Wordle, Connections, Strands) \u2014 scores arrive via SMS and are ranked automatically.",
    "tech": [
      "Python",
      "Flask",
      "SQLite",
      "matplotlib",
      "numpy",
      "Twilio API",
      "HTML/CSS/JS"
    ],
    "github": "https://github.com/simonhansedasi/game_ranking",
    "branch": "main",
    "readme": "# game_ranking\n\nLeaderboard tracker for daily word puzzle games (Wordle, Connections, Strands) \u2014 scores arrive via SMS and are ranked automatically.\n\n## What it does\n\nPlayers text their puzzle results to a Twilio number. The Flask backend parses the pasted score blocks, stores results in SQLite, and serves a ranked leaderboard with performance charts. Supports multiple games with per-game scoring logic.\n\n## Tech\n\nPython, Flask, SQLite, matplotlib, numpy, Twilio API, HTML/CSS/JS\n\n## Run\n\n```bash\npython app.py   # starts on port 5005\n```\n\nSet up a Twilio webhook pointing to `/sms` to receive scores via text message.\n",
    "tree": {
      "dirs": {
        "archive": {
          "dirs": {
            "frontend": {
              "dirs": {},
              "files": [
                "Gemfile",
                "index.html",
                "styles.css"
              ]
            }
          },
          "files": [
            "sms_routes.py"
          ]
        },
        "bot": {
          "dirs": {},
          "files": [
            "__init__.py",
            "post_bluesky.py",
            "post_reddit.py"
          ]
        },
        "js": {
          "dirs": {},
          "files": [
            "dashboard.js",
            "fetch_ranking.js",
            "sess_id.js",
            "submit_score.js"
          ]
        },
        "scrapers": {
          "dirs": {},
          "files": [
            "__init__.py",
            "bluesky.py",
            "reddit.py"
          ]
        }
      },
      "files": [
        "Gemfile",
        "analyze.py",
        "app.py",
        "bayes.py",
        "game_ranking.py",
        "index.html",
        "scrape.py",
        "styles.css"
      ]
    },
    "images": [],
    "local_base": "images/game_ranking/"
  },
  "gov_inertia": {
    "name": "gov_inertia",
    "description": "Agent-based simulation of government growth, taxation, and organizational inertia over time.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/gov_inertia",
    "branch": "main",
    "readme": "# gov_inertia\n\nAgent-based simulation of government growth, taxation, and organizational inertia over time.\n\n## What it does\n\nModels a population of citizens and a government that taxes, enforces compliance, redistributes wealth, and accumulates bureaucratic overhead. Simulates how surplus allocation, corruption, and inertia shape long-run government size and citizen welfare. Results are exported to JSON and visualized in notebooks.\n\n## Tech\n\nPython \u2014 `numpy`, `copy`, `tqdm`, Jupyter\n\n## Run\n\n```bash\npython gov_inertia.py\n```\n\nOr open `simulation.ipynb` for an interactive walkthrough with visualizations.\n",
    "tree": {
      "dirs": {},
      "files": [
        "gov_inertia.py"
      ]
    },
    "images": [],
    "local_base": "images/gov_inertia/"
  },
  "rejection_matrix": {
    "name": "rejection_matrix",
    "description": "Two CLI tools:",
    "tech": [],
    "github": "https://github.com/simonhansedasi/rejection_matrix",
    "branch": "main",
    "readme": "# rejection_matrix\n\nTwo CLI tools:\n\n- **`src/search.py`** \u2014 search job boards for listings by title, salary, location, work type, industry, and company\n- **`src/rm.py`** \u2014 track applications you've submitted, log updates, and view status\n\nNo dependencies beyond Python 3.6+ stdlib. The SQLite database lives at `data/applications.db`.\n\nRun both from the repo root:\n\n```bash\npython3 src/search.py <keywords> [options]\npython3 src/rm.py <command> [options]\n```\n\n---\n\n## search.py \u2014 find jobs\n\n```\npython3 src/search.py <keywords...> [options]\n```\n\n### Job boards searched\n\n| Board | Requires key? | What it has |\n|---|---|---|\n| **Remotive** | No | Remote jobs; salary data on many listings; keyword + category filters |\n| **We Work Remotely** | No | Remote jobs; no salary; RSS feed |\n| **The Muse** | No | Remote, hybrid, and onsite; location filter; no salary |\n| **JSearch** | Yes \u2014 free | Aggregates **LinkedIn, Indeed, Glassdoor, ZipRecruiter**; salary data; location; remote filter |\n| **USAJOBS** | Yes \u2014 free | US federal jobs: **NPS, USGS, NOAA, Forest Service**, and all other federal agencies; salary data; location + radius |\n\nEvery result shows a **Source** column (which board \u2014 or for JSearch, which underlying site like LinkedIn or Indeed) and a **URL** column (direct link to the listing). That URL is where you apply. When you save a result to the tracker with `--save`, the board name is stored in the `source` field and the listing URL is stored in `notes`.\n\n#### Setting up JSearch (LinkedIn / Indeed / Glassdoor)\n\nJSearch is a RapidAPI service that scrapes the major boards so you don't have to.\n\n1. Sign up free at **rapidapi.com** \u2192 search for **JSearch** \u2192 subscribe to the free plan (200 req/month)\n2. Copy your RapidAPI key and set it in your environment:\n\n```bash\nexport JSEARCH_API_KEY=your_key_here\n# Add to ~/.bashrc or ~/.zshrc to persist it\n```\n\nOnce the env var is set, JSearch runs automatically alongside the other three sources. Without it, it prints `SKIPPED` and the other sources still run.\n\n#### Setting up USAJOBS (federal jobs)\n\nUSAJOBS is the official US federal job board. The API is free but requires registration.\n\n1. Register at **https://developer.usajobs.gov/APIRequest/Index** \u2014 fill in your name, email, and intended use\n2. You'll receive an API key by email\n3. Set both required env vars:\n\n```bash\nexport USAJOBS_API_KEY=your_key_here\nexport USAJOBS_EMAIL=your_email@example.com   # must match registration email\n# Add to ~/.bashrc or ~/.zshrc to persist\n```\n\nOnce both vars are set, USAJOBS runs automatically. Without them, it prints `SKIPPED`.\n\n### Options\n\n| Flag | Description |\n|---|---|\n| `keywords` | Job title keywords. Quote multi-word phrases: `\"data analyst\"` |\n| `--zip ZIP` | US zip code \u2014 resolves to city/state for location filtering |\n| `--radius MILES` | Search radius around zip, default 25 (applies to onsite/hybrid on The Muse) |\n| `--salary-min N` | Hide listings where the *known* max salary is below N |\n| `--salary-max N` | Hide listings where the *known* min salary is above N |\n| `--remote` | Show only remote listings |\n| `--hybrid` | Show only hybrid listings |\n| `--industry TEXT` | Category/industry passed to Remotive and The Muse APIs (e.g. `fintech`, `data`, `marketing`) |\n| `--company NAME` | Filter results to companies whose name contains this string |\n| `--sources LIST` | Comma-separated list of boards to search (default: `remotive,wwr,muse,jsearch,usajobs`) |\n| `--limit N` | Max results to fetch per source, default 25 |\n| `--save` | After displaying results, prompt for numbers to save to the tracker |\n\n> **Note on salary filtering:** Most listings don't include salary. The filter only excludes listings where salary is *known* to be outside your range \u2014 listings with no salary posted will still appear.\n\n### Examples\n\n```bash\n# Basic search\npython3 src/search.py \"data analyst\"\n\n# Remote only, with salary floor\npython3 src/search.py \"data analyst\" --remote --salary-min 90000\n\n# Local + remote, near a zip code\npython3 src/search.py \"software engineer\" --zip 98101 --salary-min 120000\n\n# Remote or hybrid, specific industry\npython3 src/search.py \"product manager\" --remote --hybrid --industry fintech\n\n# Search for roles at a specific company\npython3 src/search.py \"engineer\" --company Stripe --remote\n\n# Narrow to two sources, higher result cap\npython3 src/search.py \"data engineer\" --sources remotive,wwr --limit 50\n\n# Search and save picks to the tracker\npython3 src/search.py \"analyst\" --remote --salary-min 80000 --save\n\n# Federal jobs only (NPS, USGS, NOAA, etc.)\npython3 src/search.py \"park ranger\" --zip 98087 --sources usajobs\npython3 src/search.py \"geologist\" --zip 98087 --sources usajobs\npython3 src/search.py \"physical scientist\" --zip 98087 --sources usajobs --remote\n```\n\n### Saving to the tracker\n\nPass `--save` and after results are shown you'll be prompted:\n\n```\nEnter result numbers to save to tracker (e.g. 1,3,5), or press Enter to skip:\n  > 2,5\n  Saved #7: Senior Data Analyst @ Acme Corp\n  Saved #8: Data Analyst @ Some Co\n```\n\nSaved entries land in `data/applications.db` with status `applied`. The listing URL is in the `notes` field \u2014 retrieve it with:\n\n```bash\nsqlite3 data/applications.db \"SELECT notes FROM job_applications WHERE id = 7;\"\n```\n\n---\n\n## rm.py \u2014 track applications\n\n### `add` \u2014 log a new application\n\n```\npython3 src/rm.py add <company> <role> [options]\n```\n\n| Argument | Required | Description |\n|---|---|---|\n| `company` | yes | Company name |\n| `role` | yes | Job title |\n| `--date YYYY-MM-DD` | no | Date applied (defaults to today) |\n| `--source` | no | Where you found it (LinkedIn, referral, etc.) |\n| `--location` | no | Office location or \"Remote\" |\n| `--salary` | no | Salary offer (number) |\n| `--industry` | no | Company industry (e.g. Fintech, Healthcare) |\n| `--notes` | no | Any free-text notes |\n| `--variant` | no | Resume variant used (e.g. `geo`, `research`, `simulation`) |\n\nNew applications are always set to `applied` status.\n\n```bash\npython3 src/rm.py add \"PNNL\" \"Research Scientist\" --source LinkedIn --location Remote --variant research\npython3 src/rm.py add \"Boring Co\" \"Engineer\" --date 2026-03-20 --notes \"Applied via recruiter\"\n```\n\n---\n\n### `update` \u2014 log what happened\n\n```\npython3 src/rm.py update <id> <note> [--status STATUS] [--variant VARIANT]\n```\n\nEvery update is written to the audit log with a timestamp. `--status` changes the application status; `--variant` updates which resume was used. Both are recorded with old/new values.\n\n```bash\n# Log a note without changing status\npython3 src/rm.py update 3 \"Had a phone screen, seemed positive\"\n\n# Log a note and change status\npython3 src/rm.py update 3 \"Got the rejection email\" --status rejected\npython3 src/rm.py update 7 \"No reply in 3 weeks\" --status ghosted\npython3 src/rm.py update 12 \"Turned out to be a recruiter farm\" --status scam\n\n# Update the resume variant (e.g. if you forgot to set it on add)\npython3 src/rm.py update 5 \"switched to geo resume\" --variant geo\n```\n\n**Valid statuses:**\n\n| Status | Meaning |\n|---|---|\n| `applied` | Submitted, waiting |\n| `interviewing` | Active process |\n| `offer` | Offer received |\n| `rejected` | Formal rejection |\n| `ghosted` | No response |\n| `dead` | Role pulled / company went quiet |\n| `scam` | Fake listing or bad-faith recruiter |\n\n---\n\n### `list` \u2014 view applications\n\n```\npython3 src/rm.py list [--status STATUS]\n```\n\nShows all applications sorted by date, newest first. Statuses are colour-coded. Salary and resume variant are shown where set; industry is stored but not displayed (query directly via SQLite). Pass `--status` to filter.\n\n```bash\npython3 src/rm.py list\npython3 src/rm.py list --status applied\npython3 src/rm.py list --status interviewing\n```\n\n---\n\n### `docs` \u2014 manage documents attached to an application\n\n```\npython3 src/rm.py docs add <app_id> <path> [--type TYPE] [--label LABEL]\npython3 src/rm.py docs list <app_id>\npython3 src/rm.py docs rm <doc_id>\n```\n\nAttach resumes, cover letters, portfolios, or any other files to an application record. Multiple documents per application are supported.\n\n| Subcommand | Description |\n|---|---|\n| `docs add <app_id> <path>` | Attach a file path to an application |\n| `docs list <app_id>` | List all documents for an application |\n| `docs rm <doc_id>` | Remove a document entry (does not delete the file) |\n\n`--type` accepts: `resume`, `cover_letter`, `portfolio`, `writing_sample`, `other` (default: `other`)\n\n`--label` is an optional free-text tag, useful for versioning or context (e.g. `\"resume_v2\"`, `\"tailored fintech\"`).\n\n```bash\n# Attach a tailored resume and a cover letter\npython3 src/rm.py docs add 5 ~/resumes/resume_fintech_v2.pdf --type resume --label \"tailored fintech\"\npython3 src/rm.py docs add 5 ~/cover_letters/acme_cover.pdf --type cover_letter\n\n# List all docs for application #5\npython3 src/rm.py docs list 5\n\n# Remove a document entry\npython3 src/rm.py docs rm 3\n```\n\n---\n\n### `activity` \u2014 job search time from personal tracker\n\n```\npython3 src/rm.py activity [--days N]\n```\n\nReads time blocks categorised as **Job Search** or **LinkedIn** from the personal tracker (`../dada_science/personal_tracker/personal.db`) and shows them grouped by day with totals. Defaults to the last 14 days.\n\n```bash\npython3 src/rm.py activity\npython3 src/rm.py activity --days 30\n```\n\nRequires the personal tracker app to have been run at least once so its database exists.\n\n---\n\n## Database\n\nTwo tables in `data/applications.db`:\n\n- **`job_applications`** \u2014 one row per application\n- **`application_log`** \u2014 append-only audit trail; every `update` call writes here\n- **`application_documents`** \u2014 file paths attached to applications (resume, cover letter, etc.)\n\nTo inspect directly:\n\n```bash\nsqlite3 data/applications.db \"SELECT * FROM job_applications ORDER BY date_applied DESC;\"\nsqlite3 data/applications.db \"SELECT * FROM application_log WHERE application_id = 3;\"\n```\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {},
          "files": [
            "resume_boeing_inspector.tex",
            "resume_ds_analyst.tex",
            "resume_remote_sensing_ds.tex",
            "resume_sno_isle.tex"
          ]
        },
        "src": {
          "dirs": {},
          "files": [
            "rm.py",
            "search.py"
          ]
        }
      },
      "files": []
    },
    "images": [],
    "local_base": "images/rejection_matrix/"
  },
  "alphabet_soup": {
    "name": "alphabet_soup",
    "description": "Finds the smallest set of words where every word uses only unique letters and together they cover all 26 letters of the alphabet.",
    "tech": [
      "Python 3"
    ],
    "github": "https://github.com/simonhansedasi/alphabet_soup",
    "branch": "main",
    "readme": "# alphabet_soup\n\nFinds the smallest set of words where every word uses only unique letters and together they cover all 26 letters of the alphabet.\n\n## What it does\n\nGiven a word dictionary, filters for words with no repeated letters, then uses bitmask encoding and a recursive search (prioritizing rarest letters first) to find minimal covering sets. Results are cached with pickle to avoid re-running the expensive search.\n\n## Tech\n\nPython 3 \u2014 `requests`, `pickle`, `collections`\n\n## Run\n\n```bash\npython untitled.py\n```\n\nDownloads a word list on first run and caches results to `alphabet_soup_scrabble.pkl`.\n",
    "tree": {
      "dirs": {},
      "files": [
        "untitled.py"
      ]
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/alphabet_soup/eyeball.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/alphabet_soup/main/eyeball.png"
      },
      {
        "local": "/home/simonhans/coding/portfolio/images/alphabet_soup/letter_uniqueness.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/alphabet_soup/main/letter_uniqueness.png"
      }
    ],
    "local_base": "images/alphabet_soup/"
  },
  "pyopoly": {
    "name": "pyopoly",
    "description": "Terminal-based Monopoly clone with CPU opponents, colorized output, and the full mechanics: properties, rent, auctions, jail, and card decks.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/pyopoly",
    "branch": "main",
    "readme": "# pyopoly\n\n### A game for slumlords.\n\nTerminal-based Monopoly clone with CPU opponents, colorized output, and the full mechanics: properties, rent, auctions, jail, and card decks.\n\n## What it does\n\nImplements Monopoly in Python with human vs. AI players. Features property ownership, building houses/hotels, custom card decks (Chance/Community Chest), jail mechanics, and a color-coded terminal UI.\n\n- **CPU AI** \u2014 automated buy, build, mortgage, and trade decisions\n- **Trading** \u2014 humans can propose trades with any player; CPUs proactively seek trades to complete monopolies (CPU-to-CPU and CPU-to-human)\n- **Auctions** \u2014 properties declined by the landing player go to open auction\n- **Jail** \u2014 pay bail, roll for doubles, or burn a Get Out of Jail Free card\n- **Mortgaging** \u2014 mortgage/unmortgage properties from the in-turn menu\n\n## Tech\n\nPython \u2014 stdlib only (`random`, `time`, ANSI color codes)\n\n## Run\n\n```bash\npython pyopoly.py\n```\n",
    "tree": {
      "dirs": {},
      "files": [
        "gamefile.py",
        "pyopoly.py"
      ]
    },
    "images": [],
    "local_base": "images/pyopoly/"
  },
  "blackjack": {
    "name": "blackjack",
    "description": "Blackjack simulator that compares basic play against a Hi-Lo card counting strategy across thousands of simulated hands.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/blackjack",
    "branch": "main",
    "readme": "# blackjack\n\nBlackjack simulator that compares basic play against a Hi-Lo card counting strategy across thousands of simulated hands.\n\n## What it does\n\nImplements a full blackjack game engine (dealing, hitting, standing, bust detection) with two player strategies: naive play and Hi-Lo card counting. Runs large-scale simulations and plots win rate distributions to quantify the edge that counting gives.\n\n## Tech\n\nPython \u2014 `random`, `collections`, `tqdm`, `matplotlib`, `pandas`, Jupyter\n\n## Run\n\nOpen `simulation.ipynb` in Jupyter, or import `blackjack.py` directly:\n\n```python\nfrom blackjack import simulate\nsimulate(n_hands=10000, strategy='hilo')\n```\n",
    "tree": {
      "dirs": {},
      "files": [
        "blackjack.py"
      ]
    },
    "images": [],
    "local_base": "images/blackjack/"
  },
  "commuting": {
    "name": "commuting",
    "description": "Analyzes how rain and weather conditions affect commute times across different transport modes.",
    "tech": [
      "Python",
      "Flask",
      "SQLite",
      "pandas",
      "matplotlib",
      "scipy",
      "HTML/CSS/JS"
    ],
    "github": "https://github.com/simonhansedasi/commuting",
    "branch": "main",
    "readme": "# commuting\n\nAnalyzes how rain and weather conditions affect commute times across different transport modes.\n\n## What it does\n\nCollects commute log entries (mode, duration, weather, road conditions) stored in SQLite. Runs statistical analysis (confidence intervals via scipy) and generates comparative visualizations \u2014 pie charts and stacked bars \u2014 showing transit time distributions across weather conditions.\n\n## Tech\n\nPython, Flask, SQLite, pandas, matplotlib, scipy, HTML/CSS/JS\n\n## Run\n\n```bash\npython app.py\n```\n\nOpen the web dashboard to log commutes and view charts.\n",
    "tree": {
      "dirs": {
        "js": {
          "dirs": {},
          "files": [
            "commute_form.js",
            "get_images.js",
            "get_user_images.js",
            "login.js"
          ]
        }
      },
      "files": [
        "Gemfile",
        "_config.yml",
        "app.py",
        "commute_analysis.py",
        "dash.html",
        "index.html",
        "styles.css"
      ]
    },
    "images": [],
    "local_base": "images/commuting/"
  },
  "crm": {
    "name": "crm",
    "description": "Lightweight local CRM for tracking contacts, companies, deals, and notes \u2014 built for paint booth parts sales.",
    "tech": [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "YAML",
      "HTML/CSS/JS"
    ],
    "github": "https://github.com/simonhansedasi/crm",
    "branch": "main",
    "readme": "# crm\n\nLightweight local CRM for tracking contacts, companies, deals, and notes \u2014 built for paint booth parts sales.\n\n## What it does\n\nFlask backend with a vanilla JS frontend backed by SQLite. Supports a configurable sales pipeline (stages defined in `config.yaml`), contact/company management, deal tracking, notes, and tags. Everything runs locally with no external dependencies beyond Python packages.\n\n## Tech\n\nPython, Flask, SQLAlchemy, SQLite, YAML, HTML/CSS/JS\n\n## Run\n\n```bash\npip install -r requirements.txt\npython app.py\n```\n\nOpens at `http://localhost:5000`. Pipeline stages, custom fields, and tags are configured in `config.yaml`.\n",
    "tree": {
      "dirs": {
        "frontend": {
          "dirs": {},
          "files": [
            "app.js",
            "index.html",
            "style.css"
          ]
        },
        "models": {
          "dirs": {},
          "files": [
            "__init__.py",
            "contact.py",
            "deal.py",
            "note.py",
            "part.py",
            "tag.py"
          ]
        },
        "routes": {
          "dirs": {},
          "files": [
            "__init__.py",
            "contacts.py",
            "deals.py",
            "import_routes.py",
            "notes.py",
            "parts.py",
            "tags.py"
          ]
        },
        "tests": {
          "dirs": {},
          "files": [
            "__init__.py",
            "conftest.py",
            "test_contacts.py",
            "test_deals.py",
            "test_notes.py"
          ]
        }
      },
      "files": [
        "app.py",
        "config.yaml"
      ]
    },
    "images": [],
    "local_base": "images/crm/"
  },
  "drawing": {
    "name": "drawing",
    "description": "Generative art experiments \u2014 tie-dye patterns, trigonometric drawings, and interactive canvas sketching.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/drawing",
    "branch": "function_listener",
    "readme": "# drawing\n\nGenerative art experiments \u2014 tie-dye patterns, trigonometric drawings, and interactive canvas sketching.\n\n## What it does\n\nA collection of visual experiments using matplotlib and numpy. Includes parametric trig art, procedural tie-dye color fields, and an event-driven listener for interactive drawing input.\n\n## Tech\n\nPython \u2014 `matplotlib`, `numpy`, Jupyter notebooks\n\n## Run\n\nOpen any notebook in Jupyter:\n\n```bash\njupyter notebook TieDyes.ipynb\njupyter notebook trig_art.ipynb\n```\n\nOr run the interactive listener:\n\n```bash\npython listener.py\n```\n",
    "tree": {
      "dirs": {},
      "files": [
        "listener.py"
      ]
    },
    "images": [],
    "local_base": "images/drawing/"
  },
  "trivia": {
    "name": "trivia",
    "description": "Web-based trivia quiz game \u2014 random multiple-choice questions served from a local Flask backend.",
    "tech": [
      "Python",
      "Flask",
      "HTML/CSS/JS"
    ],
    "github": "https://github.com/simonhansedasi/trivia",
    "branch": "main",
    "readme": "# trivia\n\nWeb-based trivia quiz game \u2014 random multiple-choice questions served from a local Flask backend.\n\n## What it does\n\nLoads a large JSON question bank and serves random questions via a Flask API. The frontend displays questions with multiple-choice options and a reveal-answer button. Questions are shuffled on each load.\n\n## Tech\n\nPython, Flask, HTML/CSS/JS\n\n## Run\n\n```bash\npython app.py   # starts on port 5005\n```\n\nOpen `http://localhost:5005` in your browser.\n",
    "tree": {
      "dirs": {
        "js": {
          "dirs": {},
          "files": [
            "fetch_question.js"
          ]
        }
      },
      "files": [
        "Gemfile",
        "app.py",
        "index.html",
        "main.py",
        "trivia.py"
      ]
    },
    "images": [],
    "local_base": "images/trivia/"
  },
  "wiki-index": {
    "name": "wiki-index",
    "description": "Wiki-Index is a lightweight file indexing tool that helps teams navigate shared folders quickly.",
    "tech": [],
    "github": "https://github.com/simonhansedasi/wiki-index",
    "branch": "main",
    "readme": "# Organize Your Organization's Files\n\nWiki-Index is a lightweight file indexing tool that helps teams navigate shared folders quickly.  \nInstead of digging through endless directory trees, it creates a browsable index of your files.\n\n![Screenshot of File Index](img/index.png)\n\n<!-- ## Why Use Wiki-Index?\n\n- **Centralized Knowledge** \u2014 Build a single reference point for all your documents.  \n- **Fast Search** \u2014 Quickly locate files without guessing folder structures.  \n- **Portable** \u2014 Works on local machines, intranets, or lightweight servers.  \n- **Simple** \u2014 No heavy setup or database required.   -->\n\n## How It Works\n\n\n<!-- \n1. Point Wiki-Index at the root folder you want to index.  \n2. It scans your directories and generates a structured index in Markdown/HTML.  \n3. Open the index in your browser (or host it on GitHub Pages / your intranet) for easy navigation.   -->\n\n## Installation\n\nClone the repo:\n\n```bash\ngit clone https://github.com/yourusername/wiki-index.git\ncd wiki-index\n",
    "tree": {
      "dirs": {
        "scripts": {
          "dirs": {},
          "files": [
            "file_structure.js",
            "index.js"
          ]
        },
        "styles": {
          "dirs": {},
          "files": [
            "styles.css"
          ]
        }
      },
      "files": [
        "Gemfile",
        "index.html",
        "indexer.py",
        "viewer.html"
      ]
    },
    "images": [
      {
        "local": "/home/simonhans/coding/portfolio/images/wiki-index/img/index.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/wiki-index/main/img/index.png"
      }
    ],
    "local_base": "images/wiki-index/"
  },
  "timer": {
    "name": "timer",
    "description": "Browser-based time tracker for logging work sessions by project and task \u2014 no server required.",
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript (vanilla)"
    ],
    "github": "https://github.com/simonhansedasi/timer",
    "branch": "main",
    "readme": "# timer\n\nBrowser-based time tracker for logging work sessions by project and task \u2014 no server required.\n\n## What it does\n\nStart, pause, and end work sessions with a single click. Tracks elapsed time per project/task, auto-saves sessions to `localStorage`, and exports daily logs as CSV. Fully self-contained in a single HTML file.\n\n## Tech\n\nHTML5, CSS3, JavaScript (vanilla)\n\n## Run\n\nOpen `index.html` in any browser. No install or server needed.\n",
    "tree": {
      "dirs": {},
      "files": [
        "index.html"
      ]
    },
    "images": [],
    "local_base": "images/timer/"
  },
  "edasi_motlev": {
    "name": "edasi_motlev",
    "description": "",
    "tech": [],
    "github": "https://github.com/simonhansedasi/edasi_motlev",
    "branch": "master",
    "readme": "",
    "tree": {
      "dirs": {},
      "files": [
        "index.html",
        "style.css"
      ]
    },
    "images": [],
    "local_base": "images/edasi_motlev/"
  }
};
