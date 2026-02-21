# Arvin Askari — Portfolio Website

Professional portfolio website built to showcase software engineering, AI/data projects, competitions, and technical writing in a clean, responsive experience.

Live site: **https://arvincoder15.github.io/**

## Overview

This portfolio is designed as a fast, single-page web experience focused on:

- Clear personal branding and project storytelling
- Recruiter-friendly navigation and CTAs
- Smooth UX interactions without a framework
- Accessibility and performance best practices

## Key Features

- **Responsive UI** across mobile, tablet, and desktop
- **Dark mode** with persisted preference (`localStorage`)
- **Scroll-spy navigation** with active section highlighting
- **Project search + technology filtering**
- **Experience category filters**
- **Interactive gallery carousel** in the About section
- **Document/resume modal viewer**
- **Contact form** with validation and anti-spam honeypot
- **Animated skill meters** triggered on scroll
- **SEO + social metadata** (Open Graph, Twitter cards, JSON-LD)

## Tech Stack

- **HTML5** (semantic structure)
- **CSS3** (custom properties, Grid/Flexbox, transitions, animations)
- **Vanilla JavaScript** (DOM logic, filtering, observers, modals)
- **Plausible Analytics** (lightweight privacy-friendly analytics)
- **GitHub Pages** (hosting/deployment)

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── site.webmanifest
├── images/
└── README.md
```

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Arvincoder15/Arvincoder15.github.io.git
   cd Arvincoder15.github.io
   ```

2. Start a local server:

   ```bash
   python3 -m http.server 8000
   ```

3. Open:

   ```text
   http://localhost:8000
   ```

## Customization Guide

- **Content**: edit section copy and links in `index.html`
- **Styling/Theming**: update design tokens and components in `style.css`
- **Interactions**: adjust filtering, scroll behavior, and modal logic in `script.js`
- **Media assets**: replace images inside `images/`

## Deployment

This site is deployed via **GitHub Pages** from the repository branch configured in GitHub settings.

Standard publish flow:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Quality Focus

- Accessibility: semantic landmarks, focus states, keyboard support
- Performance: lightweight vanilla stack, optimized assets, minimal runtime overhead
- Maintainability: clear file separation (`index.html`, `style.css`, `script.js`)

## License

This repository is a personal portfolio project. You may fork for learning/inspiration, but please replace personal branding/content before reuse.
