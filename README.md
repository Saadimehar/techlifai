# Techlifai — Digital Growth Studio

A one-page, animated agency website built with React + Vite.

Services covered: Web Development, WordPress, Webflow Development, Shopify Development,
App Development, SEO, and AI Automation.

## Running this project in VS Code

**Requirements:** [Node.js](https://nodejs.org) 18+ installed on your machine.

1. Unzip this folder and open it in VS Code (`File → Open Folder…`).
2. Open a terminal in VS Code (`` Ctrl+` `` / `` Cmd+` ``).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser. The page
   hot-reloads as you edit files.

## Building for production / deploying

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages,
your own hosting, etc.). Preview the production build locally with:

```bash
npm run preview
```

## Project structure

```
techlifai/
├─ index.html            # HTML entry point (loads fonts + src/main.jsx)
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx            # React root
   ├─ App.jsx             # Page layout + scroll-spy logic
   ├─ index.css           # All styles, design tokens, animations
   ├─ data.js             # Editable content: services, projects, team, testimonials
   ├─ icons.jsx           # Inline SVG icon components
   ├─ Reveal.jsx           # Scroll-reveal animation wrapper
   └─ components/
      ├─ Navbar.jsx        # Sticky nav with active-section highlighting
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Services.jsx
      ├─ Projects.jsx      # Includes the All / Web Dev / WordPress / etc. filter
      ├─ Team.jsx
      ├─ Testimonials.jsx
      ├─ Contact.jsx       # Form (see note below)
      └─ Footer.jsx
```

## Editing content

Almost everything text-based (services, project list, team members, testimonials, the
contact email/phone) lives in **`src/data.js`** — edit that file first before touching any
component.

Colors, fonts and spacing are defined as CSS variables at the top of **`src/index.css`**.

## About the contact form

This is a static front end with no backend, so it can't silently send email on its own —
browsers block that for security reasons. The form currently opens a pre-filled `mailto:`
draft addressed to `itzsaadi.99@gmail.com` in the visitor's email app.

If you'd rather have it submit silently (no email client popup), connect it to a form
service instead — two easy options:

- **[Formspree](https://formspree.io)** — create a free form endpoint, then change the
  `submit` function in `src/components/Contact.jsx` to `fetch()` POST to your Formspree URL.
- **[EmailJS](https://www.emailjs.com)** — sends email directly from the browser using a
  client-side SDK, no backend required.

## Notes

- Navigation highlighting uses `IntersectionObserver` — no extra routing library needed,
  since this is intentionally a smooth-scrolling one-page site.
- The Projects section acts as an in-page project gallery with category filters
  (All / Web Dev / WordPress / Webflow / Shopify / App Dev / SEO / AI) instead of a second
  page, so the whole site keeps a single continuous scroll and nav experience.
- Animations respect `prefers-reduced-motion`.
