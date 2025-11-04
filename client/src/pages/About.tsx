import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";

export default function About() {
  const timeline = [
    {
      year: "2025–Present",
      title: "Technical Customer Success Manager",
      company: "Plenful",
      description:
        "Own the technical relationship for 8+ enterprise health systems. Design Python/SQL automations and visualizations that expand 340B claims audit coverage to ~100%, reduce manual review, and surface missed revenue ($500k+ identified). Translate requirements into scalable, production-ready workflows.",
    },
    {
      year: "2023–2025",
      title: "Application Operations Engineer",
      company: "Partners Group",
      description:
        "Automated complex ETL processes with Python and SQL; drove durable fixes via root-cause analysis in ServiceNow. Led user training and authored platform documentation to improve adoption of the eFront ecosystem.",
    },
    {
      year: "2020–2023",
      title: "Trader",
      company: "Gelber Group",
      description:
        "Built a Python backtesting engine and analytics dashboards to optimize hedge ratios and execution; reduced transaction costs and accelerated data-driven decision making for the team.",
    },
  ];

  const skills = [
    // Languages & Data
    "Python",
    "SQL (Postgres, MS SQL Server)",
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
                I’m <strong>Dan Li</strong>, a <strong>Technical Customer Success Manager at Plenful</strong>. I design and implement
                Python/SQL data automations and visualization pipelines that improve 340B compliance and operational efficiency
                for enterprise health systems.
              </p>
              <p className="text-muted-foreground">
                My background spans finance and automation—trading equity futures at Gelber Group, then building ETL automation
                and platform operations at Partners Group. Across roles, I focus on translating complex requirements into reliable,
                scalable systems that create measurable impact.
              </p>
              <p className="text-muted-foreground">
                Current interests: expanding audit coverage with deterministic rule engines, reducing manual review time with
                clear exception surfacing, and tightening feedback loops between end users, product, and engineering.
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
