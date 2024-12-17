# Matchmaker 🤝

Welcome to Matchmaker! This guide will help you get started with the project, whether you're a beginner or an experienced developer.

## What is Matchmaker?

Matchmaker is a modern web application built with Next.js that helps connect people based on their interests and preferences. Think of it as a platform where users can find like-minded individuals for friendships, networking, or relationships.

## Features ✨

- **User Authentication**: Secure login and registration system
- **Profile Management**: Create and customize your personal profile
- **Real-time Matching**: Find matches based on interests and preferences
- **Modern UI/UX**: Beautiful, responsive design that works on all devices
- **Real-time Chat**: Connect with your matches instantly
- **Interest Tags**: Add and search for specific interests

## Tech Stack 🛠️

Here's what makes Matchmaker work:

- **Framework**: [Next.js 13+](https://nextjs.org)
  - The latest version of React's most popular framework
  - Uses the new App Router for better performance
  - Built-in optimization features

- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com) for styling
  - [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
  - Fully responsive design

- **UI Components**: 
  - Built-in Next.js components
  - Custom reusable components
  - [Geist](https://vercel.com/font) font by Vercel

## Prerequisites 📋

Before you start, make sure you have these installed on your computer:

1. **Node.js**: 
   - Download from [nodejs.org](https://nodejs.org)
   - Required version: 18.x or higher
   - To check your version, run: `node --version`

2. **Yarn**:
   - We use Yarn as our package manager
   - Install it by running: `npm install -g yarn`
   - To check your version, run: `yarn --version`

3. **Code Editor**:
   - We recommend [Visual Studio Code](https://code.visualstudio.com/)
   - Recommended extensions:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense
     - PostCSS Language Support

## Getting Started 🚀

Follow these steps to get Matchmaker running on your computer:

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd matchmaker
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```
   This might take a few minutes - it's downloading all the packages we need!

3. **Set Up Environment Variables**:
   - Copy the example environment file:
     ```bash
     cp .env.example .env.local
     ```
   - Open `.env.local` and fill in your environment variables

4. **Run the Development Server**:
   ```bash
   yarn dev
   ```
   Your app will be running at [http://localhost:3000](http://localhost:3000)!

## Project Structure 📁

The project follows a well-organized structure to keep the code maintainable and scalable:

```
matchmaker/
├── src/                   # Source directory containing all app code
│   ├── app/              # Next.js 13+ App Router directory
│   │   ├── auth/         # Authentication pages
│   │   ├── celebration/  # Celebration/success pages
│   │   ├── chat/        # Chat functionality and messaging
│   │   ├── connections/ # User connections and networking
│   │   ├── jobs/        # Job listings and applications
│   │   ├── offer/       # Offer creation and management
│   │   ├── profile/     # User profile pages and settings
│   │   ├── project/     # Project creation and management
│   │   ├── shop/        # Shop/marketplace features
│   │   ├── swipe/       # Swipe/matching interface
│   │   ├── layout.tsx   # Root layout with common UI elements
│   │   ├── page.tsx     # Homepage
│   │   └── globals.css  # Global styles
│   │
│   ├── components/      # Reusable React components
│   │   ├── ui/         # Basic UI components (buttons, inputs, etc.)
│   │   ├── navigation/ # Navigation components
│   │   ├── HeroSection.tsx
│   │   ├── Logo.tsx
│   │   ├── OpportunityCard.tsx
│   │   ├── review-stars.tsx
│   │   └── skill-badges.tsx
│   │
│   ├── data/          # Data utilities and constants
│   └── lib/           # Shared utilities and configurations
│
├── public/            # Static assets (images, icons)
├── node_modules/      # Project dependencies
└── config files       # Various configuration files
```

### Page Structure and Routes 🗺️

1. **Authentication (`/auth`)**
   - Sign in
   - Sign up
   - Password recovery

2. **Profile Management (`/profile`)**
   - View profile
   - Edit profile
   - Settings
   - Preferences

3. **Chat System (`/chat`)**
   - Message inbox
   - Conversation view
   - Chat settings

4. **Connections (`/connections`)**
   - View connections
   - Connection requests
   - Network management

5. **Jobs (`/jobs`)**
   - Job listings
   - Job applications
   - Job posting

6. **Offers (`/offer`)**
   - Create offers
   - View offers
   - Manage offers

7. **Projects (`/project`)**
   - Project creation
   - Project details
   - Project management

8. **Shop (`/shop`)**
   - Product listings
   - Shopping cart
   - Purchase history

9. **Swipe Interface (`/swipe`)**
   - Match suggestions
   - Swipe cards
   - Match preferences

10. **Celebration (`/celebration`)**
    - Success pages
    - Achievement notifications

### Component Organization 🧩

1. **UI Components (`/components/ui`)**
   - Buttons
   - Input fields
   - Cards
   - Modals
   - Loading states
   - Form elements

2. **Navigation Components (`/components/navigation`)**
   - Navigation bar
   - Sidebar
   - Footer
   - Menu items
   - Breadcrumbs

3. **Shared Components**
   - `HeroSection.tsx` - Landing page hero section
   - `Logo.tsx` - App logo component
   - `OpportunityCard.tsx` - Card for displaying opportunities
   - `review-stars.tsx` - Rating display component
   - `skill-badges.tsx` - Skill tag/badge component

### Configuration Files ⚙️

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts
- `components.json` - UI component configurations

### Key Directories 📂

1. **`src/app`**
   - Contains all pages and routes
   - Each directory represents a route
   - Uses Next.js 13+ App Router conventions

2. **`src/components`**
   - Reusable UI components
   - Follows atomic design principles
   - Component-specific styles

3. **`src/lib`**
   - Utility functions
   - Helper methods
   - Custom hooks
   - Type definitions

4. **`src/data`**
   - Data models
   - Constants
   - Mock data for development

5. **`public`**
   - Static assets
   - Images
   - Fonts
   - Icons

### File Naming Conventions 📝

- React components: PascalCase (e.g., `ButtonComponent.tsx`)
- Utilities and hooks: camelCase (e.g., `useAuth.ts`)
- Pages: lowercase with hyphens (e.g., `user-profile.tsx`)
- Constants: UPPERCASE (e.g., `CONSTANTS.ts`)

## Development Guide 💻

### Understanding Next.js Basics (for Beginners)

1. **What is Next.js?**
   - Next.js is a React framework that makes building web apps easier
   - It adds features like routing and server-side rendering to React
   - Think of it as React with superpowers!

2. **Key Concepts**:

   a. **Pages and Routing**:
   - Every file in `app/` becomes a route automatically
   - `page.tsx` files are your pages
   - Example: `app/about/page.tsx` becomes `/about`

   b. **Components**:
   - Small, reusable pieces of UI
   - Live in the `components/` folder
   - Can be used across different pages

   c. **Server vs Client Components**:
   ```typescript
   // Server Component (default)
   export default function ServerComponent() {
     return <div>This runs on the server</div>
   }

   // Client Component
   'use client'
   export default function ClientComponent() {
     return <div>This runs in the browser</div>
   }
   ```

3. **Styling with Tailwind**:
   - Utility-first CSS framework
   - Example:
     ```jsx
     // Instead of writing CSS like this:
     // .button { 
     //   background-color: blue;
     //   padding: 8px 16px;
     // }
     
     // You write it like this:
     <button className="bg-blue-500 px-4 py-2">
       Click me
     </button>
     ```

### Making Changes

1. **Starting Development**:
   ```bash
   yarn dev
   ```
   This starts your development server with hot-reload (changes appear instantly!)

2. **Creating a New Page**:
   - Create a new file in `app/`
   - Example: For a profile page, create `app/profile/page.tsx`

3. **Creating Components**:
   - Create a new file in `components/`
   - Use PascalCase for component names (e.g., `UserCard.tsx`)

4. **Installing New Packages**:
   ```bash
   yarn add package-name
   ```

## Common Tasks Guide 📝

### 1. Creating a New Page

```typescript
// app/example/page.tsx
export default function ExamplePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My New Page</h1>
      <p>This is a new page in our app!</p>
    </div>
  )
}
```

### 2. Creating a New Component

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      {text}
    </button>
  )
}
```

## Troubleshooting 🔧

Common issues and their solutions:

1. **"Module not found" errors**:
   ```bash
   yarn install
   ```

2. **Development server issues**:
   ```bash
   # Clear Next.js cache
   rm -rf .next
   # Remove node_modules
   rm -rf node_modules
   # Reinstall dependencies
   yarn install
   # Start dev server
   yarn dev
   ```

3. **Tailwind styles not working**:
   - Make sure you have `@tailwind` directives in your `styles/globals.css`
   - Try restarting the dev server

4. **TypeScript errors**:
   ```bash
   # Check types
   yarn type-check
   ```

## Best Practices 👍

1. **Code Organization**:
   - Keep components small and focused
   - Use meaningful names
   - Group related files together

2. **Styling**:
   - Use Tailwind classes for consistency
   - Create reusable components for common UI elements
   - Keep styles close to their components

3. **TypeScript**:
   - Always use proper types
   - Avoid using `any`
   - Create interfaces for component props

## Git Workflow 🌿

1. **Starting a New Feature**:
   ```bash
   git checkout main
   git pull
   git checkout -b feature/your-feature-name
   ```

2. **Making Commits**:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Pushing Changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

## Learn More 📚

- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js docs
- [React Documentation](https://react.dev) - Learn React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Learn TypeScript

## Getting Help 🆘

1. Check the troubleshooting guide above
2. Search for similar issues in the repository
3. Open a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Error messages (if any)

## Contributing 🤝

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Run tests: `yarn test`
5. Submit a pull request

Remember: No question is too basic! We're here to help you learn and grow. 😊
