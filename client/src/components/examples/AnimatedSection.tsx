import { AnimatedSection } from '../AnimatedSection';

export default function AnimatedSectionExample() {
  return (
    <div className="p-8 space-y-8">
      <AnimatedSection>
        <div className="p-6 bg-card border rounded-lg">
          <h2 className="text-2xl font-bold mb-2">First Section</h2>
          <p className="text-muted-foreground">This section fades in when scrolled into view.</p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <div className="p-6 bg-card border rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Second Section</h2>
          <p className="text-muted-foreground">This section has a 200ms delay.</p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <div className="p-6 bg-card border rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Third Section</h2>
          <p className="text-muted-foreground">This section has a 400ms delay.</p>
        </div>
      </AnimatedSection>
    </div>
  );
}
