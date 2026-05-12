# sanjinhosic.com

Personal portfolio site for Sanjin Hosic, built with Gatsby 3 and hosted on Cloudflare Pages.

## Local development

This project pins Node 14.16.0 via `.nvmrc`:

```bash
nvm use 14.16.0
npm install
npm run develop
```

Site builds at http://localhost:8000.

To build for production:

```bash
npm run build
```

## Project structure

```
src/
  components/     # shared layout + section components (hero, about, jobs, featured, contact)
  pages/          # gatsby file-system routing
  config.js       # nav + social links + colors
content/
  featured/       # featured project markdown + cover images
  jobs/           # work history entries
```

Page sections render in the order set in `src/pages/index.js`.

## Credits

Forked from Brittany Chiang's [bchiang7/v4](https://github.com/bchiang7/v4) (MIT). The site framework and visual design are hers; all content (about, work history, featured projects, resume) is mine.
