---
date: '1'
title: 'Posit Connect MLOps Demo'
cover: './cover.png'
github: 'https://github.com/sanjinhosic/personal-posit-mlops-demo'
external: 'https://019e1a24-eacf-d91b-b0be-ca27f3127c5e.share.connect.posit.cloud/'
cta: 'https://019e1a33-702d-b0e0-d690-c7f82425c015.share.connect.posit.cloud/'
tech:
  - R
  - '{shiny}'
  - '{pins}'
  - Quarto
  - Posit Connect Cloud
  - GitHub Actions
---

End-to-end MLOps reference deployment: a multi-stage bioprocess yield model served by two live Shiny apps on Posit Connect Cloud. GitHub Actions runs scheduled retraining, daily scoring, and weekly metrics; model artifacts are versioned via {pins} on GitHub. The live monitoring dashboard renders calibration trends and rolling drift detection across every evaluation.
