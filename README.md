# Alfè Fashion Store

A modern, pixel-perfect Next.js fashion e-commerce website featuring a responsive navbar and stunning hero section with video background.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Video Background**: Full-screen hero section with video background support
- **Elegant Typography**: Playfair Display serif font for branding, Inter for content
- **Mobile Navigation**: Hamburger menu with slide-out navigation panel

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), Playfair Display (serif)
- **Language**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── layout/
│       ├── Navbar.tsx      # Responsive navigation
│       └── Hero.tsx        # Hero section with video
└── lib/
    └── utils.ts            # Utility functions
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add video background** (optional):
   - Add a video file named `hero-bg.mp4` to the `public/` folder
   - Video should be optimized for web (recommended: 15-30 seconds, 1920x1080+)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Brand Name
Update the brand name in `src/components/layout/Navbar.tsx` (currently "Alfè")

### Navigation Menu
Modify the `navItems` array in the Navbar component to change menu items and dropdown options.

### Hero Content
Edit the heading and button text in `src/components/layout/Hero.tsx`

### Colors & Styling
Customize the design system in `tailwind.config.ts` and `src/app/globals.css`

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/alfe-fashion-store)

## License

MIT License - feel free to use this project as a starting point for your fashion e-commerce website.
