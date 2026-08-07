import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";

export default function About() {
  const timeline = [
    {
      year: "2025–Present",
      title: "Customer Engineer",
      company: "Plenful",
      description:
        "Own the technical relationship for strategic enterprise accounts, from pre-sales through onboarding and expansion. Built production AI tools for SQL automation and compliance support, quantifying $10M+ in recoverable revenue for customers.",
    },
    {
      year: "2023–2025",
      title: "Business Application Specialist",
      company: "Partners Group",
      description:
        "Built and maintained ETL pipelines in Python and SQL on regulated financial data platforms; automated high-volume workflows and drove adoption of internal data systems.",
    },
    {
      year: "2020–2023",
      title: "Senior Trader",
      company: "Gelber Group",
      description:
        "Built Python systems for execution analytics, risk, and performance reporting; automated recurring data workflows and cut per-trader transaction costs 25%.",
    },
  ];

  const skills = [
    // Languages & Data
    "Python",
    "SQL",
    "Bash",
    "HTML",
    // Platforms & Tools
    "AWS",
    "GitLab",
    "Jira",
    "Confluence",
    "ServiceNow",
    "Control-M",
    "Excel",
    // Focus Areas
    "Data Automation",
    "Data Visualization"
  ];

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-about-heading">
            About Me
          </h1>
        </AnimatedSection>

        <div className="space-y-12">
          <AnimatedSection delay={100}>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm a former trader turned technologist, now working as a Customer Engineer at Plenful. I enjoy taking on complex problems and building practical, data-driven tools to solve them.
              </p>
              <p className="text-muted-foreground">
                Outside of work, you'll usually find me outdoors—climbing, training Brazilian jiu-jitsu, or skiing in the Rockies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8" data-testid="text-timeline-heading">
                Professional Timeline
              </h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <AnimatedSection key={index} delay={300 + index * 100}>
                    <Card className="p-6" data-testid={`card-timeline-${index}`}>
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="text-sm font-medium text-primary min-w-[140px]">
                          {item.year}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <div className="text-muted-foreground mb-2">{item.company}</div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills &amp; Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <Card
                    key={skill}
                    className="p-4 text-center hover-elevate transition-all duration-200"
                  >
                    <span className="font-medium">{skill}</span>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
