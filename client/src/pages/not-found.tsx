import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-16 text-center">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 text-muted-foreground" data-testid="text-404">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-not-found-heading">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild data-testid="button-go-home">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" data-testid="button-go-back">
            <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
