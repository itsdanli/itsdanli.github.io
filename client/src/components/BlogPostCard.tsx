import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@shared/schema";
import { format } from "date-fns";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = format(new Date(post.date), "MMM dd, yyyy");

  return (
    <Link href={`/blog/${post.slug}`} data-testid={`link-post-${post.slug}`}>
      <Card className="hover-elevate transition-all duration-200 cursor-pointer h-full flex flex-col" data-testid={`card-post-${post.slug}`}>
        <CardHeader>
          <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1" data-testid={`text-date-${post.slug}`}>
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1" data-testid={`text-readtime-${post.slug}`}>
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-4">
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
