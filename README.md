# Matchmaker

Matchmaker is a modern web application built with Next.js that helps connect people based on their interests and preferences. This project showcases the power of Next.js 13+ features including the App Router, Server Components, and modern React patterns.

## Features

- User authentication and profiles
- Real-time matching system
- Interactive UI with modern design
- Responsive layout for all devices

## Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: Built-in Next.js components and custom components
- **Font**: [Geist](https://vercel.com/font) by Vercel

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org) (v18 or higher)
- npm, yarn, or pnpm (we'll use npm in these examples)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd matchmaker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
matchmaker/
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ...                # Other pages and routes
├── components/            # Reusable React components
├── public/               # Static assets
└── styles/              # Global styles and Tailwind config
```

## Development Guide

### Making Changes

1. The main page is in `app/page.tsx`. This is where you can start making changes.
2. Components are located in the `components/` directory.
3. The app uses the new App Router architecture. Learn more about it in the [Next.js documentation](https://nextjs.org/docs/app).

### Key Concepts for Beginners

1. **App Router**: 
   - Next.js 13+ uses a file-system based router
   - Files in the `app/` directory automatically become routes
   - `layout.tsx` files define shared layouts
   - `page.tsx` files define the unique content of a route

2. **Server Components**:
   - By default, all components in Next.js 13+ are Server Components
   - To make a component client-side, add `'use client'` at the top
   - Learn more about [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

3. **Styling**:
   - We use Tailwind CSS for styling
   - Global styles are in `styles/globals.css`
   - You can use CSS Modules for component-specific styles

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## Troubleshooting

Common issues and their solutions:

1. If you see module not found errors:
   ```bash
   npm install
   ```

2. If the development server crashes:
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run dev
   ```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

If you have any questions or run into issues, please open an issue in the repository.
