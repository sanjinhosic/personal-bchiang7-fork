# Projects Section - Restoration Guide

The original projects components have been archived here while the portfolio section is under development.

## Archived Files

- `featured.js` - "Some Things I've Built" section with large featured project cards
- `projects.js` - "Other Noteworthy Projects" grid with smaller project cards

## Content Locations

All project content remains in place and is untouched:

```
content/
├── featured/           # Featured projects (large cards)
│   ├── HalcyonTheme/
│   │   ├── index.md
│   │   └── demo.png
│   ├── SpotifyProfile/
│   └── SpotifyProfileV2/
│
└── projects/           # Other projects (grid cards)
    ├── project-name.md
    └── ...
```

## Restoring the Original Sections

1. Copy the archived components back:

```bash
cp src/components/sections/_archive/featured.js src/components/sections/featured.js
cp src/components/sections/_archive/projects.js src/components/sections/projects.js
```

2. Update `src/pages/index.js`:

```jsx
// Change this import:
import { Layout, Hero, About, Jobs, Featured, Contact } from '@components';

// To include Projects:
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
```

3. Add `<Projects />` back to the JSX:

```jsx
<Featured />
<Projects />   {/* Add this line */}
<Contact />
```

## What You Need to Build Your Portfolio

Before creating featured projects, understand what's required:

### Required Components

**1. A Screenshot/Demo Image**

- High-quality screenshot showing your project in action
- Recommended size: 1200-1600px wide
- Can be a website screenshot, app interface, or product demo
- Save as `demo.png` in your project folder

**2. The Actual Project**

- A live website/demo (hosted on Netlify, Vercel, Heroku, GitHub Pages, etc.)
- OR a GitHub repository with good documentation
- OR both!

**3. Project Metadata**

- Brief description (2-3 sentences)
- List of technologies used
- Links to GitHub and/or live demo

### What You DON'T Need

- Presentations or slide decks
- Video demonstrations (optional, but not required)
- Lengthy documentation (keep descriptions brief)

### Practical Workflow

1. Build your project (web app, tool, library, etc.)
2. Deploy it somewhere (if deployable)
3. Take a high-quality screenshot
4. Create the folder structure and markdown file (see below)

## Adding New Featured Projects

Featured projects appear as large showcase cards with images.

1. Create a folder in `content/featured/` (e.g., `content/featured/MyProject/`)

2. Add an `index.md` file with this structure:

```markdown
---
date: '3'
title: 'Project Title'
cover: './screenshot.png'
github: 'https://github.com/username/repo'
external: 'https://live-demo-url.com'
cta: 'https://optional-learn-more-link.com'
tech:
  - React
  - Node.js
  - PostgreSQL
---

A brief description of the project. This supports **markdown** formatting.
Explain what it does and why it's interesting.
```

3. Add a cover image (referenced in `cover` field)

**Field Reference:**
| Field | Required | Description |
|-------|----------|-------------|
| date | Yes | Sort order (lower = appears first) |
| title | Yes | Project name |
| cover | Yes | Path to screenshot/preview image |
| github | No | GitHub repository URL |
| external | No | Live demo URL |
| cta | No | "Learn More" button URL |
| tech | Yes | Array of technologies used |

## Adding Other Projects (Grid)

Smaller project cards in the "Other Noteworthy Projects" section.

1. Create a markdown file in `content/projects/` (e.g., `content/projects/my-project.md`)

2. Use this structure:

```markdown
---
date: '2024-01-15'
title: 'Project Name'
github: 'https://github.com/username/repo'
external: 'https://live-url.com'
tech:
  - Python
  - AWS
  - Docker
showInProjects: true
---

Brief project description. Supports markdown.
```

**Field Reference:**
| Field | Required | Description |
|-------|----------|-------------|
| date | Yes | Date for sorting (YYYY-MM-DD format) |
| title | Yes | Project name |
| github | No | GitHub repository URL |
| external | No | Live demo/site URL |
| tech | Yes | Array of technologies |
| showInProjects | No | Set to `false` to hide from grid |
| company | No | Company name (shown in archive page) |

## Archive Page

The `/archive` page (`src/pages/archive.js`) shows all projects in a table format.
This page remains functional and pulls from `content/projects/`.

## Tips

- Images in `content/featured/*/` are automatically optimized by Gatsby
- The grid shows 6 projects by default with a "Show More" button
- Projects are sorted by date (newest first in grid, custom order in featured)
- Use `showInProjects: false` to include a project in the archive but hide it from the main grid
