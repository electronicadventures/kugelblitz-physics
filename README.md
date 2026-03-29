# Kugelblitz Physics

QCAA Senior Physics course website — built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

**Live site:** [kugelblitz.me](https://kugelblitz.me/)

## Structure

- `docs/` — all site content (Markdown files)
- `docs/unit1/` through `docs/unit4/` — unit planners and topic pages
- `docs/assessment/` — assessment guidance (IA1, IA2, IA3, external exam)
- `docs/resources/` — curated links to simulations, videos, and tools
- `mkdocs.yml` — site configuration
- `.github/workflows/deploy.yml` — automatic deployment to GitHub Pages

## Local development

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open `http://127.0.0.1:8000` in your browser.

## Deployment

The site deploys automatically via GitHub Actions whenever you push to the `main` branch.

## Custom domain

The `docs/CNAME` file is set to `kugelblitz.me`. You will need to configure a DNS record pointing your domain to GitHub Pages — see the setup guide in the wiki or GitHub's [custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-github-pages).
