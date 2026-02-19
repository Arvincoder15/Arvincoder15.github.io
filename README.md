# Portfolio Website

A modern, responsive personal portfolio showcasing project work, hackathon achievements, case competitions, and technical writing.

## Features

- **Responsive Design** — Mobile-first layout with smooth breakpoints from mobile to desktop
- **Dark Mode** — Automatic theme switching with localStorage persistence
- **Featured Results Strip** — Highlight key achievements and skills at a glance
- **Experience Filters** — Browse work by category (All, AI, Data, Systems, Web)
- **Project Showcase** — 6 featured projects with live links and repository access
- **Hackathons & Competitions** — 4 case competitions and hackathon entries with project overviews
- **Writing & Articles** — Sports analytics and technical articles with inline PDF viewing
- **In-Page Document Viewer** — Open PDFs and case studies in a modal without leaving the page
- **Contact Form** — Honeypot spam protection and client-side validation
- **Accessibility** — Skip links, focus management, semantic HTML, reduced-motion support
- **SEO Optimized** — Open Graph metadata, JSON-LD schema, and structured data
- **Progressive Web App** — Manifest file and favicon for native app experience

## Tech Stack

- **HTML5** — Semantic markup with accessibility best practices
- **CSS3** — Custom properties (CSS variables), Grid, Flexbox, smooth transitions
- **JavaScript (Vanilla)** — Intersection Observer for scroll animations, form validation, modal management
- **Analytics** — Plausible tracking for non-invasive metrics
- **Hosting** — GitHub Pages with custom domain support

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Arvincoder15/Arvincoder15.github.io.git
   ```

2. Open `index.html` in your browser or use a live server:
   ```bash
   python -m http.server 8000
   ```

3. Navigate to `http://localhost:8000`

## Customization

- **Colors** — Edit CSS variables in `style.css` (`:root` and `:root.dark-mode`)
- **Content** — Update sections in `index.html` (experience, projects, hackathons, articles)
- **Images** — Replace placeholders in `images/` folder
- **Analytics** — Add your Plausible domain in the script tag

## Deployment

Automatically deployed to GitHub Pages on every push to the `main` branch.

To deploy elsewhere, ensure all assets are served with proper MIME types and that JavaScript is enabled.

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Personal portfolio — feel free to fork and adapt for your own use.
