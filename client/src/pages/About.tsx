import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";

export default function About() {
  const timeline = [
    {
      year: "2025–Present",
      title: "Forward Deployed Engineer",
      company: "Plenful",
      description:
        "Own discovery through production deployment for 10 enterprise health-system accounts, as sole technical owner of 6 automation solutions built from scratch. Took one health system's audit coverage from under 1% to 100% of claims, built Plenful's first virtual inventory engine for Medicare drug price disputes, and confirmed $10M+ in recoverable revenue for customers.",
    },
    {
      year: "2023–2025",
      title: "Business Application Specialist",
      company: "Partners Group",
      description:
        "Built and maintained production ETL pipelines in Python and SQL (Snowflake, T-SQL) on regulated financial data; traced recurring data failures to root cause and automated high-volume manual workflows for operations and technology teams.",
    },
    {
      year: "2020–2023",
      title: "Senior Trader",
      company: "Gelber Group",
      description:
        "Built Python systems for execution analytics, real-time P&L and risk dashboards, and performance reporting; re-engineered execution logic to cut per-trader transaction costs 25% and automated 80% of recurring data workflows.",
    },
  ];

  const skills = [
    // Languages & Data
    "Python",
    "SQL",
    "Postgres",
    "Snowflake",
    "T-SQL",
    "ETL Pipelines",
    "Data Reconciliation",
    // Delivery & Domain
    "Technical Discovery",
    "Solution Design",
    "Production Deployment",
    "Healthcare Claims Data",
    // Tools & Certifications
    "AWS Cloud Practitioner",
    "Jira",
    "Confluence",
    "Gong"
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
                I'm a former trader turned technologist, now a Forward Deployed Engineer at Plenful, where I turn messy enterprise healthcare data into production automation for health systems. I enjoy taking on complex problems and building practical, data-driven tools to solve them.
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
