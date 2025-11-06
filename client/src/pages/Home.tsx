import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <AnimatedSection className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              Hi, I'm Dan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8" data-testid="text-hero-subtitle">
            
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" data-testid="button-view-projects">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-read-blog">
                <Link href="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-prose">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-about-heading">
              About Me
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
<p>
  I’m a former trader turned technologist currently focused on improving healthcare systems. 
  After a (fortunate) early-stage cancer diagnosis, I experienced firsthand how opaque and fragmented the U.S. healthcare system can be. 
  Motivated to make a difference, I’ve been applying my analytical and technical background to help make these systems more transparent and effective for patients and providers alike.
</p>
<p>
  Outside of work, you’ll usually find me outdoors—climbing, training Brazilian jiu-jitsu, or skiing in the Rockies.
</p>

            </div>
            <div className="mt-8">
              <Button asChild variant="outline" data-testid="button-learn-more">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
