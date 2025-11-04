import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  githubUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
});

export const blogPostMetaSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  coverImage: z.string().optional(),
  readTime: z.number().optional(),
});

export type Project = z.infer<typeof projectSchema>;
export type BlogPostMeta = z.infer<typeof blogPostMetaSchema>;
