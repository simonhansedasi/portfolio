const fileStructure = {
  "GrapeExpectations": {
    "name": "GrapeExpectations",
    "description": "Vineyard analysis toolkit \u2014 computes field geometry and fiber length from acreage and row spacing, with machine learning experiments on grape quality data.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/GrapeExpectations",
    "branch": "main",
    "readme": "# GrapeExpectations\n\nVineyard analysis toolkit \u2014 computes field geometry and fiber length from acreage and row spacing, with machine learning experiments on grape quality data.\n\n## What it does\n\nTakes measured vineyard dimensions (acreage, row spacing, vine spacing) and calculates row counts, total vine counts, and fiber/wire lengths needed for trellis installation. A separate ML pipeline applies ridge regression to predict grape quality metrics from sensing data.\n\n## Tech\n\nPython \u2014 `numpy`, `pandas`, `scikit-learn`, Jupyter\n\n## Run\n\n```bash\njupyter notebook Untitled.ipynb         # field geometry calculations\njupyter notebook RegressionRidge/       # ML experiments\n```\n",
    "tree": {
      "dirs": {
        "RegressionRidge": {
          "dirs": {
            "ML": {
              "dirs": {},
              "files": [
                "Untitled.ipynb",
                "Untitled1.ipynb",
                "Untitled2.ipynb",
                "Untitled3.ipynb",
                "clustering.ipynb",
                "clusters.csv",
                "decision_trees.ipynb",
                "forest_ensemble.ipynb",
                "neural_net.ipynb",
                "time_series.ipynb"
              ]
            },
            "data_wrangling": {
              "dirs": {},
              "files": [
                "00_subsample_polygons.ipynb",
                "01_clip_dem.ipynb",
                "02_breakdown_dem.ipynb",
                "03_get_temp_data.ipynb",
                "04-1_ndvi.ipynb",
                "04-2_ndvi_smol.ipynb",
                "05_soil.ipynb",
                "06_assemble_data.ipynb",
                "Untitled.ipynb",
                "Untitled1.ipynb"
              ]
            }
          },
          "files": [
            "LSTM.ipynb",
            "Untitled.ipynb",
            "Untitled1.ipynb",
            "assess_frost_risk.ipynb",
            "linear_regression.ipynb",
            "regression.ipynb",
            "test_xg_boost.ipynb"
          ]
        },
        "docs": {
          "dirs": {},
          "files": [
            "GrapeExpectations.tex",
            "README.md",
            "Sample Business Plan - We Can Do It Consulting.doc",
            "Sample Business Plan - Wooden Grain Toy Company.doc",
            "Sample Lean Business Plan - Wooden Grain Toy Company.doc",
            "index.md",
            "lean_plan.tex"
          ]
        },
        "experiments": {
          "dirs": {
            "data_wrangling_replication": {
              "dirs": {},
              "files": [
                "test_script.py"
              ]
            }
          },
          "files": []
        },
        "grape_expectations": {
          "dirs": {
            "data": {
              "dirs": {},
              "files": [
                "__init__.py",
                "wrangling.py"
              ]
            },
            "io": {
              "dirs": {},
              "files": [
                "__init__.py",
                "loaders.py"
              ]
            },
            "models": {
              "dirs": {},
              "files": [
                "__init__.py",
                "frost.py"
              ]
            }
          },
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
            "FO_DTS_Temperature_Data.csv",
            "Untitled.ipynb"
          ]
        }
      },
      "files": [
        "GrapeExpectations.py",
        "README.md",
        "Untitled.ipynb",
        "data_wrangling_env",
        "ml_env_setup"
      ]
    }
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
        "README.md",
        "Untitled.ipynb",
        "untitled.py"
      ]
    }
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
        "README.md",
        "blackjack.py",
        "simulation.ipynb"
      ]
    }
  },
  "char_gen": {
    "name": "char_gen",
    "description": "D&D 5e character generator \u2014 rolls stats, picks race, background, and class optimally, with a web UI and stored character history.",
    "tech": [
      "Python",
      "Flask",
      "SQLite",
      "HTML/CSS/JS"
    ],
    "github": "https://github.com/simonhansedasi/char_gen",
    "branch": "main",
    "readme": "# char_gen\n\nD&D 5e character generator \u2014 rolls stats, picks race, background, and class optimally, with a web UI and stored character history.\n\n## What it does\n\nRolls ability scores using the 4d6-drop-lowest method, then selects species, background, and class based on which option best matches the rolled stats. Characters are saved to a SQLite database. Includes analysis notebooks for exploring stat distributions and class balance.\n\n## Tech\n\nPython, Flask, SQLite, HTML/CSS/JS\n\n## Run\n\n```bash\npython app.py   # web UI on http://localhost:5000\n```\n\nOr generate a character from the command line:\n\n```bash\npython chargen.py\n```\n",
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
        "README.md",
        "analysis.ipynb",
        "app.py",
        "attribute_class.ipynb",
        "attribute_correlation.ipynb",
        "chargen.py",
        "config.txt",
        "gen.py",
        "index.html",
        "requirements.txt",
        "simulation.ipynb",
        "style.css",
        "tables.py"
      ]
    }
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
        "Gemfile.lock",
        "README.md",
        "_config.yml",
        "app.py",
        "commute_analysis.py",
        "config.txt",
        "dash.html",
        "index.html",
        "styles.css"
      ]
    }
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
        "CLAUDE.md",
        "README.md",
        "app.py",
        "config.yaml",
        "requirements.txt"
      ]
    }
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
            "INSTRUCTIONS.md",
            "README.md",
            "catalog_scraper.py",
            "cli.py",
            "db.py",
            "explore_catalog.py",
            "hold.py",
            "importer.py",
            "library",
            "ratings.json",
            "ratings_heiki.json",
            "ratings_madeleine.json",
            "ratings_simon.json",
            "recommender.py",
            "requirements.txt",
            "sno_isle_catalog.csv"
          ]
        },
        "personal_tracker": {
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
                "base.html",
                "edit.html",
                "exercise.html",
                "food.html",
                "index.html",
                "today.html"
              ]
            }
          },
          "files": [
            "INSTRUCTIONS.md",
            "README.md",
            "analysis.py",
            "app.py",
            "schema.sql",
            "simon_analysis.ipynb"
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
                "food.html",
                "index.html",
                "meltdown.html",
                "potty.html",
                "today.html"
              ]
            }
          },
          "files": [
            "INSTRUCTIONS.md",
            "README.md",
            "analysis.py",
            "app.py",
            "dada_analysis.ipynb",
            "schema.sql"
          ]
        }
      },
      "files": [
        "Poisson_eggs.py",
        "README.md",
        "missed_nap_lag.py",
        "nap_timeseries.py",
        "potty_training.py",
        "snack_sugar_content.py",
        "winter_spring_transition.py"
      ]
    }
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
      "dirs": {
        "function_art": {
          "dirs": {},
          "files": [
            "char_gen_simulation_calls.json",
            "gov_inertia_run_simulation_calls.json"
          ]
        }
      },
      "files": [
        "README.md",
        "TieDyes.ipynb",
        "Untitled.ipynb",
        "Untitled1.ipynb",
        "Untitled2.ipynb",
        "listener.py",
        "trig_art.ipynb"
      ]
    }
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
        "js": {
          "dirs": {},
          "files": [
            "fetch_ranking.js",
            "sess_id.js",
            "submit_score.js"
          ]
        }
      },
      "files": [
        "Gemfile",
        "README.md",
        "Untitled.ipynb",
        "app.py",
        "config.txt",
        "game_ranking.py",
        "index.html",
        "scrape_data.ipynb",
        "styles.css",
        "wordle_scoring.ipynb",
        "wordle_scoring_n_players.ipynb"
      ]
    }
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
      "dirs": {},
      "files": [
        "00-install_packages.ipynb",
        "01-acquire_data.ipynb",
        "02-match_glacier_centroids.ipynb",
        "1-coregistration_testing.ipynb",
        "2-LOO_archtesting.ipynb",
        "3-LOO_archselection.ipynb",
        "4-LOO.ipynb",
        "5-vol_confidence_interval.ipynb",
        "6-LOO_analysis.ipynb",
        "P1-coregistration_plot.ipynb",
        "P2-residuals.ipynb",
        "P3-scatter_plot.ipynb",
        "P4-discrepancy_boxplot.ipynb",
        "P5-variance_analysis.ipynb",
        "README.md",
        "T1-results_table.ipynb",
        "T2-table_plot.ipynb",
        "calls.json",
        "glacierml.py",
        "global_sum_differences.ipynb",
        "listener.py",
        "model_coregistration.txt",
        "path_manager.py",
        "permutation_test.ipynb"
      ]
    }
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
        "README.md",
        "calls.json",
        "failure_condition.ipynb",
        "gov_inertia.py",
        "run_simulation.ipynb",
        "setup.ipynb",
        "simulation.ipynb"
      ]
    }
  },
  "pyopoly": {
    "name": "pyopoly",
    "description": "Terminal-based Monopoly clone with CPU opponents, colorized output, and the full mechanics: properties, rent, auctions, jail, and card decks.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/pyopoly",
    "branch": "main",
    "readme": "# pyopoly\n\n### A game for slumlords.\n\nTerminal-based Monopoly clone with CPU opponents, colorized output, and the full mechanics: properties, rent, auctions, jail, and card decks.\n\n## What it does\n\nImplements Monopoly in Python with human vs. AI players. Features property ownership, building houses/hotels, custom card decks (Chance/Community Chest), jail mechanics, and a color-coded terminal UI. CPU players make automated buy/build decisions.\n\n## Tech\n\nPython \u2014 stdlib only (`random`, `time`, ANSI color codes)\n\n## Run\n\n```bash\npython pyopoly.py\n```\n",
    "tree": {
      "dirs": {},
      "files": [
        "README.md",
        "gamefile.py",
        "pyopoly.py"
      ]
    }
  },
  "rejection_matrix": {
    "name": "rejection_matrix",
    "description": "CLI tool for tracking job applications. Log when you apply, update status as things progress (or die), and cross-reference time spent job searching from the personal tracker.",
    "tech": [],
    "github": "https://github.com/simonhansedasi/rejection_matrix",
    "branch": "main",
    "readme": "# rejection_matrix\n\nCLI tool for tracking job applications. Log when you apply, update status as things progress (or die), and cross-reference time spent job searching from the personal tracker.\n\n## Setup\n\nNo dependencies beyond Python 3.6+ stdlib. The SQLite database lives at `data/applications.db` and is already initialised.\n\nRun from the repo root:\n\n```bash\npython3 src/rm.py <command>\n```\n\n## Commands\n\n### `add` \u2014 log a new application\n\n```\npython3 src/rm.py add <company> <role> [options]\n```\n\n| Argument | Required | Description |\n|---|---|---|\n| `company` | yes | Company name |\n| `role` | yes | Job title |\n| `--date YYYY-MM-DD` | no | Date applied (defaults to today) |\n| `--source` | no | Where you found it (LinkedIn, referral, etc.) |\n| `--location` | no | Office location or \"Remote\" |\n| `--salary` | no | Salary offer (number) |\n| `--industry` | no | Company industry (e.g. Fintech, Healthcare) |\n| `--notes` | no | Any free-text notes |\n\nNew applications are always set to `applied` status.\n\n```bash\npython3 src/rm.py add \"Acme Corp\" \"Data Analyst\" --source LinkedIn --location Remote\npython3 src/rm.py add \"Boring Co\" \"Engineer\" --date 2026-03-20 --notes \"Applied via recruiter\"\n```\n\n---\n\n### `update` \u2014 log what happened\n\n```\npython3 src/rm.py update <id> <note> [--status STATUS]\n```\n\nEvery update is written to the audit log with a timestamp. If `--status` is provided, the application status is updated and the old/new values are recorded.\n\n```bash\n# Log a note without changing status\npython3 src/rm.py update 3 \"Had a phone screen, seemed positive\"\n\n# Log a note and change status\npython3 src/rm.py update 3 \"Got the rejection email\" --status rejected\npython3 src/rm.py update 7 \"No reply in 3 weeks\" --status ghosted\npython3 src/rm.py update 12 \"Turned out to be a recruiter farm\" --status scam\n```\n\n**Valid statuses:**\n\n| Status | Meaning |\n|---|---|\n| `applied` | Submitted, waiting |\n| `interviewing` | Active process |\n| `offer` | Offer received |\n| `rejected` | Formal rejection |\n| `ghosted` | No response |\n| `dead` | Role pulled / company went quiet |\n| `scam` | Fake listing or bad-faith recruiter |\n\n---\n\n### `list` \u2014 view applications\n\n```\npython3 src/rm.py list [--status STATUS]\n```\n\nShows all applications sorted by date, newest first. Statuses are colour-coded. Salary is shown where set; industry is stored but not displayed (query directly via SQLite). Pass `--status` to filter.\n\n```bash\npython3 src/rm.py list\npython3 src/rm.py list --status applied\npython3 src/rm.py list --status interviewing\n```\n\n---\n\n### `activity` \u2014 job search time from personal tracker\n\n```\npython3 src/rm.py activity [--days N]\n```\n\nReads time blocks categorised as **Job Search** or **LinkedIn** from the personal tracker (`../dada_science/personal_tracker/personal.db`) and shows them grouped by day with totals. Defaults to the last 14 days.\n\n```bash\npython3 src/rm.py activity\npython3 src/rm.py activity --days 30\n```\n\nRequires the personal tracker app to have been run at least once so its database exists.\n\n---\n\n## Database\n\nTwo tables in `data/applications.db`:\n\n- **`job_applications`** \u2014 one row per application\n- **`application_log`** \u2014 append-only audit trail; every `update` call writes here\n\nTo inspect directly:\n\n```bash\nsqlite3 data/applications.db \"SELECT * FROM job_applications ORDER BY date_applied DESC;\"\nsqlite3 data/applications.db \"SELECT * FROM application_log WHERE application_id = 3;\"\n```\n",
    "tree": {
      "dirs": {
        "src": {
          "dirs": {},
          "files": [
            "rm.py"
          ]
        }
      },
      "files": [
        "README.md"
      ]
    }
  },
  "sf_majick": {
    "name": "sf_majick",
    "description": "A Salesforce sales org simulator \u2014 imports real CRM data, calibrates a behavioral model to match observed outcomes, and runs agent-based simulations to predict and experiment on org performance.",
    "tech": [
      "Python"
    ],
    "github": "https://github.com/simonhansedasi/sf_majick",
    "branch": "main",
    "readme": "# sf_majick\n\nA Salesforce sales org simulator \u2014 imports real CRM data, calibrates a behavioral model to match observed outcomes, and runs agent-based simulations to predict and experiment on org performance.\n\n## What it does\n\nThe goal is to \"clone\" a Salesforce org: given a SOQL export of real opportunities, accounts, leads, and users, back-fit a parameterized simulation whose conversion rates, cycle times, and deal difficulty distribution match the real org. Then run what-if experiments \u2014 different rep archetypes, coaching interventions, pipeline hygiene changes \u2014 and measure the impact.\n\n### Simulation layer\n\nEach simulated day, rep agents work through their pipeline using a 3-step lookahead decision engine. They pick micro-actions (emails, calls, meetings, proposals, internal prep) based on their personality archetype, the entity's sentiment state, and expected future value. Macro events (stage advancement, lead conversion, close/lost) fire stochastically, with probabilities modulated by sentiment, momentum, friction, deal difficulty, and rep behavior.\n\n**Rep archetypes:** Closer, Nurturer, Grinder, Scattered \u2014 each with distinct personality traits (aggression, empathy, discipline) that drive action affinity, distraction rates, and burnout thresholds.\n\n**Micro-actions (9):** `send_email`, `make_call`, `hold_meeting`, `follow_up`, `research_account`, `internal_prep`, `solution_design`, `stakeholder_alignment`, `send_proposal` \u2014 each with attention cost, gating requirements, and sentiment effect.\n\n**Macro transitions (5):** Lead advancement, lead conversion \u2192 Account + Opportunity, stage advancement (Prospecting \u2192 Qualification \u2192 Proposal \u2192 Negotiation), opportunity close (Won/Lost), passive decay/death.\n\n**Sentiment engine:** Every touch updates entity sentiment; neglected entities decay passively. Sentiment history feeds momentum and friction signals that modulate macro probabilities and rep decision-making.\n\n**Human biases modeled:** Recency bias, sunk-cost bias, distraction (discipline-dependent), burnout, and learned timing weights (per-rep EMA of observed sentiment deltas per action/stage pair).\n\n### Calibration\n\n`OrgCalibrator` takes a Salesforce SOQL export and derives simulation parameters by back-fitting observed metrics:\n\n- Win rate, lost rate, cycle time \u2192 `base_prob_close`, `base_prob_lost`, stagnation/inactivity alphas\n- Stage distribution \u2192 per-stage advancement probabilities\n- Account and revenue distributions \u2192 seed state for the simulation\n\nThe result is an `OrgConfig` \u2014 185 tuning parameters (`theta`) \u2014 whose simulated org behaviorally matches the real one. Experiments run against this baseline.\n\n### Experiments\n\n`ExperimentRunner` runs N iterations of a baseline and alternative scenarios and compares:\n- Won rate, revenue per run, avg rep earnings\n- Stage distribution and deal stall analysis\n- Rep stress / burnout distribution\n- Sentiment trajectory and action effect sizes\n\n**Statistical analysis:** `sentiment_effects.py` computes raw mean sentiment delta per action (with CIs) and OLS-adjusted coefficients controlling for stage, rep, and outcome \u2014 identifying which actions actually move deals vs. which just correlate with deals that were going to move anyway.\n\n## Tech\n\nPython \u2014 `requests` (Salesforce OAuth/SOQL), `dataclasses`, `numpy`, `pandas`, `statsmodels` (OLS), `scipy`, `setuptools`\n\n## Setup\n\n```bash\npip install -e .\n```\n\nRequires a `.env` with Salesforce credentials:\n```\nSF_CLIENT_ID=...\nSF_CLIENT_SECRET=...\nSF_REFRESH_TOKEN=...\nSF_INSTANCE_URL=https://yourorg.salesforce.com\n```\n\n## Run\n\n```python\nfrom sf_majick.sim.org_calibrator import OrgCalibrator, ExperimentRunner\nfrom sf_majick.functions import SalesforceAuth\n\nsf = SalesforceAuth()\ncalibrator = OrgCalibrator(sf)\nconfig = calibrator.calibrate()\n\nrunner = ExperimentRunner(config)\nresults = runner.compare([\n    config,                             # baseline\n    config_with_more_closers,           # scenario A\n    config_with_coaching_intervention,  # scenario B\n])\n```\n\nOr run the simulation directly with a hand-built config:\n\n```python\nfrom sf_majick.sim.run_simulation import run_experiment\nresults = run_experiment(n_runs=100, days=90)\n```\n",
    "tree": {
      "dirs": {
        "sf_majick": {
          "dirs": {
            "cheatsheets": {
              "dirs": {},
              "files": [
                "Account_cheatsheet.md",
                "ActivityHistory_cheatsheet.md",
                "Campaign_cheatsheet.md",
                "Case_cheatsheet.md",
                "Contact_cheatsheet.md",
                "EmailMessage_cheatsheet.md",
                "Event_cheatsheet.md",
                "Lead_cheatsheet.md",
                "OpenActivity_cheatsheet.md",
                "OpportunityContactRole_cheatsheet.md",
                "OpportunityLineItem_cheatsheet.md",
                "Opportunity_cheatsheet.md",
                "Pricebook2_cheatsheet.md",
                "Product2_cheatsheet.md",
                "SF_setup.md",
                "SimulatedEvent__c_cheatsheet.md",
                "Task_cheatsheet.md",
                "User_cheatsheet.md",
                "soql_cheatsheet.md"
              ]
            },
            "notebooks": {
              "dirs": {},
              "files": [
                "Field_name_cheatsheet_generator.ipynb",
                "Nuke_Org.ipynb",
                "Untitled.ipynb",
                "Untitled1.ipynb",
                "authorization.ipynb",
                "build_opp_df.ipynb",
                "pipeline_metrics.ipynb",
                "rep_analysis.ipynb",
                "sim_heatmap.ipynb"
              ]
            },
            "sim": {
              "dirs": {},
              "files": [
                "README.md",
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
                "sf_majick_sim_guide.md",
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
        }
      },
      "files": [
        "README.md",
        "setup.py"
      ]
    }
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
        "README.md",
        "index.html"
      ]
    }
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
        "Gemfile.lock",
        "README.md",
        "app.py",
        "config.txt",
        "index.html",
        "main.py",
        "trivia.py"
      ]
    }
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
        "_site": {
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
            "README.md",
            "index.html",
            "indexer.py",
            "viewer.html"
          ]
        },
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
        "Gemfile.lock",
        "README.md",
        "index.html",
        "indexer.py",
        "viewer.html"
      ]
    }
  }
};
