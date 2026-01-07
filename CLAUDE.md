# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server (Next.js)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (note: ESLint errors are ignored during builds via `next.config.mjs`)

## Architecture

This is a personal portfolio website built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS.

### Project Structure

- `src/app/` - Next.js App Router pages (home, projects, work, books)
- `src/components/` - Reusable React components
- `public/` - Static assets (images, videos, PDFs)

### Layout System

The site uses a consistent layout pattern:
- `MainWindow` component wraps all page content, providing the left sidebar navigation and scrollable content area
- `Navbar` component renders the profile image and navigation links
- Layout is responsive: sidebar on desktop, horizontal nav on mobile (breakpoint at md/768px)

### Styling

- Tailwind CSS for utility classes
- Custom CSS classes in `globals.css` for media containers:
  - `.landscape-media` / `.landscape-container` - For 16:9 aspect ratio content
  - `.portrait-media` / `.portrait-container` - For vertical content
  - Responsive sizing at 768px breakpoint
- Global link styling: blue (#0000EE) with underline
- Font: Tinos (Google Font) for body text
