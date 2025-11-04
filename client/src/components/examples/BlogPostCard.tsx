import { BlogPostCard } from '../BlogPostCard';
import type { BlogPostMeta } from '@shared/schema';

export default function BlogPostCardExample() {
  const post: BlogPostMeta = {
    slug: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    description: "A comprehensive guide to building modern React applications with the latest best practices and tools.",
    date: "2025-01-15",
    tags: ["React", "JavaScript", "Web Development"],
    readTime: 8,
  };

  return (
    <div className="p-4 max-w-md">
      <BlogPostCard post={post} />
    </div>
  );
}
