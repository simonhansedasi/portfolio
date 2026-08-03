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
            "Fig1.tiff",
            "Fig2.tiff",
            "Fig3A.tiff",
            "Fig3B.tiff",
            "Fig4.tiff",
            "FigS1.tiff",
            "JavaScript.tex",
            "JavaScript_coverletter.tex",
            "JavaScript_response.tex",
            "JavaScript_supp.tex",
            "references.bib",
            "run.sh"
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
        "local": "images/GeoGastronomy/JavaScript/Fig1.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/GeoGastronomy/main/JavaScript/Fig1.png"
      },
      {
        "local": "images/GeoGastronomy/JavaScript/Fig4.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/GeoGastronomy/main/JavaScript/Fig4.png"
      }
    ],
    "local_base": "images/GeoGastronomy/"
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
        "local": "images/glacier_prethicktor/discrepancy_boxplot.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/simonhansedasi.github.io/main/images/discrepancy_boxplot.png"
      }
    ],
    "local_base": "images/glacier_prethicktor/"
  },
  "glacier_prethicktor_2": {
    "name": "glacier_prethicktor_2",
    "description": "Global consensus ice-thickness estimates fail to encode a first-order flotation constraint for water-terminating glaciers \u2014 proven at power >0.99.",
    "tech": [
      "Python",
      "pandas",
      "NumPy",
      "SciPy",
      "scikit-learn",
      "matplotlib",
      "LaTeX"
    ],
    "github": "https://github.com/simonhansedasi/glacier_prethicktor_2",
    "branch": "main",
    "readme": "# GlacierPrethicktor 2\n\nGlobal consensus ice-thickness estimates fail to encode a first-order flotation constraint for water-terminating glaciers \u2014 proven at power >0.99.\n\nBuilds on [Edasi & Lipovsky (2026)](https://github.com/simonhansedasi/glacier_prethicktor), which established that tidewater and lake-terminating glaciers are systematically thicker. This paper tests whether that depth-dependent signal is recoverable from the Farinotti et al. (2019) global consensus product. It is not \u2014 and the failure is not a power problem.\n\n## Findings\n\nThree interlocking arguments establish non-emergence of flotation physics from morphometric predictors:\n\n**Statistical** \u2014 HAB regression on 3,433 water-terminating glaciers in the Farinotti consensus yields slope = \u22120.027, p = 0.197, at power >0.99. Implicit encoding is ruled out.\n\n**Observational** \u2014 The same 9 BedMachine v6 glaciers show slope = 0.724, R\u00b2 = 0.66, p = 0.008. The signal exists in measured ice thickness; it is absent specifically from the consensus model.\n\n**Physical** \u2014 A correction experiment recovers the expected signal. In the plasticity-controlled regime (A < B, 52% of glaciers), applying a flotation correction shifts slope from \u22120.087 to +0.451, R\u00b2 = 0.63; 100% of 10,000 permutations are positive.\n\n## Status\n\nManuscript complete. Pending submission to Nature Geoscience.\n\n![BedMachine vs Farinotti](figures/bedmachine_vs_farinotti.png)\n\n## Stack\n\nPython, pandas, NumPy, SciPy, scikit-learn, matplotlib, LaTeX\n",
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
        "local": "images/glacier_prethicktor_2/figures/bedmachine_vs_farinotti.png",
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
    "readme": "# sf_majick\n\nA Salesforce sales org simulator \u2014 imports real CRM data, calibrates a behavioral model to match observed outcomes, and runs agent-based simulations to predict and experiment on org performance.\n\n![AND vs OR gate logic and resulting funnel shapes](figures/fig0_gate_mechanism.png)\n\n## What it does\n\nThe goal is to \"clone\" a Salesforce org: given a SOQL export of real opportunities, accounts, leads, and users, back-fit a parameterized simulation whose conversion rates, cycle times, and deal difficulty distribution match the real org. Then run what-if experiments \u2014 different rep archetypes, coaching interventions, pipeline hygiene changes \u2014 and measure the impact.\n\n### Simulation layer\n\nEach simulated day, rep agents work through their pipeline using a 3-step lookahead decision engine. They pick micro-actions (emails, calls, meetings, proposals, internal prep) based on their personality archetype, the entity's sentiment state, and expected future value. Macro events (stage advancement, lead conversion, close/lost) fire stochastically, with probabilities modulated by sentiment, momentum, friction, deal difficulty, and rep behavior.\n\n**Rep archetypes:** Closer, Nurturer, Grinder, Scattered \u2014 each with distinct personality traits (aggression, empathy, discipline) that drive action affinity, distraction rates, and burnout thresholds. Reps can be scheduled to join mid-simulation via `RepSlot.start_day`.\n\n**Micro-actions (9):** `send_email`, `make_call`, `hold_meeting`, `follow_up`, `research_account`, `internal_prep`, `solution_design`, `stakeholder_alignment`, `send_proposal` \u2014 each with attention cost, gating requirements, and sentiment effect.\n\n**Macro transitions (5):** Lead advancement, lead conversion \u2192 Account + Opportunity, stage advancement (Prospecting \u2192 Qualification \u2192 Proposal \u2192 Negotiation), opportunity close (Won/Lost), passive decay/death.\n\n**Sentiment engine:** Every touch updates entity sentiment; neglected entities decay passively. Sentiment history feeds momentum and friction signals that modulate macro probabilities and rep decision-making.\n\n**Burnout dynamics:** Reps accumulate workload stress each day via `end_of_day()` (actions taken, deals worked). Stress above the archetype's burnout threshold craters available attention and increments `days_burned_out`.\n\n**Human biases modeled:** Recency bias, sunk-cost bias, distraction (discipline-dependent), burnout, and learned timing weights (per-rep EMA of observed sentiment deltas per action/stage pair).\n\n### Calibration\n\n`OrgCalibrator` takes a Salesforce SOQL export and derives simulation parameters by back-fitting observed metrics:\n\n- Win rate, lost rate, cycle time \u2192 `base_prob_close`, `base_prob_lost`, stagnation/inactivity alphas\n- Stage distribution \u2192 per-stage advancement probabilities\n- Account and revenue distributions \u2192 seed state for the simulation\n\nThe result is an `OrgConfig` \u2014 probability fields overlay the `theta` dict \u2014 whose simulated org behaviorally matches the real one. Experiments run against this baseline.\n\n`OrgConfig` also accepts deal-size parameters (`lead_revenue_base`, `lead_revenue_sigma`, `account_revenue_mean_log`, `account_revenue_sigma_log`) to control revenue distributions directly from config rather than relying on entity defaults.\n\n### Experiments\n\n`ExperimentRunner` runs N iterations of a baseline and alternative scenarios and compares:\n- Won rate, revenue per run, avg rep earnings\n- Stage distribution and deal stall analysis\n- Rep stress / burnout distribution\n- Sentiment trajectory and action effect sizes\n\n**Statistical analysis:** `pipeline.py` computes terminal-state feature dataframes and `build_sentiment_effects()` runs raw mean sentiment delta per action (with CIs) and OLS-adjusted coefficients controlling for stage, rep, and outcome \u2014 identifying which actions actually move deals vs. which just correlate with deals that were going to move anyway.\n\n## Web GUI (Raspberry Pi)\n\nThe GUI runs on a local Pi at `http://raspberrypi:5008`. It has five tabs:\n\n- **Setup** \u2014 manual org config sliders for quick exploration\n- **Sim** \u2014 run the in-browser sim against the current config\n- **Fitter** \u2014 visual calibration diagnostics\n- **CSV** \u2014 drop a Salesforce SOQL export, auto-fit an `OrgConfig`, save the calibration to the Pi\n- **Experiments** \u2014 scenario builder (reads from local Setup config; on Pi this is display-only)\n\nDeploy/restart:\n```bash\nbash push_pi.sh\n```\n\n## Workflow: real SF org \u2192 experiment results\n\n1. Open `http://raspberrypi:5008` \u2192 CSV tab \u2192 drop a Salesforce opportunity export\n2. Review the fitted parameters, give it a name, click **Save to Pi**\n3. Locally: pull the calibration file:\n   ```bash\n   bash pull_calibration.sh\n   ```\n4. Edit `SCENARIOS` in `run_experiment.py` if needed, then run locally:\n   ```bash\n   python3 run_experiment.py data/fitted_configs/<name>.json\n   ```\n   This runs 100 Monte Carlo iterations per scenario using the full Python engine, prints a summary table, and writes a CSV next to the config.\n\nExperiments run locally because the Pi's ARM CPU is too slow for the Python simulation engine (~6.6s/run locally; 10\u201330\u00d7 slower on Pi). Fitting is client-side JS in the browser \u2014 no Pi CPU involved.\n\n## Tests\n\n```bash\npytest tests/test_sim.py -v\n```\n\nCovers: requirement-tree consume logic (AND/OR correctness), commission single-credit, burnout accumulation, deferred rep `start_day`, full smoke runs, and double-commission regression.\n\n## Tech\n\nPython \u2014 `dataclasses`, `numpy`, `pandas`, `statsmodels` (OLS), `scipy`, `setuptools`; Flask (GUI backend); vanilla JS + Canvas (browser fitter + experiment UI)\n\n## Setup\n\n```bash\npip install -e .\n```\n\n## Programmatic use\n\n```python\nfrom sf_majick.sim.org_config import OrgConfig\nfrom sf_majick.sim.org_calibrator import ExperimentRunner, build_state_from_config\nfrom sf_majick.sim.simulate import run_simulation\nfrom sf_majick.sim.micro_policy import simulate_rep_thinking\n\ncfg = OrgConfig.load(\"data/fitted_configs/acme_q3.json\")\n\nrunner = ExperimentRunner(\n    base_config   = cfg.with_changes(n_runs=100),\n    state_factory = build_state_from_config,\n    sim_fn        = run_simulation,\n    micro_policy  = simulate_rep_thinking,\n    n_iterations  = 100,\n)\n\nresults = runner.compare({\n    \"baseline\":    {},\n    \"hire_2_reps\": {\"n_reps\": cfg.n_reps + 2},\n})\n```\n\nHire reps mid-simulation:\n```python\ncfg = OrgConfig(\n    rep_slots=[\n        RepSlot(\"Closer\", count=3, start_day=0),\n        RepSlot(\"Grinder\", count=2, start_day=30),\n    ],\n    days=90,\n)\n```\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {},
          "files": [
            "rhoner_synthetic.csv",
            "whitepaper_funnel.csv",
            "whitepaper_results.csv",
            "whitepaper_summary.csv",
            "whitepaper_transitions.csv"
          ]
        },
        "sf_majick": {
          "dirs": {
            "cheatsheets": {
              "dirs": {},
              "files": [
                "Field_name_cheatsheet_generator"
              ]
            },
            "scripts": {
              "dirs": {},
              "files": [
                "build_opp_df.py",
                "deal_landscape.py",
                "pipeline_metrics.py"
              ]
            },
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
        "app.py",
        "generate_rhoner_synthetic.py",
        "make_figures.py",
        "make_gate_figure.py",
        "pull_calibration.sh",
        "push_pi.sh",
        "run_experiment.py",
        "run_whitepaper.py",
        "setup.py",
        "sf_majick_gui.service",
        "whitepaper.tex"
      ]
    },
    "images": [
      {
        "local": "images/sf_majick/figures/fig0_gate_mechanism.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/sf_majick/main/figures/fig0_gate_mechanism.png"
      },
      {
        "local": "images/sf_majick/figures/fig1_winrate_paradox.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/sf_majick/main/figures/fig1_winrate_paradox.png"
      },
      {
        "local": "images/sf_majick/figures/fig2_revenue_distribution.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/sf_majick/main/figures/fig2_revenue_distribution.png"
      },
      {
        "local": "images/sf_majick/figures/fig3_funnel_shape.png",
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
        "local": "images/char_gen/attribute_correlation.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/attribute_correlation.png"
      },
      {
        "local": "images/char_gen/chisq_resid_class_background.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/chisq_resid_class_background.png"
      },
      {
        "local": "images/char_gen/chisq_resid_species_background.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/chisq_resid_species_background.png"
      },
      {
        "local": "images/char_gen/chisq_resid_species_class.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/char_gen/main/chisq_resid_species_class.png"
      }
    ],
    "local_base": "images/char_gen/"
  },
  "strat_hacking": {
    "name": "strat_hacking",
    "description": "Multi-game strategy simulation lab. Each game is a self-contained Python module. Simulate thousands of games and compare strategy win rates head-to-head.",
    "tech": [
      "Python",
      "NumPy",
      "matplotlib",
      "pandas"
    ],
    "github": "https://github.com/simonhansedasi/strat_hacking",
    "branch": "master",
    "readme": "# StratHacking\n\nMulti-game strategy simulation lab. Each game is a self-contained Python module. Simulate thousands of games and compare strategy win rates head-to-head.\n\n## Games\n\n### Spots\n\nDice-placement dog game. First to score 6 dogs wins. Bust risk (yard sum > 7) is the central tension.\n\n6 strategies from random baseline to exact bust-probability math. Key finding: `BustAwareStrategy` uses per-decision expected-value calculations; `FastAndLooseStrategy` accepts busts as the price of speed.\n\n### Monopoly\n\nNo trading, no auctions. Pure individual strategy: buy/build/jail/mortgage decisions. 5-player games have ~60% timeout rate \u2014 monopolies are hard to form without trading.\n\n5 strategies from always-buy to railroad-focused cash hoarder.\n\n### Yahtzee\n\nSingle-player scoring. Strategies compared by average total score across N independent games.\n\n| Strategy        | Avg   | Std  | Bonus% | Ytz/g |\n|-----------------|-------|------|--------|-------|\n| Random          | 45.7  | 18.1 |   0.0% |  0.00 |\n| Greedy          | 210.8 | 50.8 |   8.6% |  0.36 |\n| UpperBonusHunter| 160.2 | 40.6 |   4.4% |  0.18 |\n| YahtzeeHunter   | 155.2 | 66.1 |   2.4% |  0.58 |\n| Balanced        | 201.0 | 46.6 |  36.3% |  0.18 |\n\nGreedy wins on average. Balanced hits the upper bonus 4x more often. YahtzeeHunter has the highest variance.\n\n### Qwixx\n\nMultiplayer dice game (5-player head-to-head). Scoring is triangular: n crosses = n*(n+1)/2 points.\n\n| Strategy     | Avg  | Std  | Win%  | Pen/g |\n|--------------|------|------|-------|-------|\n| Random       |  7.0 |  9.5 |  7.2% |  2.31 |\n| Aggressive   |  9.0 | 10.4 |  6.7% |  2.53 |\n| Conservative |  6.0 |  8.9 |  3.4% |  2.55 |\n| LockHunter   |  3.4 | 13.3 |  7.1% |  3.01 |\n| Balanced     | 27.2 | 14.7 | 72.4% |  1.81 |\n\nBalanced dominates with 72.4% win rate. Key insight: consecutive crosses (gap=0) over jumping to higher positions. Triangular scoring means more total crosses beats any individual high-position cross.\n\n### Royal Game of Ur\n\n2-player race game (~2500 BCE). Round-robin tournament across 6 strategies.\n\n**Balanced dominates** (82% overall). Key insight: avoiding vulnerable shared-zone squares and prioritising captures compounds strongly. Safe > Aggressive: surviving without getting sent back matters more than capture attempts.\n\n### Viticulture\n\n4-player worker-placement wine-production game. Race to 25 VP: plant vines \u2192 harvest grapes \u2192 make wine \u2192 fill orders.\n\n| Strategy  | Win%  | Avg VP | Orders/g |\n|-----------|-------|--------|----------|\n| Random    | 0.5%  | 2.7    | 0.71     |\n| Expansion | 13.5% | 10.4   | 2.23     |\n| OrderRush | 18.2% | 11.9   | 3.67     |\n| Balanced  | 67.7% | 18.7   | 4.16     |\n\nBalanced dominates (67.7%). OrderRush beats Expansion by converting production to VP through orders rather than investing in infrastructure first.\n\n## Running simulations\n\n```python\nfrom qwixx.sim import simulate\nfrom qwixx.strategies import BalancedStrategy, AggressiveStrategy\n\nstats = simulate(\n    [lambda rng: BalancedStrategy(rng), lambda rng: AggressiveStrategy(rng)],\n    ['Balanced', 'Aggressive'],\n    n_games=20_000,\n)\nprint(stats)\n```\n\nOr run any game directly: `python -m yahtzee.sim`, `python -m qwixx.sim`, etc.\n\n## Stack\n\nPython, NumPy, matplotlib, pandas\n",
    "tree": {
      "dirs": {
        "monopoly": {
          "dirs": {},
          "files": [
            "__init__.py",
            "board.py",
            "cards.py",
            "game.py",
            "sim.py",
            "strategies.py"
          ]
        },
        "qwixx": {
          "dirs": {},
          "files": [
            "__init__.py",
            "analysis.py",
            "game.py",
            "sim.py",
            "strategies.py"
          ]
        },
        "spots": {
          "dirs": {},
          "files": [
            "__init__.py",
            "analysis.py",
            "game.py",
            "prob.py",
            "sim.py",
            "strategies.py",
            "tricks.py"
          ]
        },
        "ur": {
          "dirs": {},
          "files": [
            "__init__.py",
            "analysis.py",
            "game.py",
            "sim.py",
            "strategies.py"
          ]
        },
        "viticulture": {
          "dirs": {},
          "files": [
            "analysis.py",
            "cards.py",
            "game.py",
            "sim.py",
            "strategies.py"
          ]
        },
        "yahtzee": {
          "dirs": {},
          "files": [
            "__init__.py",
            "analysis.py",
            "game.py",
            "sim.py",
            "strategies.py"
          ]
        }
      },
      "files": []
    },
    "images": [],
    "local_base": "images/strat_hacking/"
  },
  "statistical_uniqueness": {
    "name": "statistical_uniqueness",
    "description": "How statistically rare are you? Fetches US Census data, computes per-attribute probabilities across your demographic profile, and reports your joint rarity as a 1-in-N.",
    "tech": [
      "Python",
      "Flask",
      "NumPy",
      "pandas",
      "PyYAML",
      "US Census API (ACS PUMS)"
    ],
    "github": "https://github.com/simonhansedasi/statistical_uniqueness",
    "branch": "master",
    "readme": "# StatisticalUniqueness\n\nHow statistically rare are you? Fetches US Census data, computes per-attribute probabilities across your demographic profile, and reports your joint rarity as a 1-in-N.\n\nLive at [uniquefier.us](https://uniquefier.us)\n\n## How it works\n\nFill out `profile.yaml` with your demographics, life path, and family details. The tool fetches matching Census microdata (ACS PUMS), computes the frequency of each attribute in your age/sex cohort, then multiplies them to a joint probability.\n\n```bash\npython main.py --profile profile.yaml\npython main.py --profile profile.yaml --verbose   # show data sources\n```\n\nThe web app at `uniquefier.us` wraps the same engine in a form-based UI.\n\n## Profile structure\n\n```yaml\nmeta:\n  name: \"Simon\"\n  age: 33\n  sex: \"male\"\n\ndemographics:\n  race_ethnicity: \"white_non_hispanic\"\n  education_level: \"masters\"\n  occupation_group: \"life_physical_social_science\"\n  household_income: 75000\n  state: \"WA\"\n  languages: [\"estonian\"]\n\nfamily:\n  marital_status: \"married\"\n  num_children: 1\n  housing_tenure: \"rent\"\n\nlife_path:\n  age_at_first_marriage: 29\n  age_at_first_child: 31\n  founded_business: true\n  moved_states: true\n  lived_abroad: true\n  foreign_born: false\n  attended_grad_school: true\n```\n\n## Stack\n\nPython, Flask, NumPy, pandas, PyYAML, US Census API (ACS PUMS)\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {
            "pums": {
              "dirs": {},
              "files": [
                "__init__.py",
                "build_tables.py"
              ]
            },
            "reference": {
              "dirs": {},
              "files": [
                "acs_marital_status.csv",
                "bls_selfemployment.csv",
                "language_rates.csv",
                "mobility.csv",
                "nsfg_first_birth_age.csv",
                "nsfg_marriage_age.csv",
                "veteran_rates.csv"
              ]
            }
          },
          "files": [
            "__init__.py",
            "bls.py",
            "census.py",
            "nsfg.py",
            "pums_lookup.py"
          ]
        },
        "engine": {
          "dirs": {},
          "files": [
            "__init__.py",
            "probability.py"
          ]
        },
        "static": {
          "dirs": {},
          "files": [
            "style.css"
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
        "deploy_do.sh",
        "main.py",
        "profile.yaml",
        "push_pi.sh",
        "report.py"
      ]
    },
    "images": [],
    "local_base": "images/statistical_uniqueness/"
  },
  "library_recommender": {
    "name": "library_recommender",
    "description": "A family book discovery tool for Sno-Isle Library. Scrapes the full catalog into a local database, learns each user's taste from engagement signals, and places holds directly from the interface. The primary interface is a local web UI served from the Raspberry Pi; a CLI is also available for scripting and bulk operations.",
    "tech": [],
    "github": "https://github.com/simonhansedasi/dada_science/tree/main/library_recommender",
    "branch": "main",
    "readme": "# Library Recommender\n\nA family book discovery tool for Sno-Isle Library. Scrapes the full catalog into a local database, learns each user's taste from engagement signals, and places holds directly from the interface. The primary interface is a local web UI served from the Raspberry Pi; a CLI is also available for scripting and bulk operations.\n\nThree users: **heiki** (toddler \u2014 juvenile books), **simon**, and **madeleine** (adults \u2014 full catalog). Each user has an independent taste profile against the same shared catalog.\n\n---\n\n## Plain Language Summary\n\nThe catalog is scraped nightly into `library.db` on the Pi. Open the web UI on any device on the home network, pick your user from the dropdown, and tap Refresh to see what you currently have checked out. Log engagement \u2014 a slider for the rating, +/\u2212 buttons for reads, rereads, and false starts. In the Recommend tab, set an audience and genre filter if you want (e.g. Adult + Mystery Fiction), then tap Get Recommendations for 10 suggestions with live shelf availability at your home branch. Tap a title to expand the description and subject keywords. Place holds directly from that screen.\n\nAll four engagement signals combine into a preference score that drives recommendations. Re-read demands carry the most weight.\n\n---\n\n## Project Structure\n\n```\nlibrary_recommender/\n\u251c\u2500\u2500 app.py                  Flask web UI \u2014 served on Pi at port 5003\n\u251c\u2500\u2500 templates/index.html    Single-page HTML \u2014 Checked Out, Recommend, Holds tabs\n\u251c\u2500\u2500 cli.py                  CLI entry point \u2014 all commands live here\n\u251c\u2500\u2500 db.py                   Database layer \u2014 reads and writes to library.db\n\u251c\u2500\u2500 recommender.py          Recommendation engine \u2014 scoring and ranking logic\n\u251c\u2500\u2500 catalog_scraper.py      Scraper \u2014 pulls full Sno-Isle catalog into library.db (runs nightly via cron)\n\u251c\u2500\u2500 hold.py                 Hold placement \u2014 login, account resolution, hold submission\n\u251c\u2500\u2500 explore_catalog.py      Catalog explorer \u2014 shows available filter fields and counts\n\u251c\u2500\u2500 restart.sh              Local script \u2014 rsyncs code and restarts service on Pi\n\u251c\u2500\u2500 start_service.sh        Pi-side script \u2014 kills and restarts app.py (called by restart.sh)\n\u251c\u2500\u2500 library                 Shell wrapper so you can run ./library <command>\n\u251c\u2500\u2500 library.db              SQLite database \u2014 source of truth lives on Pi (not committed)\n\u251c\u2500\u2500 venv/                   Python venv on Pi (not committed, not rsynced)\n\u251c\u2500\u2500 logs/scraper.log        Nightly scraper output (on Pi only)\n\u251c\u2500\u2500 ratings_heiki.json      Heiki's exported ratings \u2014 commit to git\n\u251c\u2500\u2500 ratings_simon.json      Simon's exported ratings \u2014 commit to git\n\u251c\u2500\u2500 ratings_madeleine.json  Madeleine's exported ratings \u2014 commit to git\n\u251c\u2500\u2500 requirements.txt        Python dependencies\n\u251c\u2500\u2500 INSTRUCTIONS.md         Quick reference for daily use\n\u2514\u2500\u2500 README.md               This file\n```\n\n---\n\n## Deploy Model\n\nCode is written locally and rsynced to the Pi. The Pi runs everything \u2014 web UI, scraper, CLI. Git is managed from the local machine.\n\n**`library.db` on the Pi is the source of truth.** Do not overwrite it from a local copy.\n\n### Sync to Pi\n\n```bash\nrsync -av --exclude='venv' --exclude='library.db' --exclude='.env' \\\n          --exclude='__pycache__' --exclude='logs' \\\n  ~/coding/dada_science/library_recommender/ \\\n  simonhans@raspberrypi:~/coding/dada_science/library_recommender/\n```\n\n### Start / restart the web UI\n\nFrom your local machine (rsyncs code + restarts):\n```bash\n~/coding/dada_science/library_recommender/restart.sh\n```\n\nOr from the Pi directly:\n```bash\nbash ~/coding/dada_science/library_recommender/start_service.sh\n```\n\nAccess at `http://raspberrypi:5003` (or the Pi's LAN IP, e.g. `http://192.168.88.12:5003`).\n\n### Nightly catalog update\n\nA cron job runs the scraper every night at midnight:\n\n```\n0 0 * * * cd ~/coding/dada_science/library_recommender && venv/bin/python catalog_scraper.py >> logs/scraper.log 2>&1\n```\n\nCheck the last run: `tail ~/coding/dada_science/library_recommender/logs/scraper.log`\n\n---\n\n## Multi-User Setup\n\nEach user gets an independent rating profile. The catalog is shared; only ratings and checkouts are per-user.\n\nThree active users: **heiki**, **simon**, **madeleine**. The web UI shows a user dropdown populated automatically from `.env`.\n\n### Credentials in `.env`\n\n```\n# Default user when no selection is made\nLIBRARY_USER=heiki\n\n# Per-user library cards (any SNOISLE_CARD_<NAME> with a non-empty value appears in the web dropdown)\nSNOISLE_CARD_HEIKI=...\nSNOISLE_PIN_HEIKI=...\n\nSNOISLE_CARD_SIMON=...\nSNOISLE_PIN_SIMON=...\n\nSNOISLE_CARD_MADELEINE=...     # alphanumeric Libby cards work fine (e.g. PACREG937335)\nSNOISLE_PIN_MADELEINE=...\n\n# Default pickup branch (Lynnwood = 18)\nSNOISLE_BRANCH=18\n```\n\n`.env` is in `.gitignore` and is never committed. After editing `.env` on the Pi, run `start_service.sh` to restart.\n\n### Selecting a user\n\n**Web UI:** Use the dropdown in the header \u2014 switches instantly with a page reload.\n\n**CLI:**\n```bash\n./library --user simon recommend\n./library --user madeleine recommend\n```\n\n---\n\n## Getting a Catalog\n\nThe recommender needs books in the database before it can recommend anything.\n\n### 1. Explore what's available (optional)\n\n```bash\npython explore_catalog.py                                   # full overview of all filter fields\npython explore_catalog.py --audience JUVENILE --format BK  # scope to children's physical books\n```\n\n### 2. Scrape into the database\n\n```bash\npython catalog_scraper.py                  # full run \u2014 38 subject queries, all ages\npython catalog_scraper.py --max-pages 2    # quick test\n```\n\nCovers: juvenile (12 subjects), young adult (2), adult fiction (12), adult nonfiction (12). No audience filter \u2014 all ages in one pass. Re-run anytime to refresh checkout counts and pick up new titles. Ratings and personal checkout history are never overwritten. Any pages that fail are written to `failed_pages.csv`.\n\nThe scraper skips books that haven't changed (matched by `metadata_id`, compared against description, isbn, genre, subject, age_range, and checkout count). Timeouts are retried up to 5 times with exponential backoff.\n\n| Flag | Default | Description |\n|------|---------|-------------|\n| `--max-pages N` | all | Stop after N pages per query prefix |\n\n---\n\n## CLI Commands\n\n### `./library [--user NAME] <command>`\n\nAll commands accept `--user` as a global flag before the command name. Defaults to `LIBRARY_USER` in `.env`.\n\n---\n\n### `./library recommend [--age AUDIENCE] [--hold-all]`\n\nDisplays 10 book recommendations in three categories, scoped to the active user's ratings.\n\n```bash\n./library recommend\n./library --user heiki recommend --age juvenile\n./library --user simon recommend --age adult\n./library --user heiki recommend --age juvenile --hold-all\n```\n\n`--age` is a case-insensitive substring match against the BiblioCommons audience field (maps to `audience=` in the recommender). The web UI exposes this as an audience dropdown with values drawn live from the catalog.\n\n`--hold-all` places holds on all 10 recommendations immediately after displaying them. Logs in once and places all holds in sequence. Uses `SNOISLE_BRANCH` from `.env` for pickup branch (or prompts if not set). Two categories of books are skipped with a warning:\n- Books with no `metadata_id` \u2014 re-run the scraper to fix\n- Books whose `metadata_id` doesn't start with `S121` \u2014 these are shared catalog records from partner libraries; Sno-Isle's hold API only accepts its own records. Place these holds on the website instead.\n\n```bash\n# Additional --hold-all options (all fall back to .env)\n./library --user heiki recommend --hold-all --branch 18\n./library --user heiki recommend --hold-all --card 12345 --pin 9999\n```\n\n**The three categories:**\n\n| Category | Count | How it's chosen |\n|----------|-------|-----------------|\n| Top matches | 5 | Highest combined score: content similarity to your liked books (60%) + library popularity (40%) |\n| Experimental | 2 | High content similarity to liked books but low library checkout count |\n| Hidden gems | 3 | Lowest library checkout counts in the entire catalog |\n\n**How the content score works:**\n\nThe engine converts each book's title, author, description, subject, genre, and age range into a numerical fingerprint using TF-IDF. It then finds the \"average fingerprint\" of books rated 4 or 5 stars by the active user, **weighted by rating** (a 5-star book pulls the profile harder than a 4-star one), and measures how similar each unread book is to that profile.\n\nIf there are no ratings yet, it falls back to the mean vector of all checked-out books. If there are no checkouts either, it falls back to popularity-only scoring.\n\n---\n\n### `./library search`\n\nSearches the catalog by title, author, description, or subject. Filters are ANDed together.\n\n```bash\n./library search \"caterpillar\"                      # all fields\n./library search --author \"Eric Carle\"              # author only\n./library search --title \"hungry\" --author \"carle\"  # both\n./library search \"bedtime\" --author \"sendak\"        # general + author filter\n```\n\n---\n\n### `./library hold <id>`\n\nPlaces a hold on a book at Sno-Isle for library pickup using the active user's card.\n\n```bash\n./library hold 42                          # uses SNOISLE_BRANCH from .env, or prompts\n./library hold 42 --branch 18             # Lynnwood Library directly\n./library --user madeleine hold 42        # places hold on Madeleine's card\n```\n\n**What it does:**\n1. Fetches live copy availability (unauthenticated) \u2014 shows which branches have the book and whether each copy is on the shelf or checked out\n2. Logs into `sno-isle.bibliocommons.com` using the active user's card and PIN from `.env`\n3. Resolves the `accountId` from the BiblioCommons API\n4. POSTs a hold to `gateway.bibliocommons.com/v2/libraries/sno-isle/holds`\n\n**Note:** Only books with a `metadata_id` starting with `S121` can be held via the API \u2014 these are records owned by Sno-Isle. Books with other prefixes (e.g. `S980`) are shared records from partner libraries; the CLI will refuse them with a clear message. Place those holds on the website instead.\n\n**Branch IDs** (common Sno-Isle locations):\n\n| ID | Branch | ID | Branch |\n|----|--------|----|--------|\n| 7  | Arlington | 18 | Lynnwood |\n| 9  | Camano Island | 19 | Marysville |\n| 13 | Edmonds | 20 | Mill Creek |\n| 15 | Granite Falls | 21 | Monroe |\n| 16 | Lake Stevens | 22 | Mountlake Terrace |\n| 30 | Lakewood Smokey Point | 23 | Mukilteo |\n| 17 | Langley | 25 | Snohomish |\n\nRun `./library hold <id>` without `--branch` for the full interactive list.\n\n---\n\n### `./library availability <id>`\n\nShows live copy availability for a book \u2014 no login required.\n\n```bash\n./library availability 42\n```\n\nLists every copy in the Sno-Isle system with branch name, collection, call number, and shelf status.\n\n---\n\n### `./library sync-checkouts`\n\nPulls your currently checked-out books from Sno-Isle and marks them in the local database. Run this before `recommend` to ensure the recommender excludes books already sitting on your shelf.\n\n```bash\n./library sync-checkouts\n./library --user madeleine sync-checkouts\n```\n\nUses credentials from `.env`. Books are matched to the local catalog by `metadata_id`; any not found are reported but do not cause an error. The `currently_checked_out` flag is reset on every sync, so running it again after returning books will un-flag them.\n\n**Typical pre-trip workflow:**\n```bash\n./library sync-checkouts     # mark what we already have\n./library recommend          # get fresh picks\n./library hold <id>          # place holds\n```\n\n---\n\n### `./library my-account`\n\nLogs into Sno-Isle and shows current holds and checked-out books for the active user.\n\n```bash\n./library my-account\n./library --user madeleine my-account\n```\n\nShows:\n- **Holds** \u2014 title, status, queue position, pickup branch, pickup-by / expiry dates\n- **Checkouts** \u2014 local DB id, title, due date, overdue status, renewable flag, your rating\n\nThe local DB id is looked up first by matching the BiblioCommons `metadata_id`, then by title + author as a fallback (handles cases where the checkout API returns a different metadata_id format than the scraper stored). Books genuinely absent from the local catalog show `?` \u2014 re-run the scraper to pick them up.\n\n---\n\n### `./library export-account-csv` / `./library import-ratings-csv`\n\nThe primary workflow for rating an entire batch of checked-out books at once. Replaces typing `rate-book` one book at a time.\n\n```bash\n# 1. Export currently checked-out books to a CSV\n./library export-account-csv                       # writes currently_out_YYYY-MM-DD.csv\n./library export-account-csv myratings.csv         # custom path\n\n# 2. Open the CSV in any spreadsheet, fill in the columns you want, save\n#    Columns: metadata_id (key \u2014 don't edit), title, author, rating, times_read,\n#             reread_demands, false_starts\n\n# 3. Apply the filled-in data\n./library import-ratings-csv currently_out_2025-06-01.csv\n./library --user madeleine import-ratings-csv myratings.csv\n```\n\n**Export behavior:**\n- Fetches live checkouts from Sno-Isle (same credentials as `my-account`)\n- Any checked-out books not yet in the local catalog are auto-added before writing\n- Pre-fills existing ratings from the local DB \u2014 already-logged values appear in the CSV so you can review and edit them\n\n**Import behavior:**\n- Books matched by `metadata_id` first, then title + author as fallback\n- Only non-empty cells are written \u2014 blank cells preserve whatever was already stored\n- Values are SET, not incremented: `times_read=5` means \"5 total reads\", not \"add 5 more\"\n- Any row whose book can't be found in the local catalog is reported and skipped\n\n---\n\n### `./library checkout <id>`\n\nRecords a book as currently checked out in the local database for the active user.\n\n```bash\n./library checkout 42\n```\n\n**This does not contact the library.** It marks the book so it appears in `./library rate` when you return it. Use `hold` to interact with Sno-Isle.\n\n---\n\n### `./library rate`\n\nPrompts you to rate all checked-out unrated books for the active user.\n\n```bash\n./library rate\n./library --user madeleine rate\n```\n\n**Rating scale:**\n\n| Score | Meaning |\n|-------|---------|\n| 1 | No interest |\n| 2 | Tolerated |\n| 3 | Liked it |\n| 4 | Asked for it again |\n| 5 | Totally engaged |\n\nDecimal values are accepted (e.g., `3.5`). Press `s` to skip a book.\n\nThe star rating is one of four engagement signals. For richer data, also log `read`, `reread`, and `false-start` events as they happen during a session.\n\n---\n\n### `./library rate-book`\n\nRate a single book directly \u2014 no checkout flow needed. Useful for one-off corrections or seeding ratings on books you've already read. For rating a whole batch, use `export-account-csv` / `import-ratings-csv` instead.\n\n```bash\n./library rate-book              # interactive: search \u2192 pick \u2192 rate, repeat\n./library rate-book <id> <score> # one-liner\n```\n\n---\n\n### `./library read <id>`\n\nLogs a completed reading session for a book. Call it once each time a book gets read cover-to-cover \u2014 whether on that library trip or re-read from a previous one.\n\n```bash\n./library read 42\n./library --user heiki read 42\n```\n\n---\n\n### `./library reread <id>`\n\nLogs a re-read demand \u2014 Heiki asked for the book again before it was even put down. This is the strongest positive engagement signal in the recommender.\n\n```bash\n./library reread 42\n./library --user heiki reread 42\n```\n\n---\n\n### `./library false-start <id>`\n\nLogs a false start \u2014 the book was opened but not finished. A soft negative signal. More false starts against a book will gently push it down in future recommendations.\n\n```bash\n./library false-start 42\n./library --user heiki false-start 42\n```\n\n---\n\n### `./library export-ratings` / `./library import-ratings`\n\nExport and restore per-user ratings. Commit the exported files to git so ratings persist across machines.\n\n```bash\n# Export (run after each library trip, then commit)\n./library export-ratings                    # writes ratings_heiki.json\n./library --user madeleine export-ratings   # writes ratings_madeleine.json\n\n# Import (after cloning or pulling on a new machine)\n./library import-ratings                    # reads ratings_heiki.json\n./library --user madeleine import-ratings   # reads ratings_madeleine.json\n\n# Custom file path\n./library export-ratings mybackup.json\n./library import-ratings mybackup.json\n```\n\nBooks are matched by title + author, so import works correctly after a full re-scrape where numeric IDs differ. Books not found in the current catalog are reported as skipped \u2014 re-run the scraper and import again.\n\n**New machine workflow:**\n```bash\ngit clone <repo>\npip install -r requirements.txt\n# Edit .env with your credentials\npython catalog_scraper.py\n./library import-ratings\n./library --user madeleine import-ratings\n./library recommend\n```\n\n---\n\n### `./library list`\n\nLists all books in the database with personal fields scoped to the active user.\n\n```bash\n./library list\n./library list --limit 100\n./library list --rated        # only books you've rated\n```\n\n---\n\n## Module Reference\n\n### `catalog_scraper.py`\n\nQueries `gateway.bibliocommons.com/v2/libraries/sno-isle/bibs/search` page by page and upserts books directly into `library.db`. Uses `tqdm` for progress bars. Stores `metadata_id` (the BiblioCommons bib ID) on each book, which is required for hold placement.\n\n### `hold.py`\n\nHandles availability lookup, authentication, and hold submission against the BiblioCommons API. Functions: `get_availability()`, `login()`, `get_account_id()`, `get_branches()`, `place_hold()`, `hold_book()`, `get_holds()`, `get_checkouts()`.\n\n`get_availability(metadata_id)` is unauthenticated \u2014 it returns per-copy branch name, collection, call number, and shelf status. `get_holds()` and `get_checkouts()` return live account data using `_gateway_get()`, which retries across NERF load-balancer backends to handle session replication lag. All authenticated functions require credentials from `.env`.\n\n### `explore_catalog.py`\n\nQueries the BiblioCommons API and prints all available filter fields with counts. Use before scraping to understand what's available.\n\n### `cli.py`\n\nEntry point. Uses [Click](https://click.palletsprojects.com/) for commands and [Rich](https://rich.readthedocs.io/) for display. Calls into `db.py`, `hold.py`, and `recommender.py`. The `--user` global option is resolved here and passed to all database and recommender calls.\n\n### `db.py`\n\nAll database reads and writes. Uses Python's built-in `sqlite3`. No ORM. All personal-data functions accept a `user` parameter to scope ratings and checkouts.\n\n| Function | Description |\n|----------|-------------|\n| `init_db()` | Creates tables and runs migrations. Called on every CLI invocation. |\n| `upsert_book(data)` | Inserts or updates a book matched by title + author. |\n| `get_all_books(user)` | Returns every book with personal fields scoped to the user. |\n| `get_book(book_id, user)` | Returns a single book by ID with user-scoped personal fields. |\n| `get_checked_out_unrated(user)` | Returns books with open checkout records and no rating for this user. |\n| `add_checkout(book_id, user)` | Creates a checkout record for this user. |\n| `record_rating(checkout_id, rating)` | Saves a rating; user is inferred from the checkout record. |\n| `rate_book_direct(book_id, rating, user)` | Creates a completed checkout + rating in one step. |\n| `log_read(book_id, user)` | Increments `times_read` for a completed reading session. |\n| `log_reread_demand(book_id, user)` | Increments `reread_demands`. |\n| `log_false_start(book_id, user)` | Increments `false_starts`. |\n| `search_books(query, user, title, author)` | Search with optional field-specific filters. |\n| `get_book_ids_by_metadata(metadata_ids)` | Returns `{metadata_id: book_id}` for a list of BiblioCommons bib IDs. |\n| `get_book_ids_by_title_author(books)` | Fallback lookup returning `{(title, author): book_id}` for books not matched by metadata_id. |\n| `get_ratings_by_book_ids(book_ids, user)` | Returns `{book_id: {avg_rating, times_read, reread_demands, false_starts}}` for the given book ids and user. |\n| `sync_currently_checked_out(book_ids, user)` | Sets `currently_checked_out=1` for the given book ids, 0 for all others. Called by `sync-checkouts` CLI and by `api_account()` on Refresh. |\n| `get_catalog_meta()` | Returns `{audiences: [...], genres: [...]}` \u2014 distinct audience values and top 50 genre terms (title-cased, deduplicated) from the catalog. Used by `/api/catalog_meta`. |\n| `export_ratings(user)` | Returns all rating data for a user as a serialisable dict. |\n| `import_ratings(data, user)` | Restores ratings from an export, matching books by title + author. |\n| `upsert_ratings_partial(user, book_id, **fields)` | SET-semantics upsert; only updates columns explicitly passed. Used by `import-ratings-csv`. |\n\n**Database schema:**\n\n```sql\nbooks (\n    id                     INTEGER PRIMARY KEY,\n    title                  TEXT NOT NULL,\n    author                 TEXT,\n    description            TEXT,\n    isbn                   TEXT,\n    age_range              TEXT,\n    genre                  TEXT,\n    subject                TEXT,\n    metadata_id            TEXT,              -- BiblioCommons bib ID (for holds)\n    library_checkout_count INTEGER,           -- total copies held (popularity proxy)\n    last_library_checkout  TEXT,\n    date_added             TEXT,\n    UNIQUE(title, author)\n)\n\ncheckouts (\n    id             INTEGER PRIMARY KEY,\n    book_id        INTEGER,\n    user           TEXT,                      -- which user checked this out\n    checkout_date  TEXT,\n    return_date    TEXT,\n    rating         REAL,\n    notes          TEXT\n)\n\nuser_ratings (\n    user                    TEXT,             -- user profile name\n    book_id                 INTEGER,\n    avg_rating              REAL,             -- average star rating for this user\n    times_checked_out       INTEGER,          -- library checkouts by this user\n    times_read              INTEGER,          -- completed reading sessions\n    reread_demands          INTEGER,          -- \"again!\" requests\n    false_starts            INTEGER,          -- started but not finished\n    currently_checked_out   INTEGER,          -- 1 if on our shelf right now (set by sync-checkouts)\n    PRIMARY KEY (user, book_id)\n)\n```\n\n### `recommender.py`\n\nCore recommendation engine using TF-IDF and cosine similarity from scikit-learn.\n\n**Scoring:**\n1. TF-IDF matrix built from all books (unigrams + bigrams, 5,000 features max) \u2014 text includes title, author, description, subject, genre, and age_range\n2. Preference profile = engagement-weighted TF-IDF centroid of any book with a composite preference score > 0; falls back to mean of all checked-out books; falls back to zero vector (popularity-only) if no history\n3. Content score = cosine similarity to preference profile\n4. Popularity score = library checkout count normalized to 0\u20131\n5. Familiarity penalty = `times_checked_out` normalized 0\u20131\n6. Final score = `0.6 \u00d7 content + 0.4 \u00d7 popularity \u2212 0.25 \u00d7 familiarity`\n\nBooks with `currently_checked_out = 1` (set by `sync-checkouts`) are hard-excluded from candidates entirely. Books previously checked out but returned are penalized by up to \u22120.25 but remain eligible for recommendation.\n\n**Composite preference score** (used to identify and weight liked books):\n\n| Signal | Weight | Notes |\n|--------|--------|-------|\n| `avg_rating` (normalized 0\u20131) | +0.30 | Adult subjective quality |\n| `reread_demands` (normalized 0\u20131) | +0.40 | Strongest engagement signal |\n| `times_read` (normalized 0\u20131) | +0.20 | Completed sessions |\n| `false_starts` (normalized 0\u20131) | \u22120.10 | Soft negative \u2014 disengagement |\n\nEach signal is normalized independently to 0\u20131 before weighting, so a book with 5 re-read demands and no rating still seeds the profile.\n\nExperimental picks are selected by highest `content \u2212 popularity` gap (similar to liked books but rarely checked out). Hidden gems are the three lowest absolute checkout counts across the whole catalog.\n\n---\n\n## Dependencies\n\n| Package | Purpose |\n|---------|---------|\n| `click` | CLI framework |\n| `rich` | Terminal formatting |\n| `requests` | HTTP \u2014 scraper and hold placement |\n| `tqdm` | Progress bars in the scraper |\n| `scikit-learn` | TF-IDF and cosine similarity |\n| `numpy` | Matrix math |\n| `sqlite3` | Built-in \u2014 database storage |\n",
    "tree": {
      "dirs": {
        "templates": {
          "dirs": {},
          "files": [
            "index.html",
            "stats.html"
          ]
        }
      },
      "files": [
        "app.py",
        "catalog_scraper.py",
        "cli.py",
        "currently_out_2026-05-12.csv",
        "db.py",
        "explore_catalog.py",
        "failed_pages.csv",
        "hold.py",
        "importer.py",
        "library",
        "recommender.py",
        "restart.sh",
        "sno_isle_catalog.csv",
        "start_service.sh"
      ]
    },
    "images": [
      {
        "local": "images/library_recommender/screenshot.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/dada_science/main/screenshot.png"
      }
    ],
    "local_base": "images/library_recommender/"
  },
  "scheduling": {
    "name": "scheduling",
    "description": "CLI weekly planner with Google Calendar sync \u2014 draft your week in the terminal, push to Google Calendar, and pull external events into the plan.",
    "tech": [
      "Python",
      "Google Calendar API",
      "OAuth2",
      "Rich",
      "questionary",
      "JSON"
    ],
    "github": "https://github.com/simonhansedasi/dada_science/tree/main/scheduling",
    "branch": "main",
    "readme": "# scheduling\n\nCLI weekly planner with Google Calendar sync \u2014 draft your week in the terminal, push to Google Calendar, and pull external events into the plan.\n\n## What it does\n\nInteractive terminal planner for building and managing a weekly schedule. Activities are stored in per-week JSON files (append-only archive). A nap window is injected at display time from config \u2014 not stored in data files \u2014 so changing it is a one-line edit with instant global effect.\n\nGoogle Calendar integration supports push (plan \u2192 GCal, idempotent re-push), pull (GCal events written into the week JSON as `gcal_source` activities, never pushed back), and multi-account pull with timezone normalisation. Pulled events display in magenta with a \ud83d\udccd location link.\n\nActivities support an optional location field that renders as a clickable Google Maps hyperlink in the terminal and is included in the GCal event's native location field on push.\n\n## Tech\n\nPython, Google Calendar API, OAuth2, Rich, questionary, JSON\n\n## Commands\n\n```\nplan show week [YYYY-WXX]   Week view (defaults to current)\nplan show next / prev        Navigate weeks\nplan show today              Day view\nplan show YYYY-MM-DD         Specific day\nplan add                     Interactive activity creation (title, time, notes, location, tags)\nplan edit                    Interactive edit / delete (incl. nap override)\nplan nap                     Update global nap window\nplan check                   Outstanding \u26a0\ufe0f items across all weeks\nplan auth                    Google OAuth setup\nplan whoami                  Show authenticated Google account\nplan calendars               List all calendars visible to that account\nplan push [YYYY-WXX|next|prev]   Push week to Google Calendar\nplan pull [YYYY-WXX|next|prev]   Pull GCal events into week JSON and show\n```\n\n## Setup\n\n```bash\npip install -r requirements.txt\n```\n\nPlace `client_secret.json` in `credentials/`, then:\n\n```bash\npython plan.py auth\n```\n\n## Architecture\n\n```\nplan.py          CLI entry point + all commands\ngcal.py          Google Calendar integration (auth, push, pull)\nconfig.json      Global config: nap times, weekly themes, GCal settings\nweeks/           Append-only archive of week files (YYYY-WXX.json)\narchive/         Historical data\ncredentials/     OAuth token + client secret (gitignored)\n```\n",
    "tree": {
      "dirs": {},
      "files": [
        "gcal.py",
        "plan.py"
      ]
    },
    "images": [],
    "local_base": "images/scheduling/"
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
    "description": "Two CLI tools + a Flask web UI + a daily pipeline that surfaces new listings automatically.",
    "tech": [],
    "github": "https://github.com/simonhansedasi/rejection_matrix",
    "branch": "main",
    "readme": "# rejection_matrix\n\nTwo CLI tools + a Flask web UI + a daily pipeline that surfaces new listings automatically.\n\n- **`src/search.py`** \u2014 search job boards for listings by title, salary, location, work type, industry, and company\n- **`src/rm.py`** \u2014 track applications you've submitted, log updates, and view status\n- **`src/app.py`** \u2014 web UI on port 5004; search page streams results live, applications page shows the full tracker, Uncovered tab shows pipeline-surfaced jobs\n- **`src/pipeline.py`** \u2014 daily cron script; searches broad keyword across sources, dedupes, title-filters, writes survivors to `weekly_search_results`, notifies via ntfy.sh\n\nThe CLI tools have no dependencies beyond Python 3.6+ stdlib. The web UI requires `flask`. The SQLite database lives at `data/applications.db`.\n\n## Working on the go\n\nTo work on job search at a library or coffee shop without the laptop lid suspending your session:\n\n```bash\n~/coding/incognito_mode.sh   # run once = lid-close does nothing; run again = back to normal\n```\n\nRequires `sudo`. Script lives outside this directory at `~/coding/incognito_mode.sh`.\n\n## Web UI\n\nRun locally:\n\n```bash\npython3 src/app.py\n# \u2192 http://localhost:5004\n```\n\nOn the Pi it runs as a systemd service (`rejection-matrix.service`). To redeploy:\n\n```bash\nrsync -av --exclude='__pycache__' --exclude='*.pyc' --exclude='venv' \\\n  /home/simonhans/coding/rejection_matrix/ simonhans@raspberrypi:~/coding/rejection_matrix/\nssh simonhans@raspberrypi \"sudo systemctl restart rejection-matrix\"\n```\n\n## CLI\n\nRun both from the repo root:\n\n```bash\npython3 src/search.py <keywords> [options]\npython3 src/rm.py <command> [options]\n```\n\n---\n\n## search.py \u2014 find jobs\n\n```\npython3 src/search.py <keywords...> [options]\n```\n\n### Job boards searched\n\n| Board | Requires key? | What it has |\n|---|---|---|\n| **Remotive** | No | Remote jobs; salary data on many listings; keyword + category filters |\n| **We Work Remotely** | No | Remote jobs; no salary; RSS feed |\n| **The Muse** | No | Remote, hybrid, and onsite; location filter; no salary |\n| **JSearch** | Yes \u2014 free | Aggregates **LinkedIn, Indeed, Glassdoor, ZipRecruiter**; salary data; location; remote filter |\n| **USAJOBS** | Yes \u2014 free | US federal jobs: **NPS, USGS, NOAA, Forest Service**, and all other federal agencies; salary data; location + radius |\n\nEvery result shows a **Source** column (which board \u2014 or for JSearch, which underlying site like LinkedIn or Indeed) and a **URL** column (direct link to the listing). That URL is where you apply. When you save a result to the tracker with `--save`, the board name is stored in the `source` field and the listing URL is stored in `notes`.\n\n#### Setting up JSearch (LinkedIn / Indeed / Glassdoor)\n\nJSearch is a RapidAPI service that scrapes the major boards so you don't have to.\n\n1. Sign up free at **rapidapi.com** \u2192 search for **JSearch** \u2192 subscribe to the free plan (200 req/month)\n2. Copy your RapidAPI key and set it in your environment:\n\n```bash\nexport JSEARCH_API_KEY=your_key_here\n# Add to ~/.bashrc or ~/.zshrc to persist it\n```\n\nOnce the env var is set, JSearch runs automatically alongside the other three sources. Without it, it prints `SKIPPED` and the other sources still run.\n\n#### Setting up USAJOBS (federal jobs)\n\nUSAJOBS is the official US federal job board. The API is free but requires registration.\n\n1. Register at **https://developer.usajobs.gov/APIRequest/Index** \u2014 fill in your name, email, and intended use\n2. You'll receive an API key by email\n3. Set both required env vars:\n\n```bash\nexport USAJOBS_API_KEY=your_key_here\nexport USAJOBS_EMAIL=your_email@example.com   # must match registration email\n# Add to ~/.bashrc or ~/.zshrc to persist\n```\n\nOnce both vars are set, USAJOBS runs automatically. Without them, it prints `SKIPPED`.\n\n### Options\n\n| Flag | Description |\n|---|---|\n| `keywords` | Job title keywords. Quote multi-word phrases: `\"data analyst\"` |\n| `--zip ZIP` | US zip code \u2014 resolves to city/state for location filtering |\n| `--radius MILES` | Search radius around zip, default 25 (applies to onsite/hybrid on The Muse) |\n| `--salary-min N` | Hide listings where the *known* max salary is below N |\n| `--salary-max N` | Hide listings where the *known* min salary is above N |\n| `--remote` | Show only remote listings |\n| `--hybrid` | Show only hybrid listings |\n| `--industry TEXT` | Category/industry passed to Remotive and The Muse APIs (e.g. `fintech`, `data`, `marketing`) |\n| `--company NAME` | Filter results to companies whose name contains this string |\n| `--sources LIST` | Comma-separated list of boards to search (default: `remotive,wwr,muse,jsearch,usajobs`) |\n| `--limit N` | Max results to fetch per source, default 25 |\n| `--save` | After displaying results, prompt for numbers to save to the tracker |\n\n> **Note on salary filtering:** Most listings don't include salary. The filter only excludes listings where salary is *known* to be outside your range \u2014 listings with no salary posted will still appear.\n\n### Examples\n\n```bash\n# Basic search\npython3 src/search.py \"data analyst\"\n\n# Remote only, with salary floor\npython3 src/search.py \"data analyst\" --remote --salary-min 90000\n\n# Local + remote, near a zip code\npython3 src/search.py \"software engineer\" --zip 98101 --salary-min 120000\n\n# Remote or hybrid, specific industry\npython3 src/search.py \"product manager\" --remote --hybrid --industry fintech\n\n# Search for roles at a specific company\npython3 src/search.py \"engineer\" --company Stripe --remote\n\n# Narrow to two sources, higher result cap\npython3 src/search.py \"data engineer\" --sources remotive,wwr --limit 50\n\n# Search and save picks to the tracker\npython3 src/search.py \"analyst\" --remote --salary-min 80000 --save\n\n# Federal jobs only (NPS, USGS, NOAA, etc.)\npython3 src/search.py \"park ranger\" --zip 98087 --sources usajobs\npython3 src/search.py \"geologist\" --zip 98087 --sources usajobs\npython3 src/search.py \"physical scientist\" --zip 98087 --sources usajobs --remote\n```\n\n### Saving to the tracker\n\nPass `--save` and after results are shown you'll be prompted:\n\n```\nEnter result numbers to save to tracker (e.g. 1,3,5), or press Enter to skip:\n  > 2,5\n  Saved #7: Senior Data Analyst @ Acme Corp\n  Saved #8: Data Analyst @ Some Co\n```\n\nSaved entries land in `data/applications.db` with status `applied`. The listing URL is in the `notes` field \u2014 retrieve it with:\n\n```bash\nsqlite3 data/applications.db \"SELECT notes FROM job_applications WHERE id = 7;\"\n```\n\n---\n\n## rm.py \u2014 track applications\n\n### `add` \u2014 log a new application\n\n```\npython3 src/rm.py add <company> <role> [options]\n```\n\n| Argument | Required | Description |\n|---|---|---|\n| `company` | yes | Company name |\n| `role` | yes | Job title |\n| `--date YYYY-MM-DD` | no | Date applied (defaults to today) |\n| `--source` | no | Where you found it (LinkedIn, referral, etc.) |\n| `--location` | no | Office location or \"Remote\" |\n| `--salary` | no | Salary offer (number) |\n| `--industry` | no | Company industry (e.g. Fintech, Healthcare) |\n| `--notes` | no | Any free-text notes |\n| `--variant` | no | Resume variant used (e.g. `geo`, `research`, `simulation`) |\n\nNew applications are always set to `applied` status.\n\n```bash\npython3 src/rm.py add \"PNNL\" \"Research Scientist\" --source LinkedIn --location Remote --variant research\npython3 src/rm.py add \"Boring Co\" \"Engineer\" --date 2026-03-20 --notes \"Applied via recruiter\"\n```\n\n---\n\n### `update` \u2014 log what happened\n\n```\npython3 src/rm.py update <id> <note> [--status STATUS] [--variant VARIANT]\n```\n\nEvery update is written to the audit log with a timestamp. `--status` changes the application status; `--variant` updates which resume was used. Both are recorded with old/new values.\n\n```bash\n# Log a note without changing status\npython3 src/rm.py update 3 \"Had a phone screen, seemed positive\"\n\n# Log a note and change status\npython3 src/rm.py update 3 \"Got the rejection email\" --status rejected\npython3 src/rm.py update 7 \"No reply in 3 weeks\" --status ghosted\npython3 src/rm.py update 12 \"Turned out to be a recruiter farm\" --status scam\n\n# Update the resume variant (e.g. if you forgot to set it on add)\npython3 src/rm.py update 5 \"switched to geo resume\" --variant geo\n```\n\n**Valid statuses:**\n\n| Status | Meaning |\n|---|---|\n| `applied` | Submitted, waiting |\n| `interviewing` | Active process |\n| `offer` | Offer received |\n| `rejected` | Formal rejection |\n| `ghosted` | No response |\n| `dead` | Role pulled / company went quiet |\n| `scam` | Fake listing or bad-faith recruiter |\n\n---\n\n### `list` \u2014 view applications\n\n```\npython3 src/rm.py list [--status STATUS]\n```\n\nShows all applications sorted by date, newest first. Statuses are colour-coded. Salary and resume variant are shown where set; industry is stored but not displayed (query directly via SQLite). Pass `--status` to filter.\n\n```bash\npython3 src/rm.py list\npython3 src/rm.py list --status applied\npython3 src/rm.py list --status interviewing\n```\n\n---\n\n### `docs` \u2014 manage documents attached to an application\n\n```\npython3 src/rm.py docs add <app_id> <path> [--type TYPE] [--label LABEL]\npython3 src/rm.py docs list <app_id>\npython3 src/rm.py docs rm <doc_id>\n```\n\nAttach resumes, cover letters, portfolios, or any other files to an application record. Multiple documents per application are supported.\n\n| Subcommand | Description |\n|---|---|\n| `docs add <app_id> <path>` | Attach a file path to an application |\n| `docs list <app_id>` | List all documents for an application |\n| `docs rm <doc_id>` | Remove a document entry (does not delete the file) |\n\n`--type` accepts: `resume`, `cover_letter`, `portfolio`, `writing_sample`, `other` (default: `other`)\n\n`--label` is an optional free-text tag, useful for versioning or context (e.g. `\"resume_v2\"`, `\"tailored fintech\"`).\n\n```bash\n# Attach a tailored resume and a cover letter\npython3 src/rm.py docs add 5 ~/resumes/resume_fintech_v2.pdf --type resume --label \"tailored fintech\"\npython3 src/rm.py docs add 5 ~/cover_letters/acme_cover.pdf --type cover_letter\n\n# List all docs for application #5\npython3 src/rm.py docs list 5\n\n# Remove a document entry\npython3 src/rm.py docs rm 3\n```\n\n---\n\n### `activity` \u2014 job search time from personal tracker\n\n```\npython3 src/rm.py activity [--days N]\n```\n\nReads time blocks categorised as **Job Search** or **LinkedIn** from the personal tracker (`../dada_science/personal_tracker/personal.db`) and shows them grouped by day with totals. Defaults to the last 14 days.\n\n```bash\npython3 src/rm.py activity\npython3 src/rm.py activity --days 30\n```\n\nRequires the personal tracker app to have been run at least once so its database exists.\n\n---\n\n## Database\n\nTwo tables in `data/applications.db`:\n\n- **`job_applications`** \u2014 one row per application\n- **`application_log`** \u2014 append-only audit trail; every `update` call writes here\n- **`application_documents`** \u2014 file paths attached to applications (resume, cover letter, etc.)\n\nTo inspect directly:\n\n```bash\nsqlite3 data/applications.db \"SELECT * FROM job_applications ORDER BY date_applied DESC;\"\nsqlite3 data/applications.db \"SELECT * FROM application_log WHERE application_id = 3;\"\n```\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {},
          "files": [
            "resume_3si_jde.tex",
            "resume_ai_infra.tex",
            "resume_amazon_cde_ds.tex",
            "resume_boeing_inspector.tex",
            "resume_clark_nuber.tex",
            "resume_dclimate_cyclops.tex",
            "resume_ds_analyst.tex",
            "resume_finops.tex",
            "resume_kc_parks_pia.tex",
            "resume_kc_sw_ar.tex",
            "resume_pierce_county_rda.tex",
            "resume_remote_sensing_ds.tex",
            "resume_salesforce_pds.tex",
            "resume_shipt_ds_geo.tex",
            "resume_sno_isle.tex",
            "resume_terra_ai.tex",
            "resume_uw_bi_dev.tex"
          ]
        },
        "src": {
          "dirs": {
            "templates": {
              "dirs": {},
              "files": [
                "applications.html",
                "base.html",
                "log_fragment.html",
                "search.html",
                "uncovered.html"
              ]
            }
          },
          "files": [
            "app.py",
            "pipeline.py",
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
        "local": "images/alphabet_soup/eyeball.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/alphabet_soup/main/eyeball.png"
      },
      {
        "local": "images/alphabet_soup/letter_uniqueness.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/alphabet_soup/main/letter_uniqueness.png"
      },
      {
        "local": "images/alphabet_soup/solution_matrix.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/alphabet_soup/main/solution_matrix.png"
      },
      {
        "local": "images/alphabet_soup/solution_sankey.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/alphabet_soup/main/solution_sankey.png"
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
        "graph_data.yaml",
        "listener.py",
        "seed_graph.py"
      ]
    },
    "images": [
      {
        "local": "images/drawing/project_universe.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/drawing/function_listener/project_universe.png"
      }
    ],
    "local_base": "images/drawing/"
  },
  "trivia": {
    "name": "trivia",
    "description": "Dark-themed multiple-choice trivia game \u2014 pulls questions live from the Open Trivia Database API.",
    "tech": [
      "Python",
      "Flask",
      "HTML/CSS/JS"
    ],
    "github": "https://github.com/simonhansedasi/trivia",
    "branch": "main",
    "readme": "# trivia\n\nDark-themed multiple-choice trivia game \u2014 pulls questions live from the Open Trivia Database API.\n\n## What it does\n\nFetches random questions from opentdb.com with category and difficulty filters. Dark UI, readable in a car. Built as an alternative to using ChatGPT for road trip trivia.\n\n## Tech\n\nPython, Flask, HTML/CSS/JS\n\n## Run locally\n\n```bash\npython app.py   # http://localhost:5014\n```\n\n## Deploy\n\n```bash\n./deploy_do.sh  # rsync to DO, restarts trivia.service\n```\n\n## Live\n\nhttps://trivia.simonhansedasi.com\n",
    "tree": {
      "dirs": {
        "js": {
          "dirs": {},
          "files": [
            "fetch_question.js"
          ]
        },
        "static": {
          "dirs": {
            "js": {
              "dirs": {},
              "files": [
                "fetch_question.js"
              ]
            }
          },
          "files": []
        },
        "templates": {
          "dirs": {},
          "files": [
            "index.html"
          ]
        }
      },
      "files": [
        "Gemfile",
        "app.py",
        "deploy_do.sh",
        "index.html",
        "main.py",
        "nginx_trivia.conf",
        "trivia.py",
        "trivia.service"
      ]
    },
    "images": [],
    "local_base": "images/trivia/"
  },
  "wiki-index": {
    "name": "wiki-index",
    "description": "A lightweight static file browser. Point it at any folder, run one command, and get a browsable index you can host anywhere \u2014 GitHub Pages, an intranet server, or just open locally.",
    "tech": [],
    "github": "https://github.com/simonhansedasi/wiki-index",
    "branch": "main",
    "readme": "# Wiki-Index\n\nA lightweight static file browser. Point it at any folder, run one command, and get a browsable index you can host anywhere \u2014 GitHub Pages, an intranet server, or just open locally.\n\nNo database. No backend. Just a Python script and two HTML files.\n\n![Screenshot of File Index](img/index.png)\n\n## How It Works\n\n1. Run `indexer.py` against your target folder \u2014 it writes a `scripts/file_structure.js` file containing the directory tree.\n2. Open `index.html` in a browser (or serve it statically) to browse the tree.\n3. Click any file to open it in `viewer.html`, which renders Markdown, displays images, shows code with syntax highlighting, and embeds PDFs.\n\n## Installation\n\n```bash\ngit clone https://github.com/yourusername/wiki-index.git\ncd wiki-index\n```\n\nNo dependencies beyond Python 3 and a browser.\n\n## Usage\n\n```bash\npython3 indexer.py --root /path/to/your/folder\n```\n\nThen open `index.html` in a browser.\n\n**Options:**\n\n| Flag | Default | Description |\n|------|---------|-------------|\n| `--root` | `tree/` | Directory to scan |\n| `--output` | `scripts/file_structure.js` | Where to write the generated JS |\n| `--url-root` | `/` | URL prefix for file links (needed for hosted deployments) |\n\n**Example \u2014 hosting on GitHub Pages:**\n\n```bash\npython3 indexer.py --root docs/ --url-root /wiki-index/docs/\n```\n\nThen commit and push. The index updates whenever you re-run the script.\n\n**Example \u2014 local intranet:**\n\n```bash\npython3 indexer.py --root /mnt/shared/wiki --url-root /wiki/\ncd /mnt/shared/wiki\npython3 -m http.server 8080\n```\n\n## File types supported\n\n- **Markdown** \u2014 rendered with [marked.js](https://marked.js.org/)\n- **Text / code** \u2014 plain display (`.txt`, `.py`, `.js`, `.sh`, `.json`, `.yaml`, `.csv`, `.tex`, and more)\n- **Images** \u2014 inline display (`.jpg`, `.png`, `.gif`, `.svg`, `.webp`)\n- **PDF** \u2014 embedded viewer\n- **Everything else** \u2014 download link\n\n## Auto-reload (optional)\n\nRun `watcher.py` instead of `indexer.py` to get automatic index regeneration whenever files change. The browser reloads itself within 5 seconds.\n\n```bash\npip install watchdog\npython3 watcher.py --root /path/to/your/folder --url-root /\n```\n\n`watcher.py` accepts the same flags as `indexer.py`. It runs the indexer once on startup, then watches for changes and reruns it automatically.\n\nTo run as a background service on Linux:\n\n```bash\n# edit wiki-index.service to set your WorkingDirectory and --root path, then:\nsudo cp wiki-index.service /etc/systemd/system/\nsudo systemctl enable --now wiki-index\n```\n\n## Why\n\nShared drives and wiki folders are hard to navigate. This gives any folder a clean browsable face without requiring a CMS, a database, or a running server.\n",
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
        "viewer.html",
        "watcher.py",
        "wiki-index.service"
      ]
    },
    "images": [
      {
        "local": "images/wiki-index/img/index.png",
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
      "dirs": {
        "templates": {
          "dirs": {},
          "files": [
            "index.html"
          ]
        }
      },
      "files": [
        "app.py",
        "deploy_do.sh",
        "index.html",
        "nginx_timer.conf",
        "timer.service"
      ]
    },
    "images": [],
    "local_base": "images/timer/"
  },
  "ai_glue": {
    "name": "ai_glue",
    "description": "Drop-in AI observability and governance for OpenAI and Anthropic applications.",
    "tech": [
      "Python 3.7+",
      "Flask",
      "SQLite"
    ],
    "github": "https://github.com/simonhansedasi/ai_glue",
    "branch": "main",
    "readme": "# ai_glue\n\nDrop-in AI observability and governance for OpenAI and Anthropic applications.\n\n![ai_glue audit dashboard](docs/screenshot-audit.png)\n\n## What ai_glue gives you\n\n- Every AI call logged \u2014 provider, model, tokens, cost, latency, project, session\n- Spend visibility by project, team, and environment\n- PII detection with per-call flag review workflow\n- Hard governance rules \u2014 block unapproved models, enforce cost caps and rate limits\n- Multi-instance aggregation \u2014 dev, staging, and prod in one unified dashboard\n- Role-split views: engineering audit log, executive spend summary, per-instance breakdown\n- Add governance to existing apps with **one environment variable change** \u2014 no code rewrites\n\n## What ai_glue is not\n\nai_glue does not replace your AI stack. It has no opinion on prompts, agents, RAG pipelines, or orchestration. It sits between your applications and model providers to add governance, auditing, spend visibility, and policy enforcement. Think of it as a transparent proxy with a dashboard \u2014 not a framework.\n\n## Deployment models\n\n**Evaluating / self-hosted** \u2014 you are both the operator and the user. Clone it, add your own API key to `.env`, run it on your machine. The quickstart below covers this case.\n\n**Team deployment** \u2014 IT deploys one ai_glue instance on a shared server with the organization's API key in `.env`. Individual developers never touch an API key. They change one environment variable on their machine and everything is logged, governed, and visible on the shared dashboard.\n\n```\n                       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\ndev laptop             \u2502  ai_glue server                      \u2502\nANTHROPIC_BASE_URL \u2500\u2500\u2500\u25ba\u2502  .env: ANTHROPIC_API_KEY=sk-org-...  \u2502\u2500\u2500\u25ba Anthropic API\n                       \u2502  dashboard: http://ai-glue.internal  \u2502\n                       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n```\n\n## Quickstart (local / evaluation)\n\n```bash\ngit clone https://github.com/simonhansedasi/ai_glue.git\ncd ai_glue\npip install -r requirements.txt\ncp .env.example .env              # add your API keys\ncp governance.yaml.example governance.yaml\npython examples/governance_demo.py   # no API keys needed\npython app.py                     # http://localhost:5010\n```\n\n## Two integration modes\n\n### Mode 1 \u2014 Proxy (zero code changes)\n\nPoint existing apps at ai_glue instead of the real provider. One environment variable per app:\n\n```bash\n# Anthropic\nANTHROPIC_BASE_URL=http://your-host:5010/proxy/anthropic\n\n# OpenAI\nOPENAI_BASE_URL=http://your-host:5010/proxy/openai/v1\n```\n\nEvery call is intercepted, logged, and governance-checked. The app receives the real response unchanged. Streaming is fully supported \u2014 the proxy passes the stream through and captures token counts and latency at the end.\n\nTag calls with optional headers for project and session labeling:\n```\nX-Aiglue-Project: hr-bot\nX-Aiglue-Session: user-123\n```\n\nIf no headers are present, calls fall back to `AIGLUE_DEFAULT_PROJECT` / `AIGLUE_DEFAULT_SESSION` from `.env`.\n\n### Mode 2 \u2014 Wrapper (new apps or when you control the code)\n\n```python\nfrom src import GluedClient\n\n# Anthropic \u2014 same API as anthropic.Anthropic()\nclient = GluedClient(\"anthropic\", session_id=\"user-123\", project=\"hr-bot\")\nresponse = client.messages.create(\n    model=\"claude-sonnet-4-6\",\n    max_tokens=512,\n    messages=[{\"role\": \"user\", \"content\": \"...\"}],\n)\n\n# OpenAI \u2014 same API as openai.OpenAI()\nclient = GluedClient(\"openai\", session_id=\"user-123\", project=\"support-bot\")\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    max_tokens=512,\n    messages=[{\"role\": \"user\", \"content\": \"...\"}],\n)\n```\n\n## Governance\n\nEdit `governance.yaml` to configure rules. Changes apply immediately \u2014 no restart needed.\n\n```yaml\nmodel_allowlist:          # hard-block calls to unapproved models (403)\n  - claude-sonnet-4-6\n  - gpt-4o\n\npii_detection: true       # flag prompts containing emails, SSNs, phones, credit cards\n\npii_allowlist:            # exact strings that should never trigger a PII flag\n  - admin@yourcompany.com\n\nprojects:\n  hr-bot:\n    daily_cost_cap_usd: 5.00     # hard-block once daily spend hits cap\n    rate_limit_per_hour: 100     # hard-block sessions that exceed call frequency\n```\n\nPII detection is regex-based (not ML). Hard-blocking violations are never logged \u2014 the call was never made. PII flags are logged as warnings and do not block calls.\n\n**Security note**: `governance.yaml` becomes a sensitive file if you use the team API key mapping feature (see below), since it maps key prefixes to real project names. Treat it like `.env` in production \u2014 restrict filesystem permissions and do not commit it. `governance.yaml` is gitignored by default for this reason.\n\n## Dashboard\n\nAll three views draw from the same unified dataset merged across all instances.\n\n### `/` \u2014 Audit (engineers / team leads)\n\nFull call log. Every call from every instance in one table. Summary cards, daily charts, and by-project/by-model breakdowns are all merged across instances. Per-session drilldown shows individual turns, tool calls, and highlights flagged PII inline. Filters: `?project=X`, `?session=X`, `?flagged=1`.\n\n### `/executive` \u2014 Executive view (leadership)\n\nNon-technical. No session IDs, no model names. Cards: Total AI Spend, Projects Active, Conversations, Risk Flags. Charts: Spend by Project, Daily Spend trend. Unreviewed PII flags and governance blocks surface as a risk callout with a \"Mark all reviewed\" action.\n\n![ai_glue executive view](docs/screenshot-executive.png)\n\n### `/aggregate` \u2014 Per-instance breakdown\n\nOne panel per instance with its individual summary, by-project table, and by-model table. Useful for comparing dev vs. staging vs. prod activity side by side.\n\n![ai_glue aggregate view](docs/screenshot-aggregate.png)\n\n## Multi-instance aggregation\n\nRun one ai_glue instance per environment. A parent instance pulls `/api/summary` from each child and merges everything into a single unified view.\n\n```\nDev instance    \u2500\u2500\u2510\nStaging instance \u2500\u253c\u2500\u2500\u25ba Parent instance \u2500\u2500\u25ba unified /, /executive, /aggregate\nProd instance   \u2500\u2500\u2518\n```\n\nTo add a child \u2014 edit `governance.yaml` on the parent only, no code changes:\n\n```yaml\naggregator:\n  children:\n    - name: prod\n      url: http://prod-host:5010\n    - name: staging\n      url: http://staging-host:5010\n```\n\nSet `AIGLUE_INSTANCE_NAME` on each child so it appears with a meaningful label in parent views.\n\n## Per-team API key mapping\n\nIssue each team a synthetic key with a recognizable prefix. Teams swap their real provider key for it \u2014 no other changes needed. The proxy detects the prefix, tags all calls with the team's project name, and substitutes the real API key before forwarding. This enables centralized billing, per-team spend attribution, and chargeback models without distributing raw provider keys.\n\n```yaml\nteams:\n  sk-aiglue-eng:\n    name: engineering\n  sk-aiglue-marketing:\n    name: marketing\n```\n\nAdd spend caps or rate limits per team by adding the team name to `projects:` in `governance.yaml`.\n\n## What gets logged\n\n| Field | Description |\n|---|---|\n| ts | UTC timestamp |\n| provider | anthropic / openai |\n| model | exact model string |\n| session_id | caller-supplied, auto-detected, or default |\n| project | caller-supplied, auto-detected, or default |\n| input_tokens | from API response |\n| output_tokens | from API response |\n| cost_usd | estimated from token counts |\n| latency_ms | wall time |\n| prompt_hash | MD5 of prompt |\n| raw_prompt | full text (if AIGLUE_LOG_RAW=true) |\n| raw_response | full text (if AIGLUE_LOG_RAW=true) |\n| gov_flags | JSON array of warning strings |\n| error | exception message if call failed |\n| reviewed_at | timestamp when flags were acknowledged |\n\nSet `AIGLUE_LOG_RAW=false` in `.env` to store only the hash when prompt content is sensitive. Restrict filesystem permissions on `audit.db` in production \u2014 it contains call metadata and optionally raw prompts.\n\n## Training data export\n\nai_glue logs every prompt and response, which means your audit database doubles as a conversation dataset. The `/export/training` endpoint turns logged conversations into JSONL you can use for fine-tuning, content mining, or building provider-independent capability baselines.\n\nThis is particularly useful when a model you depend on is deprecated or sunsetted \u2014 if your conversations were logged through ai_glue, you have the raw material to fine-tune a replacement rather than starting from scratch.\n\n### Export a single conversation\n\nOn any session page (`/session/<id>`), click **Export JSONL** to download that conversation as a single-session JSONL record.\n\nVia URL directly:\n```\n/export/training?format=session&session=<session_id>\n```\n\n### Export all conversations for a project\n\nOn any project page (`/project/<name>`), click **Export all conversations** to download every session for that project.\n\nVia URL:\n```\n/export/training?format=session&project=<project_name>\n```\n\n### Output formats\n\n**`format=session`** \u2014 one JSONL line per full conversation, with alternating user/assistant turns. Compatible with most fine-tuning pipelines.\n\n```json\n{\n  \"session_id\": \"conv-a3f9b2\",\n  \"project\": \"support-bot\",\n  \"model\": \"claude-sonnet-4-6\",\n  \"messages\": [\n    {\"role\": \"user\", \"content\": \"How do I reset my password?\"},\n    {\"role\": \"assistant\", \"content\": \"You can reset your password by...\"},\n    {\"role\": \"user\", \"content\": \"I don't see that option.\"},\n    {\"role\": \"assistant\", \"content\": \"Try navigating to...\"}\n  ]\n}\n```\n\n**`format=turn`** (default) \u2014 one JSONL line per API call, as isolated prompt/completion pairs. Useful for token-level analysis or simpler fine-tuning setups.\n\n```json\n{\"prompt\": \"How do I reset my password?\", \"completion\": \"You can reset your password by...\", \"model\": \"claude-sonnet-4-6\", \"session_id\": \"conv-a3f9b2\", \"project\": \"support-bot\", \"ts\": \"2026-05-15 10:00:00\"}\n```\n\n### Filters\n\nAll filters can be combined:\n\n| Param | Example | Effect |\n|---|---|---|\n| `project` | `?project=hr-bot` | Only conversations from this project |\n| `session` | `?session=conv-abc` | Only this session |\n| `model` | `?model=gpt-4o` | Only calls made to this model |\n| `since` | `?since=2026-01-01` | Only calls on or after this date |\n| `exclude_flagged` | `?exclude_flagged=true` | Drop calls with PII or governance flags |\n\n### Notes\n\n- Calls are only exportable if `AIGLUE_LOG_RAW=true` (the default). Rows logged with `AIGLUE_LOG_RAW=false` are excluded from training exports.\n- The export queries the local instance's database only. Cross-instance export requires fetching from each child directly.\n- The user message for each turn is extracted from the end of the stored prompt string \u2014 the format is stable for standard single-user, single-assistant conversations.\n\n## Tests\n\n```bash\npytest tests/ -v \n```\n\n27 tests. No API keys required. All LLM calls are mocked.\n\n## Stack\n\n- Python 3.7+, Flask, SQLite\n- Chart.js (CDN, no build step)\n- Anthropic SDK, OpenAI SDK\n\n## Environment variables\n\n| Variable | Default | Description |\n|---|---|---|\n| ANTHROPIC_API_KEY | \u2014 | API key used by the server to forward calls. In team deployments, only the server's `.env` needs this \u2014 individual developers do not. |\n| OPENAI_API_KEY | \u2014 | Same as above for OpenAI. |\n| AIGLUE_DB | audit.db | Path to SQLite audit database |\n| AIGLUE_LOG_RAW | true | Store full prompt/response text |\n| AIGLUE_DEFAULT_PROJECT | proxy | Project label for untagged proxy calls |\n| AIGLUE_DEFAULT_SESSION | proxy | Session label for untagged proxy calls |\n| AIGLUE_INSTANCE_NAME | (AIGLUE_DEFAULT_PROJECT) | Label shown in parent aggregator views |\n\n## License\n\nMIT\n",
    "tree": {
      "dirs": {
        "examples": {
          "dirs": {},
          "files": [
            "anthropic_example.py",
            "governance_demo.py",
            "openai_example.py",
            "proxy_example.py"
          ]
        },
        "routes": {
          "dirs": {},
          "files": [
            "__init__.py",
            "dashboard.py",
            "proxy.py"
          ]
        },
        "src": {
          "dirs": {},
          "files": [
            "__init__.py",
            "costs.py",
            "governance.py",
            "logger.py",
            "proxy.py",
            "store.py"
          ]
        },
        "static": {
          "dirs": {},
          "files": [
            "style.css"
          ]
        },
        "templates": {
          "dirs": {},
          "files": [
            "aggregate.html",
            "base.html",
            "executive.html",
            "index.html",
            "project.html",
            "session.html"
          ]
        },
        "tests": {
          "dirs": {},
          "files": [
            "test_proxy.py",
            "test_proxy_routes.py"
          ]
        }
      },
      "files": [
        "LICENSE",
        "app.py",
        "audit_log.csv",
        "governance.yaml",
        "governance.yaml.example",
        "training_turn.jsonl"
      ]
    },
    "images": [],
    "local_base": "images/ai_glue/"
  },
  "bleepulator": {
    "name": "bleepulator",
    "description": "FM-synthesized droid beeps for your Linux desktop. Replaces system notification",
    "tech": [],
    "github": "https://github.com/simonhansedasi/bleepulator",
    "branch": "master",
    "readme": "# Bleepulator\n\nFM-synthesized droid beeps for your Linux desktop. Replaces system notification\nsounds with a set of electronic chirps and warbles \u2014 no sampled audio, no\ncopyright issues, survives system updates.\n\n## Install\n\n### Ubuntu / Debian (recommended)\n\nDouble-click `bleepulator_1.0.1_all.deb`.\n\nOr from the terminal:\n\n```\nsudo dpkg -i bleepulator_1.0.1_all.deb\n```\n\nLog out and back in. Done.\n\n### Other distros (manual)\n\n```\ntar xzf bleepulator-1.0.1.tar.gz\nbash bleepulator-1.0.1/install.sh\n```\n\nLog out and back in for the login sound to take effect. All other sounds are\nactive immediately.\n\n## Preview\n\n```\ncanberra-gtk-play --id=\"dialog-error\"\ncanberra-gtk-play --id=\"desktop-login\"\n```\n\n## Sounds\n\n| Event | Character |\n|---|---|\n| bell | short upward zap |\n| dialog-error | sad two-part descending warble |\n| dialog-warning | three rapid staccato beeps |\n| dialog-information | cheerful ascending chirp |\n| message-new-instant | excited double chirp |\n| audio-volume-change | brief rising sweep |\n| battery-low | slow mournful wail |\n| window-attention-active | four rapid ascending pings |\n| complete | triumphant arpeggio |\n| trash-empty | short downward bloop |\n| desktop-login | full startup sequence |\n| desktop-logout | winding-down sequence |\n| window-close / minimize / maximize | short blips |\n\n## Uninstall\n\n**If installed via .deb:**\n\n```\nsudo apt remove bleepulator\ngsettings reset org.gnome.desktop.sound theme-name\n```\n\n**If installed manually:**\n\n```\nrm -rf ~/.local/share/sounds/bleepulator\nrm -rf ~/.local/share/sounds/Yaru\nrm -f  ~/.config/autostart/libcanberra-login-sound.desktop\ngsettings reset org.gnome.desktop.sound theme-name\ngsettings reset org.gnome.desktop.sound event-sounds\n```\n",
    "tree": {
      "dirs": {
        "src": {
          "dirs": {
            "editor": {
              "dirs": {},
              "files": [
                "app.py"
              ]
            }
          },
          "files": [
            "build_dist.sh",
            "generate_sounds.py",
            "index.theme",
            "install.sh"
          ]
        }
      },
      "files": [
        "bleepulator_1.0.1_all.deb"
      ]
    },
    "images": [],
    "local_base": "images/bleepulator/"
  },
  "datacenter_siting": {
    "name": "datacenter_siting",
    "description": "Geospatial siting analysis quantifying data center land suitability across US states using",
    "tech": [],
    "github": "https://github.com/simonhansedasi/wa-datacenter-suitability",
    "branch": "main",
    "readme": "# Data Center Siting Suitability\n\nGeospatial siting analysis quantifying data center land suitability across US states using\nten publicly available indicator layers and two hard buildability gates.\nLive at [datacenters.simonhansedasi.com](https://datacenters.simonhansedasi.com).\n\n## The argument\n\nWashington's existing data center corridor (Quincy / East Wenatchee) is optimized for\none dimension \u2014 grid access \u2014 at the expense of water availability and community burden.\nThe Columbia Basin's water allocation is essentially fully subscribed; Grant County's own\nadministrator has stated that water and power are \"maxed out.\" Meanwhile, 25 data center\nprojects were canceled nationally in 2025 due to community opposition, up from 6 in 2024.\nThis tool makes those tradeoffs visible and quantifiable.\n\n## Quick start\n\n```bash\nconda env create -f environment.yml\nconda activate GrapeExpectations\n\n# State-wide atlas (fishnet grid)\npython scripts/run_pipeline.py WA\n\n# ZCTA study (ZIP Code resolution \u2014 for jurisdiction-scale studies)\npython zcta/run_zcta_study.py WA\n```\n\nSee [PIPELINE_GUIDE.md](PIPELINE_GUIDE.md) for full setup, step descriptions, and troubleshooting.\n\n## Product tiers\n\n| Tier | Geography | URL pattern | Use case |\n|---|---|---|---|\n| State atlas | 0.15 degree fishnet (~14 km) | `/wa/` | Public map, press, Steward briefings |\n| ZCTA study | ZIP Code Tabulation Areas | `/wa/study/` | Jurisdiction studies -- demographic data native to ZCTA |\n| City case study | Filtered ZCTA subset | `/wa/study/seattle/` | City-scoped report with policy context |\n| Parcel dossier | Individual land parcels | `/wa/study/grant/` | Site-specific leads for developers |\n\nThe fishnet atlas and ZCTA study use identical indicator definitions. The ZCTA advantage is\nmethodological: EJ burden and population exposure are native Census ZCTA data, so no spatial\njoin approximation is needed to assign tract-level demographics to grid cells.\n\n## Indicators\n\n| # | Score | Source | Type |\n|---|---|---|---|\n| 1 | tx_score | OSM HV transmission lines | Suitability |\n| 2 | water_score | Open-Meteo ERA5 30-yr precip | Suitability |\n| 3 | ej_score | Census ACS poverty + minority rate | Suitability |\n| 4 | seismic_score | USGS ASCE 7-22 PGA | Risk |\n| 5 | flood_score | FEMA NFHL flood zones | Risk |\n| 6 | contamination_score | EPA TRI facility proximity | Environmental |\n| 7 | waterway_score | OSM major rivers | Environmental |\n| 8 | geothermal_score | IHFC GHFDB 2024 heat flow | Opportunity |\n| 9 | flatness_score | SRTM1 terrain flatness | Hard gate |\n| 10 | protected_score | Esri Federal Lands + TIGER tribal | Hard gate |\n\nHard gates 9 and 10 are binary exclusions applied regardless of slider weights.\nAll other scores are normalized 0-1 (1 = most favorable).\n\n## Analysis grid (Washington State baseline)\n\n**Fishnet atlas:** 974 cells, 0.15-degree (~14 km), clipped to WA boundary.\nTwo hard gates remove 124 cells (12.7%), leaving 850 viable candidates.\n\n**ZCTA study:** 575 ZCTAs; median 94 km\u00b2 (0.3\u00d7 fishnet cell).\nUrban western WA has ZCTAs as small as 2 km\u00b2; eastern WA corridor ZCTAs are ~250-800 km\u00b2.\n\nKey findings (WA fishnet):\n- Quincy corridor: tx=0.988, water=0.189 \u2014 grid-optimal, water-constrained\n- Digital Realty proposed (Cascade foothills): composite=0.783 vs Quincy=0.599\n- Tri-Cities emerging cluster (Wallula Gap, Atlas Agro, Trammell Crow): water=0.000\n- Tukwila/HorizonIQ: water=0.739 but ej=0.109 \u2014 worst community burden of any cluster\n\n## Script pipeline\n\n`scripts/` runs any US state end-to-end. All 50 states defined in `scripts/config.py`.\n\n```bash\npython scripts/run_pipeline.py WA              # full run\npython scripts/run_pipeline.py OR --start 03   # resume from step 03\npython scripts/run_pipeline.py TX --only 06 07 # terrain + protected only\n```\n\n| Script | Outputs |\n|---|---|\n| 01_basemap.py | state.geojson, datacenters.geojson, transmission.geojson |\n| 02_indicators.py | Fishnet grid; tx_score, water_score, ej_score, pop_exposure_score |\n| 03_risk.py | seismic_score, flood_score |\n| 04_environment.py | contamination_score (EPA TRI), waterway_score (OSM rivers) |\n| 05_geothermal.py | geothermal_score (IHFC GHFDB 2024, bbox-filtered) |\n| 06_terrain.py | flatness_score (SRTM1, hard gate at 3% flat area) |\n| 07_protected.py | protected_score (Esri Federal Lands + TIGER tribal, gate at 25%) |\n\nOutput: `data/{STATE}/grid_scores.geojson`\n\n## ZCTA study pipeline\n\n`zcta/` runs a ZIP Code Tabulation Area resolution study for any state.\nSteps 03-07 from the main pipeline are reused via `DC_SUBDIR=zcta` env var.\n\n```bash\npython zcta/run_zcta_study.py WA\npython zcta/run_zcta_study.py WA --start 03   # resume after step 02\n```\n\n| Script | Role |\n|---|---|\n| zcta/02_zcta_indicators.py | ZCTA boundaries (Census 2020); tx_score, water_score, ej_score, pop_exposure_score |\n| scripts/03-07 | Reused unchanged \u2014 geometry-agnostic |\n\nOutput: `data/{STATE}/zcta/grid_scores.geojson`\n\nZCTA boundary source: Census 2020 500k cartographic boundaries.\nNo 2022/2023/2024 ZCTA boundary files exist \u2014 2020 is the current standard.\n\n## City case studies\n\nCity-scoped studies filter a state's ZCTA data to a defined set of ZIPs and add\npolicy/seismic context. Add a new city by adding an entry to `REGIONS` in `src/app.py`.\n\n**Seattle (WA)** \u2014 live at `/wa/study/seattle/`:\n- 29 city-limits ZCTAs, 0 hard-gated\n- Key within-city differentiators: EJ burden (spread 0.63), terrain flatness (spread 0.76)\n- Near-uniform within city: water availability (spread 0.01), seismic (spread 0.02)\n- Policy context: Seattle moratorium on new data centers >20 MW (April 2026)\n\n## Parcel dossiers\n\nParcel-level scoring fetches assessor data from county ArcGIS Open Data portals and\njoins it with ZCTA-level scores. Parcels inherit the ZCTA flatness and protection gates\nvia centroid spatial join. Scored on four dimensions: zcta_score, tx_score, acreage_score, vacant_score.\n\nScripts live in `parcels/`. Output: `data/{STATE}/parcels/`.\n\n**Grant County (WA)** \u2014 live at `/wa/study/grant/`:\n- 16,054 viable parcels (>=5 ac, non-residential, non-exempt)\n- Key finding: ZCTA 99135 (Wilbur/Almira, composite 0.695) scores above Quincy 98848\n  (0.567) due to lower community burden from existing DC saturation\n- DOR breakdown: 83 Ag Current Use (8,370), 91 Undeveloped (3,088), 81 Agriculture (876)\n\n**Tri-Cities (WA)** \u2014 live at `/wa/study/tri/` (Benton + Franklin counties):\n- 9,848 viable parcels (>=5 ac, non-residential); data from WA State Current_Parcels service\n- Water score = 0.000 across all ZCTAs \u2014 Columbia River junior rights fully subscribed\n- Transmission access among best in WA: BPA McNary-Ashe 500kV corridor, all ZCTAs tx > 0.86\n- Top parcels: large agricultural blocks (480-680 ac, DOR 83) in Kennewick/Pasco plain\n- Hanford Nuclear Reservation absent from dataset (DOE land not in county assessor rolls)\n- DOR breakdown: 83 Ag Current Use (6,259), 81 Agriculture (1,512), 91 Undeveloped (1,005)\n\n## Notebooks\n\n`notebooks/` contains the original exploratory notebooks for Washington State.\nThey share the same logic as the scripts but are cell-by-cell and WA-specific.\n\n## Setup notes\n\n- No GDAL required. Terrain uses `requests` + `numpy` to parse SRTM1 HGT binaries.\n- Census API key required for step 02 (free at census.gov/developers).\n  Set `CENSUS_API_KEY` in `~/.env` or as an environment variable.\n- IHFC 2024 shapefile required for step 05. Place at `data/raw/IHFC_2024_GHFDB.shp`.\n  Step 05 completes without it but sets geothermal_score = 0.5 (neutral).\n\n## Data sources\n\nAll publicly available, no proprietary data.\n\n| Source | Used for |\n|---|---|\n| Census TIGER 2022 | State boundaries, census tracts |\n| Census ZCTA 2020 cartographic boundaries | ZCTA study tier |\n| OSM Overpass API | Data centers, HV transmission, rivers |\n| EIA Form 860 (2023) | Power plant locations |\n| Census ACS 5-yr 2022 | Demographic burden (poverty + minority rate) |\n| Open-Meteo ERA5 archive | 30-yr mean annual precipitation |\n| USGS ASCE 7-22 API | Seismic hazard (PGA) |\n| FEMA NFHL REST API | Special Flood Hazard Areas |\n| EPA Envirofacts REST API (TRI_FACILITY) | Industrial facility proximity |\n| IHFC GHFDB 2024 | Geothermal heat flow boreholes |\n| NASA SRTM1 (AWS S3) | 30m digital elevation model |\n| Esri USA Federal Lands | NPS, USFWS, DoD, Forest Service boundaries |\n| Census TIGER AIANNH | Tribal land boundaries |\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {
            "WA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "raw": {
              "dirs": {},
              "files": [
                "IHFC_2024_GHFDB.cpg",
                "IHFC_2024_GHFDB.dbf",
                "IHFC_2024_GHFDB.prj",
                "IHFC_2024_GHFDB.qmd",
                "IHFC_2024_GHFDB.shp",
                "IHFC_2024_GHFDB.shx",
                "acs_demog_wa.csv",
                "datacenters.geojson",
                "eia860_plants_wa.geojson",
                "ghfdb_2024.rar",
                "transmission_wa.geojson",
                "wa_dem_utm.tif",
                "wa_federal_lands.geojson",
                "wa_heatflow.csv",
                "wa_precip_coarse.csv",
                "wa_seismic_sample.csv",
                "wa_sfha.geojson",
                "wa_srtm3.tif",
                "wa_state.geojson",
                "wa_tracts.geojson",
                "wa_tribal_tiger.geojson"
              ]
            }
          },
          "files": []
        },
        "parcels": {
          "dirs": {},
          "files": [
            "_quincy_check.py",
            "grant_county.py",
            "tri_cities.py"
          ]
        },
        "scripts": {
          "dirs": {
            "zcta": {
              "dirs": {},
              "files": [
                "02_zcta_indicators.py",
                "run_zcta_study.py"
              ]
            }
          },
          "files": [
            "01_basemap.py",
            "02_indicators.py",
            "03_risk.py",
            "04_environment.py",
            "05_geothermal.py",
            "06_terrain.py",
            "07_protected.py",
            "08_aquifer.py",
            "09_soil.py",
            "10_soilprofile.py",
            "config.py",
            "run_pipeline.py"
          ]
        },
        "src": {
          "dirs": {},
          "files": [
            "app.py"
          ]
        },
        "templates": {
          "dirs": {},
          "files": [
            "case_study.html",
            "index.html",
            "parcel_study.html",
            "study.html",
            "survey.html"
          ]
        }
      },
      "files": [
        "datacenter_siting.service",
        "deploy_do.sh",
        "deploy_hetzner.sh",
        "environment.yml",
        "manage_survey.py",
        "nginx.conf",
        "setup_env.sh"
      ]
    },
    "images": [
      {
        "local": "images/datacenter_siting/static/img/terrain_flatness.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/wa-datacenter-suitability/main/static/img/terrain_flatness.png"
      },
      {
        "local": "images/datacenter_siting/static/img/risk_layers.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/wa-datacenter-suitability/main/static/img/risk_layers.png"
      },
      {
        "local": "images/datacenter_siting/static/img/risk_adjusted_validation.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/wa-datacenter-suitability/main/static/img/risk_adjusted_validation.png"
      },
      {
        "local": "images/datacenter_siting/static/img/protected_land.png",
        "remote": "https://raw.githubusercontent.com/simonhansedasi/wa-datacenter-suitability/main/static/img/protected_land.png"
      }
    ],
    "local_base": "images/datacenter_siting/"
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
  },
  "merascope": {
    "name": "merascope",
    "description": "National data center site suitability intelligence and permitting coordination platform.",
    "tech": [],
    "github": "https://github.com/simonhansedasi/merascope",
    "branch": "master",
    "readme": "# Merascope\n\nNational data center site suitability intelligence and permitting coordination platform.\nGIS-MCDA across 0.15-degree fishnet cells, 16 scored indicators, raw physical values\nincluded in every output for multi-scale renormalization.\n\nBuilt for three audiences:\n- **Builders** (developers evaluating sites) \u2014 Explorer map, workspace, portfolio screening\n- **Stewards** (lead regulatory agencies) \u2014 docket, case file, conditions negotiation, co-party coordination, evidentiary record export\n- **Co-parties** (invited agencies: tribes, counties, utilities, AG) \u2014 filtered docket, propose conditions, transparency into lead's review\n\nSame Score Promise: methodology is public and identical for all users. No party receives a different number.\n\n## Quick start\n\n```bash\n# Use the GrapeExpectations conda env (Python 3.7, geopandas 0.10.x)\nPYTHON=/home/simonhans/anaconda3/envs/GrapeExpectations/bin/python3\n\n# Run a single state end-to-end\n$PYTHON -u scripts/run_pipeline.py WA\n\n# Or run steps individually\n$PYTHON -u scripts/01_basemap.py WA\n$PYTHON -u scripts/02_indicators.py WA\n# ... through 10_soilprofile.py\n```\n\nSee [PIPELINE_GUIDE.md](PIPELINE_GUIDE.md) for full setup, step descriptions, and troubleshooting.\n\n## Indicators\n\n| # | Score | Source | Step |\n|---|---|---|---|\n| 1 | tx_score | OSM HV transmission lines (>=100kV) + EIA Form 860 plants | 02 |\n| 2 | water_score | PRISM 4km 30-yr annual precip normals (1991-2020) | 02 |\n| 3 | ej_score | Census ACS poverty + minority rate (EJScreen method) | 02 |\n| 4 | pop_exposure_score | Census ACS population density (1 = sparsest) | 02 |\n| 5 | seismic_score | USGS ASCE 7-22 PGA (1 = lowest hazard) | 03 |\n| 6 | flood_score | FEMA NFHL SFHA zones (binary: 1 = outside flood zone) | 03 |\n| 7 | contamination_score | EPA TRI facility proximity (1 = farthest) | 04 |\n| 8 | waterway_score | OSM major rivers proximity (1 = farthest) | 04 |\n| 9 | geothermal_score | IHFC GHFDB 2024 heat flow (1 = highest) | 05 |\n| 10 | flatness_score | SRTM1 flat fraction **[hard gate: <3% flat = 0]** | 06 |\n| 11 | slope_score | SRTM1 flat fraction continuous (no gate) | 06 |\n| 12 | protected_score | Esri Federal Lands + TIGER tribal **[hard gate: >25% = 0]** | 07 |\n| 13 | aquifer_score | USGS NWIS depth-to-water-table (1 = deepest) | 08 |\n| 14 | soil_score | SSURGO hydrologic group A-D (1 = tightest/lowest infiltration) | 09 |\n| 15 | soil_profile_score | SSURGO horizon composite: CaCO3 + ksat + clay | 10 |\n| 16 | ksat_score | SSURGO saturated hydraulic conductivity (1 = least permeable) | 10 |\n\nHard gates: only two remain.\n- **protected_score**: protected_frac > 0.25 sets score to 0; cell grayed on map\n- **flood_score**: flood_score = 0 blocks portfolio PASS\n\nTerrain (flatness_score, slope_score) is a scoring penalty, not a hard gate.\nAll scores normalized 0-1 within state (1 = most favorable for siting).\n\n### Raw columns\n\nEvery output GeoJSON also carries raw physical-value columns for multi-scale\nrenormalization without re-running the pipeline:\n\n| Column | Units | Added by |\n|---|---|---|\n| tx_dist_m | m to nearest HV line | step 02 |\n| ann_precip_mm | mm/yr (PRISM 30-yr normal) | step 02 |\n| pop_density | persons/km2 | step 02 |\n| seismic_pga_g | PGA (g) | step 03 |\n| tri_dist_m | m to nearest TRI facility | step 04 |\n| river_dist_m | m to nearest major river | step 04 |\n| heatflow_mwm2 | mW/m2 | step 05 |\n| flat_frac | fraction of cell pixels with slope < 5 deg | step 06 |\n| slope_mean_deg | mean slope in degrees | step 06 |\n| protected_frac | fraction of cell covered by protected land | step 07 |\n| aquifer_depth_ft | ft to water table (IDW from USGS wells) | step 08 |\n| ksat_mean_ums | \u00b5m/s saturated hydraulic conductivity | step 10 |\n\n## States completed\n\nAll 48 contiguous states complete (AK/HI excluded).\n\n| Schema | States | Raws |\n|---|---|---|\n| 10-raw (early) | WA OR TX CA NV UT ID MT AZ | no flat_frac/slope_mean_deg |\n| 12-raw (full) | CO WY NM ND SD NE KS OK MN IA MO AR LA MI WI IL IN KY TN MS GA OH AL FL SC NC VA WV PA NY NJ CT RI MA VT NH ME DE MD | full set |\n\nRetrofit early states with: `python scripts/patch_raws.py WA OR TX CA NV UT ID MT AZ`\n\n## Product surfaces\n\n### Builder surface (`#/builder`)\nWorkspace tab (saved cells, comparison panel), Status tab (CRM tracker per site: contacts/events/notes/pipeline), Portfolio screening (CSV upload of lat/lons, scored results with gate check). Builder can look up their case ID under \"My Application\" to see read-only case file with full transparency into conditions being negotiated.\n\n### Steward surface (`#/steward`)\nKanban docket across all stages. Case file: versioned findings, conditions negotiation (propose/accept/reject), co-party coordination, rebuttal clock, document chain, CSV exports. Impasse register (route to mediation). Mandated studies workbench (section checklists, live progress).\n\n### Co-party surface (`#/co-party`)\nFiltered docket \u2014 only shows cases where the agency is invited. Same case file as steward, propose-only permissions. Co-party conditions show as \"Pending lead approval\" until lead approves.\n\n### Agency directory\n95 pre-registered WA state agencies (39 counties, 31 tribes, 12 utilities, 8 state agencies, 5 federal) in `AGENCY_DIRECTORY` (`data.js`). Lead agency invites from searchable directory modal with type filters. Email fallback for unregistered agencies.\n\n### Multi-party permission model\n| Action | Lead (steward) | Co-party | Builder |\n|---|---|---|---|\n| See findings + conditions | yes | yes | yes |\n| Propose condition | yes | yes (pending lead approval) | no |\n| Approve/reject condition | yes | no | no |\n| Invite co-parties | yes | no | no |\n| Change stage | yes | no | no |\n| Export CSV | yes | yes | no |\n| File rebuttal | no | no | yes (Rebuttal Cycle stage only) |\n\n## Multi-scale architecture\n\nThree normalization windows are planned:\n\n1. **National** \u2014 one-time post-processing pass after all states complete; re-ranks every\n   cell using raw values against the national distribution.\n2. **State** \u2014 current output (0-1, within-state). Default view.\n3. **County / ZCTA / parcel** \u2014 dynamic re-ranking in the frontend using raw values; no\n   new pipeline work needed. Raw columns in every GeoJSON enable arbitrary re-normalization.\n\n## Frontend\n\nReact + Leaflet, served statically. Add a completed state to `merascope/map.jsx`:\n\n```js\nconst GRID_URLS = [\n  // existing states ...\n  'data/WY/grid_scores.geojson',  // add new state here\n];\n```\n\nDev server: `cd ~/coding/merascope && python3 server.py` (Flask, port 8877 \u2014 NOT python3 -m http.server; Flask provides /api/log and /api/export/* routes)\n\n## Repo structure\n\n```\nmerascope/\n  index.html              \u2014 React frontend entry point (Tom)\n  merascope/              \u2014 JSX, CSS, JS components\n  scripts/                \u2014 10-step pipeline + patch scripts\n    config.py             \u2014 State bboxes, FIPS, UTM zones for all 50 states\n    run_pipeline.py       \u2014 Orchestrator (calls steps 01-10 in sequence)\n    01_basemap.py         \u2014 State boundary, data centers, transmission, EIA plants\n    02_indicators.py      \u2014 Fishnet grid + tx, water, ej, pop_exposure scores\n    03_risk.py            \u2014 seismic, flood scores\n    04_environment.py     \u2014 contamination, waterway scores\n    05_geothermal.py      \u2014 geothermal score (IHFC heat flow)\n    06_terrain.py         \u2014 flatness, slope scores (SRTM1, tiled processing)\n    07_protected.py       \u2014 protected score (federal + tribal hard gate)\n    08_aquifer.py         \u2014 aquifer score (USGS NWIS depth to water)\n    09_soil.py            \u2014 soil score (SSURGO hydrologic group)\n    10_soilprofile.py     \u2014 soil_profile, ksat scores (SSURGO horizons)\n    patch_water_score.py  \u2014 retrofit PRISM water_score in-place\n    patch_raws.py         \u2014 retrofit raw physical columns on completed states\n  data/                   \u2014 generated GeoJSON + CSVs (not in git; rsync separately)\n  METHODS.md              \u2014 full indicator methodology with citations\n  PIPELINE_GUIDE.md       \u2014 running and troubleshooting the pipeline\n```\n\n## Data sources\n\nAll publicly available.\n\n| Source | Used for |\n|---|---|\n| Census TIGER 2022 | State boundaries, census tracts |\n| OSM Overpass API | Data centers, HV transmission lines, major rivers |\n| EIA Form 860 (2023) | Power plant locations |\n| Census ACS 5-yr 2022 | Demographic burden (poverty + minority rate), population |\n| PRISM Climate Group 4km 30-yr normals | Annual precipitation |\n| USGS ASCE 7-22 API | Seismic hazard (PGA) |\n| FEMA NFHL REST API | Special Flood Hazard Areas |\n| EPA Envirofacts REST API (TRI_FACILITY) | Industrial facility proximity |\n| IHFC GHFDB 2024 | Geothermal heat flow boreholes |\n| NASA SRTM1 (AWS S3) | 30m digital elevation model |\n| Esri USA Federal Lands | NPS, USFWS, DoD, Forest Service boundaries |\n| Census TIGER AIANNH | Tribal land boundaries |\n| USGS NWIS (post-2025 OGC API) | Depth to water table |\n| USDA NRCS SSURGO (SDM REST API) | Soil drainage class, horizon properties |\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {
            "AL": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "AR": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "AZ": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "CA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "CO": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "CT": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "DE": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "FL": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "GA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "IA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "ID": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "IL": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "IN": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "KS": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "KY": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "LA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "MA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "MD": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "ME": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "MI": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "MN": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "MO": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "MS": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "MT": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "NC": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "ND": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "NE": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "NH": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "NJ": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "NM": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "NV": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "NY": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "OH": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "OK": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "OR": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "PA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "RI": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "SC": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "SD": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "TN": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "TX": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "UT": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "VA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "VT": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "WA": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "WI": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "WV": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "WY": {
              "dirs": {},
              "files": [
                "grid_scores.geojson"
              ]
            },
            "raw": {
              "dirs": {},
              "files": [
                "IHFC_2024_GHFDB.cpg",
                "IHFC_2024_GHFDB.dbf",
                "IHFC_2024_GHFDB.prj",
                "IHFC_2024_GHFDB.qmd",
                "IHFC_2024_GHFDB.shp",
                "IHFC_2024_GHFDB.shx",
                "acs_demog_wa.csv",
                "datacenters.geojson",
                "eia860_plants_wa.geojson",
                "ghfdb_2024.rar",
                "transmission_wa.geojson",
                "wa_dem_utm.tif",
                "wa_federal_lands.geojson",
                "wa_heatflow.csv",
                "wa_precip_coarse.csv",
                "wa_seismic_sample.csv",
                "wa_sfha.geojson",
                "wa_srtm3.tif",
                "wa_state.geojson",
                "wa_tracts.geojson",
                "wa_tribal_tiger.geojson"
              ]
            }
          },
          "files": [
            "prism_ppt_30yr.tif"
          ]
        },
        "merascope": {
          "dirs": {},
          "files": [
            "app.jsx",
            "builder.jsx",
            "builder2.jsx",
            "coparty.jsx",
            "data.js",
            "explorer.jsx",
            "factsheets.jsx",
            "landing.jsx",
            "map.jsx",
            "misc.jsx",
            "sitelab.jsx",
            "steward.jsx",
            "steward2.jsx",
            "styles.css",
            "tracker.jsx",
            "tweaks-panel.jsx",
            "ui.jsx"
          ]
        },
        "parcels": {
          "dirs": {},
          "files": [
            "_quincy_check.py",
            "grant_county.py",
            "tri_cities.py"
          ]
        },
        "scripts": {
          "dirs": {
            "zcta": {
              "dirs": {},
              "files": [
                "02_zcta_indicators.py",
                "run_zcta_study.py"
              ]
            }
          },
          "files": [
            "01_basemap.py",
            "02_indicators.py",
            "03_risk.py",
            "04_environment.py",
            "05_geothermal.py",
            "06_terrain.py",
            "07_protected.py",
            "08_aquifer.py",
            "09_soil.py",
            "10_soilprofile.py",
            "config.py",
            "normalize_national.py",
            "patch_raws.py",
            "patch_water_score.py",
            "run_pipeline.py"
          ]
        }
      },
      "files": [
        "environment.yml",
        "index.html",
        "manage_survey.py",
        "server.py",
        "test_portfolio.csv"
      ]
    },
    "images": [],
    "local_base": "images/merascope/"
  },
  "snotrac": {
    "name": "snotrac",
    "description": "Frequency-weighted transit accessibility and vulnerability mapping for Washington State counties",
    "tech": [],
    "github": "https://github.com/simonhansedasi/snotrac",
    "branch": "master",
    "readme": "# WA Transit Gap Analysis\n\n**Frequency-weighted transit accessibility and vulnerability mapping for Washington State counties**\n\nLive at **[snotrac.uniquefier.us](https://snotrac.uniquefier.us)** \u2014 interactive choropleth map with four analytical lenses (vulnerability, accessibility, gap score, priority) and click-to-inspect block group cards.\n\nOriginally built as a volunteer data contribution to [Gosnotrac](https://www.gosnotrac.org), a community transit advocacy organization in Snohomish County.\n\n---\n\n## Counties\n\n| County | Block Groups | Transit Feed | Top Priority Areas |\n|---|---|---|---|\n| Snohomish | 575 | Community Transit GTFS | Everett, Stanwood, Darrington |\n| King | 1,545 | King County Metro GTFS | Auburn, Kent, Federal Way |\n\n---\n\n## Repository Structure\n\n```\nsnotrac/\n\u251c\u2500\u2500 src/transit_gaps/\n\u2502   \u251c\u2500\u2500 gtfs.py                     # GTFS loading and frequency computation\n\u2502   \u251c\u2500\u2500 network.py                  # OSMnx/pandana network build and cache\n\u2502   \u251c\u2500\u2500 accessibility.py            # Gravity-model scoring and gap formula\n\u2502   \u251c\u2500\u2500 vulnerability.py            # ACS pull and composite index\n\u2502   \u2514\u2500\u2500 viz.py                      # Map generation\n\u251c\u2500\u2500 notebooks/\n\u2502   \u251c\u2500\u2500 01_gtfs_ingestion.ipynb     # Download GTFS, compute stop frequencies\n\u2502   \u251c\u2500\u2500 02_acs_vulnerability.ipynb  # Pull ACS data, build vulnerability index\n\u2502   \u251c\u2500\u2500 03_network_accessibility.ipynb\n\u2502   \u251c\u2500\u2500 04_gap_analysis.ipynb\n\u2502   \u251c\u2500\u2500 05_zone_clustering.ipynb\n\u2502   \u251c\u2500\u2500 06_maps.ipynb\n\u2502   \u2514\u2500\u2500 07_brief.ipynb              # Geocode priority BGs \u2192 policy brief\n\u251c\u2500\u2500 data/                           # Snohomish County data\n\u251c\u2500\u2500 data_king/                      # King County data\n\u251c\u2500\u2500 web/\n\u2502   \u251c\u2500\u2500 index.html                  # Landing page\n\u2502   \u251c\u2500\u2500 snohomish/                  # Snohomish County map + data.geojson\n\u2502   \u2514\u2500\u2500 king/                       # King County map + data.geojson\n\u251c\u2500\u2500 run_king_pipeline.py            # Full pipeline runner for King County\n\u251c\u2500\u2500 generate_web_data.py            # Export gap_surface \u2192 web GeoJSON (any county)\n\u251c\u2500\u2500 deploy_do.sh                    # rsync web/ to DO droplet + reload nginx\n\u251c\u2500\u2500 environment.yml\n\u2514\u2500\u2500 setup.py\n```\n\n---\n\n## Running the Pipeline\n\n### Snohomish County (notebooks)\n\nRequires `CENSUS_API_KEY` in `.env`. Run notebooks 01\u201307 in order using the `snotrac-gaps` conda env:\n\n```bash\nconda activate snotrac-gaps   # or: miniforge3/envs/snotrac-gaps/bin/python\njupyter notebook\n```\n\n### King County (script)\n\n```bash\n/home/simonhans/miniforge3/envs/snotrac-gaps/bin/python run_king_pipeline.py\n```\n\nResume from a specific step if earlier steps already ran:\n\n```bash\npython run_king_pipeline.py --from-step 3 --skip-network-save\n```\n\n`--skip-network-save` is required for King County \u2014 pandana crashes saving the HDF5 for a 408k-node network. The in-memory network is used directly for accessibility computation.\n\n### Adding a new county\n\n1. Download GTFS feed and extract to `data_<county>/raw/gtfs/`\n2. Add county config to `COUNTY_CONFIGS` in `generate_web_data.py`\n3. Copy and adapt `run_king_pipeline.py` with the correct FIPS codes and place name\n4. Run pipeline \u2192 `generate_web_data.py <county>` \u2192 `deploy_do.sh`\n\n---\n\n## Generating Web Data + Deploying\n\n```bash\n# Re-export GeoJSON for one or both counties\n/home/simonhans/miniforge3/envs/snotrac-gaps/bin/python generate_web_data.py snohomish\n/home/simonhans/miniforge3/envs/snotrac-gaps/bin/python generate_web_data.py king\n\n# Deploy web/ to snotrac.uniquefier.us\n./deploy_do.sh\n```\n\n---\n\n## Methodology\n\n### Vulnerability Index\n\nFour ACS 5-year 2023 indicators at block group level, normalized county-wide to [0,1] and averaged with equal weights:\n\n| Indicator | ACS Variable |\n|---|---|\n| % elderly (65+) | B01001 age cols |\n| Unemployment rate | B23025 |\n| Zero-vehicle households | B25044 |\n| Below poverty | C17002 |\n\n### Accessibility Score\n\nGravity model via pandana on the OSM pedestrian network:\n\n```\nA_i = \u03a3_j [ F_j \u00d7 exp(\u2212\u03b2 \u00d7 d_ij) ]\n```\n\n- `F_j` = trips/day at stop j (GTFS representative weekday)\n- `d_ij` = walk distance in miles from block group centroid i to stop j\n- `\u03b2 = 4.0` (50% decay at 0.25 mi)\n- Search radius: 1.5 mi (Snohomish), 0.75 mi (King \u2014 reduced for memory)\n\n### Gap Score\n\n```\ngap_score = vulnerability_index \u00d7 (1 \u2212 log_accessibility)\n```\n\nLog-normalized accessibility is used because the raw distribution is extremely right-skewed.\n\n### Priority Score\n\nCombined rank of normalized gap score and equity distance below the y=x service-equity line:\n\n```\nequity_distance = (vuln_n \u2212 acc_n) / \u221a2   (positive = underserved)\npriority = mean(gap_score_n, equity_dist_n)\n```\n\n---\n\n## Known Limitations\n\n- No GTFS-Flex / specialized services (Homage, volunteer drivers)\n- Weekday snapshot only \u2014 no weekend or evening analysis\n- Disability excluded from vulnerability index (B18101 not available at block group level)\n- King County uses 0.75 mi search radius vs 1.5 mi for Snohomish due to network size\n\n---\n\n## Deployment\n\n- **URL:** [snotrac.uniquefier.us](https://snotrac.uniquefier.us)\n- **Host:** DO droplet `68.183.130.60`, nginx static file serve from `/var/www/snotrac/`\n- **TLS:** Cloudflare Full (Strict), wildcard cert `*.uniquefier.us`\n- **DNS:** Cloudflare A record `snotrac.uniquefier.us \u2192 68.183.130.60`\n",
    "tree": {
      "dirs": {
        "data": {
          "dirs": {
            "outputs": {
              "dirs": {},
              "files": [
                "policy_brief.docx",
                "snohomish_transit_gap_summary.docx"
              ]
            },
            "processed": {
              "dirs": {},
              "files": [
                "gap_surface.gpkg",
                "pandana_network.h5",
                "vulnerability_index.gpkg",
                "zones.gpkg"
              ]
            }
          },
          "files": []
        },
        "data_king": {
          "dirs": {
            "processed": {
              "dirs": {},
              "files": [
                "gap_surface.gpkg",
                "vulnerability_index.gpkg"
              ]
            }
          },
          "files": []
        },
        "src": {
          "dirs": {
            "transit_gaps": {
              "dirs": {},
              "files": [
                "__init__.py",
                "accessibility.py",
                "gtfs.py",
                "network.py",
                "viz.py",
                "vulnerability.py"
              ]
            }
          },
          "files": []
        },
        "web": {
          "dirs": {
            "king": {
              "dirs": {},
              "files": [
                "data.geojson",
                "index.html"
              ]
            },
            "snohomish": {
              "dirs": {},
              "files": [
                "data.geojson",
                "index.html"
              ]
            }
          },
          "files": [
            "index.html"
          ]
        }
      },
      "files": [
        "deploy_do.sh",
        "environment.yml",
        "generate_web_data.py",
        "run_king_pipeline.py",
        "setup.py"
      ]
    },
    "images": [],
    "local_base": "images/snotrac/"
  }
};
