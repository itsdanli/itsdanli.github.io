import { useRoute, Link } from "wouter";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { blogPosts, blogPostContent } from "@/data/blog-posts";
import { useTheme } from "@/contexts/ThemeContext";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const { theme } = useTheme();
  const slug = params?.slug;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main id="main-content" className="flex-1">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const content = blogPostContent[slug || ""] || "";
  const formattedDate = format(new Date(post.date), "MMMM dd, yyyy");

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <Button variant="ghost" asChild className="mb-8" data-testid="button-back-to-blog">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" data-testid="text-post-title">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-2" data-testid="text-post-date">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-2" data-testid="text-post-readtime">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={theme === "dark" ? oneDark : oneLight}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </AnimatedSection>
      </article>
    </main>
  );
}
