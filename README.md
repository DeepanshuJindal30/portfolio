# Deepanshu Jindal — Portfolio

Premium personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

**Theme:** AI Product Engineering Command Center

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D:** React Three Fiber / Three.js
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (static export)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Static files are exported to the `out/` directory.

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── projects/
│       └── appurva-pharmacy/
│           └── page.tsx    # Case study page
├── components/
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── three/              # React Three Fiber components
│   └── ui/                 # Reusable UI components
├── data/                   # Content data files
│   ├── achievements.ts
│   ├── experience.ts
│   ├── pillars.ts
│   ├── projects.ts
│   ├── research.ts
│   ├── skills.ts
│   └── site.ts
└── lib/
    └── utils.ts
```

## Deployment to GitHub Pages

### Automatic (GitHub Actions)

1. Push this repository to GitHub
2. Go to **Settings → Pages → Build and deployment**
3. Set source to **GitHub Actions**
4. Push to `main` branch — the workflow deploys automatically

### Manual

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=your-username/portfolio NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

Upload the `out/` folder contents to your GitHub Pages branch.

### Environment Variables

| Variable | Description |
|----------|-------------|
| `GITHUB_PAGES` | Set to `true` for GitHub Pages deployment |
| `GITHUB_REPOSITORY` | Full repo name (e.g., `user/portfolio`) |
| `NEXT_PUBLIC_BASE_PATH` | Base path for assets (e.g., `/portfolio`) |

## Customization

### Replace Placeholder Assets

- `public/profile.jpg` — Your profile photo
- `public/resume.pdf` — Your resume PDF
- `public/og-image.png` — OpenGraph social preview image
- `public/app-screenshots/` — Mobile app screenshots
- `public/appurva-pharmacy.apk` — Android APK file

### Update Content

Edit files in `src/data/` to update achievements, experience, projects, research papers, and skills.

### Update Contact Info

Edit `src/data/site.ts` with your email, GitHub, and LinkedIn URLs.

## License

MIT
