# Development Guide

## Quick Start

### First Time Setup

1. **Install Node.js**: Make sure you have Node.js 18+ installed
2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
The site will be available at http://localhost:5173

### Building

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build in `dist/` folder
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

### Key Files

- **`index.html`**: HTML entry point
- **`src/main.jsx`**: JavaScript entry point, renders React app
- **`src/App.jsx`**: Root React component
- **`src/components/LandingPage.jsx`**: Main landing page with retro TV design
- **`src/index.css`**: Global styles with Tailwind directives

### Styling

This project uses **Tailwind CSS** for styling. Key concepts:

- Utility-first classes (e.g., `bg-black`, `text-white`, `flex`)
- Responsive prefixes (e.g., `sm:`, `md:`, `lg:`)
- Custom animations defined in `tailwind.config.js`

### Animations

Animations are powered by **Framer Motion**:

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Content
</motion.div>
```

## Adding New Components

1. Create a new file in `src/components/`
2. Export your component as default
3. Import and use it in `App.jsx` or other components

Example:
```jsx
// src/components/MyComponent.jsx
export default function MyComponent() {
  return <div>Hello!</div>
}

// src/App.jsx
import MyComponent from './components/MyComponent'
```

## Deployment

### Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Check deployment status in the "Actions" tab of your repository

### First Time Setup

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push to trigger the first deployment

### Manual Deployment

If you need to deploy manually:
```bash
npm run build
# Then upload the dist/ folder to your hosting service
```

## Common Tasks

### Changing Colors

Edit the Tailwind classes in `src/components/LandingPage.jsx`:
- `bg-gradient-to-b from-black via-gray-900 to-black` - Background gradient
- `from-cyan-400 via-pink-500 to-yellow-400` - Text gradient

### Modifying Animations

Edit the Framer Motion props in components:
- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing and easing

### Adding Pages/Routes

1. Install React Router: `npm install react-router-dom`
2. Set up routes in `App.jsx`
3. Create page components in `src/pages/`

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Build Errors

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Not Working

Restart the dev server:
```bash
# Press Ctrl+C to stop
npm run dev
```

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
