# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Alfè is a modern fashion e-commerce website built with Next.js 15, featuring responsive design, video backgrounds, and smooth animations. The project uses the App Router pattern and is styled with Tailwind CSS v4.

## Development Commands

### Getting Started
```powershell
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build and Deploy
```powershell
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Running Tests
Currently no test framework is configured. To add testing:
```powershell
# For Jest + React Testing Library
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# For Playwright (E2E testing)
npm install -D @playwright/test
npx playwright install
```

## Architecture Overview

### Core Structure
- **Next.js 15** with App Router (`src/app/`)
- **Component Library**: shadcn/ui components in `src/components/ui/`
- **Layout Components**: Navigation and Hero sections in `src/components/layout/`
- **Pages**: Home page (`/`), New Arrivals page (`/new-arrivals`), About page (`/about`), and Login page (`/login`)
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Framer Motion for smooth transitions

### Key Components
- **Hero.tsx**: Main landing section with video background support
- **Navbar.tsx**: Responsive navigation with mobile hamburger menu
- **NewLaunch.tsx**: Product showcase section with responsive grid
- **Collections.tsx**: Featured collections with hover effects
- **FAQBannerSubscribe.tsx**: Combined FAQ, banner, and newsletter section
- **Footer.tsx**: Minimalist footer with brand, navigation, social media, and copyright
- **Responsive Design**: Mobile-first approach with breakpoint considerations

### Design System
- **Fonts**: Inter (sans-serif), Playfair Display (serif for branding)
- **Color System**: Custom CSS variables with light/dark theme support
- **Animation**: Consistent timing and easing for professional feel

## Video Integration
To add a video background to the Hero section:
1. Place your video file in the `public/` folder as `hero-bg.mp4`
2. Optimize video for web (recommended: 15-30 seconds, 1920x1080+, compressed)
3. The video will automatically play as background in the Hero component

## Section Components

### Product Sections
- **NewLaunch**: Features new products in responsive grid (1→2→4 columns)
- **Collections**: Showcases featured collections (1→2→3 columns)
- Both sections use Unsplash placeholder images that can be replaced

### FAQ + Banner + Subscribe Section
- **FAQ**: Accordion-style frequently asked questions with heart icons
- **Banner**: Background image with overlay text for brand messaging
- **Newsletter**: Email subscription form with validation
- **Currency Dropdown**: Fixed position currency selector (bottom-left)

### Customer Reviews Section
- **Infinite Scroll**: Lazy-loaded review cards with fade-in animations
- **Responsive Grid**: 1→2→3 columns across mobile, tablet, desktop
- **Review Cards**: Image + 5-star rating + review text with exact styling
- **20 Sample Reviews**: High-quality fashion images from Unsplash

### Footer Section
- **Minimalist Design**: Clean, centered layout with white background
- **Brand Identity**: Alfè logo with Helvetica Neue typography
- **Navigation Links**: Home, Shop, About, Contact with hover effects
- **Social Media**: Instagram, Facebook, Pinterest icons with hover states
- **Copyright Notice**: Styled copyright text with light gray color

### New Arrivals Page
- **Enhanced Filters Bar**: Polished filter controls with improved spacing and hover effects
- **Product Grid**: 3-column layout with increased gap spacing for better visual separation
- **Premium Cards**: Rounded corners with enhanced shadows and smooth hover animations
- **Image Interactions**: Scale effects on hover with improved transition timing
- **Typography**: Improved font sizes, letter-spacing, and line heights for better readability
- **Professional Badges**: Refined sold-out badges with better positioning and styling

### About Us Page
- **Enhanced Header**: Larger typography with improved letter-spacing and visual hierarchy
- **Optimized Layout**: Better column ordering and increased gap spacing for premium feel
- **Refined Content Section**: Enhanced padding, rounded corners, and subtle shadow effects
- **Improved Typography**: Larger text sizes, better line-height, and paragraph separation
- **Visual Polish**: Gradient backgrounds, hover effects, and enhanced spacing throughout
- **Our Story Section**: Two-column layout with brand story text and fashion model imagery
- **Interactive Elements**: Currency dropdown and overlay text on center image

### Login Page
- **Custom Header**: Bomzan Closet branding with navigation and country dropdown
- **Centered Form**: 450px max-width form with proper spacing and typography
- **Clean Inputs**: Black border inputs with focus states and validation
- **Professional Styling**: Cursive fonts for branding, Arial for form elements
- **Interactive Elements**: Country selector, forgot password, and create account links

### Interactive Features
- Accordion FAQ items with smooth expand/collapse
- Hover effects on product/collection images (scale + shadow)
- Newsletter form validation and submission handling
- Currency dropdown with multiple options
- Infinite scroll loading for customer reviews
- Smooth fade-in animations for dynamically loaded content

## Development Guidelines

### File Organization
- Components use TypeScript with proper typing
- CSS-in-JS via Tailwind classes
- Client components marked with 'use client' directive
- Server components by default (App Router)

### Responsive Design
- Mobile-first breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation switches to hamburger menu below md breakpoint
- Hero text scales across breakpoints

### Animation Patterns
- Entry animations use staggered delays for visual hierarchy
- Motion components from framer-motion with consistent easing
- Hover states for interactive elements

### State Management
- Local component state with useState for UI interactions
- No global state management currently implemented
- Consider Zustand or Jotai for complex state needs

## Common Tasks

### Adding New Pages
1. Create new route in `src/app/[route]/page.tsx`
2. Update navigation in `src/components/layout/Navbar.tsx`
3. Follow existing layout patterns

### Styling Updates
- Modify design tokens in `src/app/globals.css`
- Update Tailwind config in `tailwind.config.ts`
- Use existing color variables for consistency

### Component Development
- Use shadcn/ui as base for new components
- Follow existing TypeScript patterns
- Implement proper accessibility features