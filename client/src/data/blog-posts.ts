import type { BlogPostMeta } from "@shared/schema";

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    description: "A comprehensive guide to building modern React applications with the latest best practices and tools.",
    date: "2025-01-15",
    tags: ["React", "JavaScript", "Web Development"],
    readTime: 8,
  },
  {
    slug: "typescript-tips-and-tricks",
    title: "TypeScript Tips and Tricks for Better Code",
    description: "Learn advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
    date: "2024-12-20",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    readTime: 6,
  },
];

export const blogPostContent: Record<string, string> = {
  "getting-started-with-react": `
# Getting Started with React in 2025

React continues to be one of the most popular JavaScript libraries for building user interfaces. In this guide, we'll explore the latest features and best practices for building modern React applications.

## Why React?

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

### Key Benefits

- **Component-Based**: Build encapsulated components that manage their own state
- **Learn Once, Write Anywhere**: Develop new features without rewriting existing code
- **Large Ecosystem**: Benefit from thousands of open-source libraries and tools

## Getting Started

To create a new React application, you can use Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

This will set up a new React project with TypeScript support and a modern build system.

## Modern React Patterns

### Hooks

Hooks let you use state and other React features without writing a class:

\`\`\`tsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Custom Hooks

Create reusable logic with custom hooks:

\`\`\`tsx
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
\`\`\`

## Conclusion

React in 2025 is more powerful than ever. With modern tooling, improved performance, and a thriving ecosystem, it's an excellent choice for your next project.

Happy coding!
  `,
  "typescript-tips-and-tricks": `
# TypeScript Tips and Tricks for Better Code

TypeScript has become essential for building large-scale JavaScript applications. Let's explore some advanced patterns that will help you write better, more maintainable code.

## Type Inference

TypeScript's type inference is powerful. Let it work for you:

\`\`\`typescript
// Let TypeScript infer the type
const numbers = [1, 2, 3]; // number[]

// No need to explicitly type this
const doubled = numbers.map(n => n * 2);
\`\`\`

## Utility Types

TypeScript provides several utility types to help you transform types:

### Partial<T>

Makes all properties optional:

\`\`\`typescript
interface User {
  name: string;
  email: string;
  age: number;
}

function updateUser(user: User, updates: Partial<User>) {
  return { ...user, ...updates };
}
\`\`\`

### Pick<T, K>

Create a type by picking specific properties:

\`\`\`typescript
type UserPreview = Pick<User, 'name' | 'email'>;
\`\`\`

## Discriminated Unions

Create type-safe state machines:

\`\`\`typescript
type LoadingState = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };

function handleState(state: LoadingState) {
  switch (state.status) {
    case 'idle':
      return 'Not started';
    case 'loading':
      return 'Loading...';
    case 'success':
      return state.data; // TypeScript knows data exists
    case 'error':
      return state.error.message; // TypeScript knows error exists
  }
}
\`\`\`

## Const Assertions

Use \`as const\` for literal types:

\`\`\`typescript
const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const;

type Route = typeof routes[keyof typeof routes];
// Route = '/' | '/about' | '/contact'
\`\`\`

## Conclusion

These TypeScript patterns will help you write more robust and maintainable code. Start incorporating them into your projects today!
  `,
};
