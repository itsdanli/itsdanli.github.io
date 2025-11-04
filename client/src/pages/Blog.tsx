import { BlogPostCard } from "@/components/BlogPostCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <main id="main-content" className="flex-1">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-blog-heading">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose leading-relaxed mb-6">
              Thoughts on web development, software engineering, and technology.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedTag === null ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
                data-testid="badge-tag-all"
              >
                All Posts
              </Badge>
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                  data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 100}>
              <BlogPostCard post={post} />
            </AnimatedSection>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No posts found with the selected tag.
          </div>
        )}
      </div>
    </main>
  );
}
