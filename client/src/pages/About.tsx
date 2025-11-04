import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";

export default function About() {
  const timeline = [
    {
      year: "2024-Present",
      title: "Senior Software Engineer",
      company: "Tech Company",
      description: "Leading frontend development and mentoring junior developers.",
    },
    {
      year: "2022-2024",
      title: "Software Engineer",
      company: "Startup Inc.",
      description: "Built and scaled web applications serving thousands of users.",
    },
    {
      year: "2020-2022",
      title: "Junior Developer",
      company: "Digital Agency",
      description: "Developed client websites and learned full-stack development.",
    },
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
                I'm a software engineer with a passion for creating beautiful, performant web
                applications. My journey in tech started with curiosity about how websites work,
                and has evolved into a career focused on building products that make a difference.
              </p>
              <p className="text-muted-foreground">
                I specialize in frontend development with React and TypeScript, but I'm equally
                comfortable working across the full stack. I believe in writing clean, maintainable
                code and creating experiences that users love.
              </p>
              <p className="text-muted-foreground">
                Beyond coding, I'm an advocate for web accessibility, performance optimization,
                and open source. I regularly contribute to open source projects and share my
                knowledge through blog posts and community engagement.
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
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills & Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Next.js",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "Git",
                  "Docker",
                  "AWS",
                ].map((skill, index) => (
                  <Card key={skill} className="p-4 text-center hover-elevate transition-all duration-200">
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
