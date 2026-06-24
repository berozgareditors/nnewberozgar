# Berozgar Editor — Website

Marketing site for **Berozgar Editor** (_Editing Your Story_), built with **React + Vite**, styled with **Tailwind CSS** and **Material UI**.

Red-and-black brand identity, single-page scroll, fully responsive (mobile → desktop), keyboard-focusable, and reduced-motion friendly.

---

## Tech stack

| Tool | Role |
|------|------|
| **React 18 + Vite** | App framework & dev server |
| **Tailwind CSS v3** | Layout, spacing, custom styling |
| **Material UI v5** | Interactive components (navbar, buttons, drawer, rating, icon buttons) |
| **Google Fonts** | Poppins (display + body), Anton (impact headings), Oswald (condensed labels) |

> Tailwind and MUI run side by side. `StyledEngineProvider injectFirst` (in `src/main.jsx`) makes MUI inject its styles **first**, so Tailwind utility classes win whenever the two overlap.

---

## Run it locally

You need **Node.js 18+** installed.

```bash
# 1. install dependencies
npm install

# 2. start the dev server (hot reload)
npm run dev
#   → open the http://localhost:5173 URL it prints

# 3. build for production
npm run build

# 4. preview the production build
npm run preview
```

---

## Project structure

```
berozgar-website/
├─ index.html              # fonts + root div
├─ tailwind.config.js      # brand colors, fonts, radii, animation
├─ postcss.config.js
├─ vite.config.js
└─ src/
   ├─ main.jsx             # MUI ThemeProvider + StyledEngineProvider
   ├─ theme.js             # MUI theme (red/black palette, pill buttons)
   ├─ index.css            # Tailwind directives + base styles
   ├─ App.jsx              # composes all sections in order
   ├─ data/
   │  └─ content.js        # ← ALL text, links & lists live here
   └─ components/
      ├─ Navbar.jsx        ├─ WhyTrust.jsx
      ├─ Hero.jsx          ├─ Testimonials.jsx
      ├─ Services.jsx      ├─ HelloSection.jsx
      ├─ WhoWeAre.jsx      ├─ Clients.jsx
      ├─ OurWorks.jsx      ├─ GetInTouch.jsx
      ├─ Footer.jsx        ├─ Reveal.jsx   (scroll-fade helper)
      └─ icons.jsx         (inline X / Instagram / Facebook / YouTube)
```

---

## Customizing

**Text, links, services, testimonials, client list, social URLs, email**
→ edit `src/data/content.js`. Nothing else needs touching for copy changes.

**Brand colors / fonts**
→ `tailwind.config.js` (utility classes) and `src/theme.js` (MUI components). Keep the red hex (`#E63721`) in sync between both files.

**Images** — the build ships with clearly-marked placeholders:
- Photos (edit timeline, founder desk, portfolio) use `picsum.photos` stand-ins.
- 3D character + team slots use icon placeholders.
- Client logos are neutral name cards.

To use your own assets: create `src/assets/`, drop files in, then in the component:
```jsx
import shot from "../assets/edit-timeline.jpg";
// ...
<img src={shot} alt="…" />
```
Each placeholder has a comment pointing to exactly what to replace.

> ⚠️ Only display logos of clients you've actually worked with, with their permission.

**Hero background video/image** — `src/components/Hero.jsx` has a commented `<video>` block; drop a file in `public/` and uncomment.

---

## Deploying

It's a static site after `npm run build` (output in `dist/`). Drag-and-drop `dist/` to **Netlify**, or connect the repo to **Vercel** / **Netlify** / **GitHub Pages** for auto-deploys.
