# AGENTS.md - VeroDashboard IA Hub

This document provides guidelines for AI agents working in this repository.

## Project Overview

VeroDashboard is a React + Vite + Tailwind CSS application that serves as an operational hub for accessing AI agents and tools. The app features a dark/light theme toggle, navigation between pages, and a card-based UI design system.

## Build Commands

```bash
npm run dev        # Start development server with hot reload
npm run build      # Build for production (output to dist/)
npm run preview    # Preview production build locally
```

**Note**: This project uses Vite 4.x and does not include a test framework. ESLint is configured but not enforced via npm scripts.

## Code Style Guidelines

### General Principles

- Write clean, self-documenting code with minimal comments (unless explaining complex logic)
- Prefer simplicity over clever abstractions
- Keep components focused and small (<100 lines when possible)
- Use meaningful variable and function names

### React Components

- Use functional components with hooks (useState, useEffect, etc.)
- Default export for components, named export for utilities/data
- Component file naming: `PascalCase.jsx` (e.g., `GemCard.jsx`)
- Place components in `/src/components/` directory
- Page components go in `/src/pages/` directory

```jsx
// Preferred component structure
import React from "react";
import { SomeIcon } from "lucide-react";

const ComponentName = ({ prop1, prop2 }) => {
  const { field1, field2 } = prop1;

  return (
    <div className="...">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### Imports and Ordering

- React import: `import React from "react";` (required even with JSX transform)
- Group imports by type:
  1. React/core libraries
  2. Third-party libraries (react-router-dom, lucide-react, etc.)
  3. Relative imports (./, ../)
- Use named imports for icons: `import { IconName } from "lucide-react";`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `GemCard`, `ThemeToggle` |
| Functions | camelCase | `handleClick`, `formatData` |
| Variables | camelCase | `isDark`, `gemList` |
| Constants (data) | UPPER_SNAKE_CASE or PascalCase | `GEMS`, `GUIDE_CONTENT` |
| Props | camelCase | `onClick`, `isLoading` |
| CSS classes | kebab-case | `bg-white`, `text-slate-900` |

### JavaScript Syntax

- Strings: double quotes for JSX attributes, single quotes elsewhere
- Semicolons: always use ( ASI can be error-prone)
- Arrow functions for components and callbacks
- Destructuring: use extensively for props and imports
- Template literals for dynamic strings

```jsx
// Good
const Component = ({ title, description }) => {
  return (
    <div className={`p-4 ${isActive ? "active" : ""}`}>
      <h1>{title}</h1>
    </div>
  );
};
```

### Tailwind CSS

- Use Tailwind utility classes for all styling
- Dark mode support: `dark:bg-[#0a0a0a]`, `dark:text-white`
- Color palette: `slate-900`, `indigo-500`, `gray-50` (avoid hardcoded hex except special cases)
- Arbitrary values: `bg-[#0a0a0a]` for specific colors
- Transitions: `transition-colors duration-500`
- Responsive: `md:grid-cols-2`, `hidden md:flex`
- Group hover pattern: `group-hover:border-indigo-500/50`

### Data Files

- Use named exports: `export const DATA_NAME = [...];`
- Place in `/src/data/` directory
- Use descriptive IDs: `id: "gem_ing"`, `id: "section_context"`

### Error Handling

- Use optional chaining: `obj?.field?.nested`
- Provide fallback values: `value || defaultValue`
- Handle undefined props with default parameters
- Add `aria-label` for accessibility on interactive elements

### TypeScript vs JavaScript

- This project uses plain JavaScript (not TypeScript)
- If adding new files, maintain consistency with existing JS patterns
- Document complex object shapes in comments if needed

### Accessibility

- Always include `aria-label` on icon-only buttons
- Use semantic HTML (`<main>`, `<header>`, `<section>`, `<footer>`)
- External links must have `target="_blank" rel="noopener noreferrer"`

### Dark Mode Implementation

The app uses a `ThemeToggle` component that:
- Checks `localStorage` and `document.documentElement.classList`
- Toggles `dark` class on `<html>` element
- Persists preference to `localStorage`

When adding new components, support both light and dark modes:
- Light: `bg-white`, `text-slate-900`
- Dark: `dark:bg-[#0a0a0a]`, `dark:text-white`
- Use `slate-500` for muted text in both modes

### File Structure

```
src/
  components/     # Reusable UI components
  pages/          # Route-level components
  data/           # Static data and configuration
  App.jsx         # Root component with routing
  main.jsx        # Entry point
  index.css       # Tailwind + custom animations
```

### Common Patterns

**Icon Mapping** (for dynamic icons):
```jsx
const iconMap = {
  Shield,
  User,
  Database,
};

const Icon = ({ name, size = 24 }) => {
  const LucideIcon = iconMap[name];
  return LucideIcon ? <LucideIcon size={size} /> : null;
};
```

**Color Mapping** (for dynamic colors):
```jsx
const colorMap = {
  blue: "bg-blue-500/10 text-blue-600",
  amber: "bg-amber-500/10 text-amber-600",
};
```

## Linting

ESLint is configured with:
- React Hooks rules
- No unused variables (except those starting with `UPPER_CASE`)
- JSX support

Run linting manually if needed:
```bash
npx eslint src/
```

## Adding New Features

1. Create component in appropriate directory
2. Import and use Tailwind classes for styling
3. Support dark mode with `dark:` variants
4. Export as default
5. Import in page or parent component
6. Test in both light and dark modes
