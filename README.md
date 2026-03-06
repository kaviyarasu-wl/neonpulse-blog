# NeonPulse

**Dispatches from the digital frontier.**

A futuristic blog built with React 19, featuring a neon-cyberpunk aesthetic with particle backgrounds, glassmorphism, and smooth animations. Explores technology, science, design, and the culture of tomorrow.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Motion 12 |
| Routing | React Router 7 |
| Fonts | Inter, Space Grotesk, JetBrains Mono |

## Features

**Content & Navigation**
- 7 pages: Home, Blog, Post, Categories, Category, About, 404
- Full-text search with 300ms debounce across titles, excerpts, and tags
- Category filtering and pagination (6 posts per page)
- Sticky table of contents, previous/next post navigation, related posts
- Reading time estimates

**Visual Effects**
- Canvas-based particle network background (responsive particle count)
- Floating glow orbs with radial gradients
- Neon glowing borders and text shadows
- Glassmorphism cards with backdrop blur
- Animated gradient backgrounds
- Page transitions with AnimatePresence

**Architecture**
- Code splitting with `React.lazy` + `Suspense`
- Custom hooks: `usePagination`, `useSearch`, `useScrollProgress`
- Static JSON data layer (posts, categories, site config)
- Feature-based component organization
- Mobile-first responsive design with drawer menu

## Project Structure

```
src/
├── pages/              # Route pages (Home, Blog, Post, Categories, About, 404)
├── layouts/            # RootLayout, PostLayout
├── components/
│   ├── home/           # HeroSection, FeaturedPosts, RecentPosts
│   ├── blog/           # PostCard, PostGrid, CategoryFilter, Pagination
│   ├── post/           # PostHeader, PostContent, TableOfContents, RelatedPosts
│   ├── categories/     # CategoryCard
│   ├── common/         # Navbar, Footer, Button, Badge, SearchInput, ScrollProgress
│   └── effects/        # ParticleBackground, GlowOrb, NeonBorder, GridOverlay
├── hooks/              # usePagination, useSearch, useScrollProgress
├── utils/              # filterPosts, formatDate, readingTime
└── data/               # posts.json, categories.json, siteConfig.json
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Categories

| Category | Color | Topics |
|----------|-------|--------|
| Technology | Cyan | AI, quantum computing, crypto |
| Science | Purple | Biotech, neuroscience, space |
| Design | Magenta | UI/UX, spatial computing |
| Culture | Blue | Gaming, metaverse, society |
| Tutorials | Green | Developer guides and how-tos |

## License

MIT
