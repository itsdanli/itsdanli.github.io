import { useState } from "react";
import { Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Formspree form ID from environment variable
// Set VITE_FORMSPREE_ID in your .env file or deployment environment
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // If Formspree is configured, use it; otherwise show demo message
      if (!FORMSPREE_FORM_ID) {
        // Demo mode - just show success message
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        toast({
          title: "Demo Mode",
          description: "Form submission works! Set VITE_FORMSPREE_ID environment variable to enable real email delivery.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Real Formspree submission
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus("success");
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error(data.error || "Form submission failed");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-heading">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose leading-relaxed">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === "success" && (
                <Alert className="bg-primary/10 border-primary/20">
                  <AlertDescription className="text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert variant="destructive">
                  <AlertDescription className="text-sm">
                    Failed to send message. Please try emailing me directly.
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground mb-1">Email</div>
                      <a
                        href="mailto:dli1@outlook.com"
                        className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                        data-testid="link-email"
                      >
                        dli1@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
