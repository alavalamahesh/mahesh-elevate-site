import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Menu, X, Mail, Linkedin, FileText, MapPin, Phone } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-bold text-primary hover:text-accent transition-colors"
            >
              Mahesh Alavala
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Competencies", "Highlights", "Experience", "Awards", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {["About", "Competencies", "Highlights", "Experience", "Awards", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-accent transition-colors rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary">
              Mahesh Alavala
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-accent">
              Global ERP & HR Systems Leader
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enterprise Automation & AI Enablement · Digital Transformation
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Bengaluru, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                <a href="mailto:alavalamahesh4@hotmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <a href="https://www.linkedin.com/in/alavala" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <a href="/resume/Mahesh_Alavala_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Résumé
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              {[
                { value: "12+", label: "Years Experience" },
                { value: "10K+", label: "Employees Supported" },
                { value: "30+", label: "Systems Integrated" },
                { value: "99.7%", label: "Uptime / 65% Manual Reduction" },
              ].map((stat, idx) => (
                <Card key={idx} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="competencies" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Core Competencies & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                title: "ERP & Finance Systems",
                items: ["NetSuite (Financials)", "Oracle Fusion HCM/Financials", "SAP Concur (exposure)", "Dynamics 365 (exposure)"],
              },
              {
                title: "HR & Talent Systems",
                items: ["SilkRoad (On/Offboarding)", "ServiceNow (ITSM & Workflows)", "Lever ATS", "Taleo", "Immidart", "SkillPrism"],
              },
              {
                title: "Automation & AI",
                items: ["Power Automate", "N8N", "iPaaS", "REST APIs", "Webhooks", "AI Copilots", "OCR", "Predictive Analytics"],
              },
              {
                title: "Governance & Security",
                items: ["GDPR", "SOX", "ISO27001", "ITGC", "OAuth2.0", "Azure Entra", "Encryption"],
              },
              {
                title: "Leadership & Delivery",
                items: ["Vendor & Stakeholder Management", "RFPs", "SLA & KPI Governance", "Global ERP Operations", "Multi-year Roadmaps"],
              },
            ].map((category, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
            <p className="text-sm font-semibold text-primary mb-3">Keywords:</p>
            <div className="flex flex-wrap gap-2">
              {["NetSuite", "Oracle Fusion", "ServiceNow", "SilkRoad", "Dynamics 365", "SAP Concur", "AI", "Automation", "iPaaS", "GDPR", "SOX", "ISO27001"].map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Highlights */}
      <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Business Value Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Scaled Workforce Efficiency",
                description: "Deployed SilkRoad & Lever ATS; 2× faster hiring; zero downtime during COVID.",
              },
              {
                title: "Operational ROI",
                description: "Rolled out OnTheGo platform; $1M+ annual savings; 90% faster transactions; 6× ROI.",
              },
              {
                title: "Automation Impact",
                description: "AI-led workflows reduced manual work by 65% and doubled delivery speed.",
              },
              {
                title: "M&A Integrations",
                description: "Integrated 4 acquisitions; contributed $80M+ revenue growth and $500K savings.",
              },
            ].map((highlight, idx) => (
              <Card key={idx} className="border-2 hover:border-accent hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "ERP Manager & Systems Integration Architect",
                company: "Brillio",
                period: "2022–Present",
                achievements: [
                  "Own global ERP & HR platforms (NetSuite, Fusion HCM, SilkRoad, ServiceNow, Lever ATS, Immidart) for 10K+ employees.",
                  "AI-led automation (Power Automate, N8N) → 65% manual reduction, 99.7% uptime.",
                  "30+ systems integrated via APIs/iPaaS; audit-ready compliance (GDPR, SOX, ISO27001).",
                  "Led 20+ global professionals; 4 M&A integrations; Employee of the Year (CIO Award).",
                ],
              },
              {
                title: "Associate Specialist — Technology",
                company: "Brillio",
                period: "2020–2022",
                achievements: [
                  "Managed HR & ERP integrations: Fusion HCM, SilkRoad, Lever, NetSuite.",
                  "Automated onboarding/offboarding → 70% faster cycle time; audit-ready governance.",
                ],
              },
              {
                title: "Lead Engineer",
                company: "Brillio",
                period: "2018–2020",
                achievements: [
                  "Built Node.js integrations for Fusion HCM and Taleo; introduced CI/CD and code automation.",
                  "Standardized APIs → 30% faster delivery.",
                ],
              },
              {
                title: "Software Engineer → Engineer",
                company: "Brillio",
                period: "2016–2018",
                achievements: [
                  "Supported Fusion HCM & Taleo integrations/migrations; improved data accuracy by 40%.",
                ],
              },
            ].map((role, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{role.title}</h3>
                      <p className="text-accent font-semibold">{role.company}</p>
                    </div>
                    <span className="text-muted-foreground font-medium mt-2 md:mt-0">{role.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {role.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="text-muted-foreground flex items-start">
                        <span className="text-accent mr-3 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Awards & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Employee of the Year (CIO Award)",
                description: "ERP transformation & automation delivery",
              },
              {
                title: "AI Shark Tank Runner-Up",
                description: "AI-led enterprise automation innovation",
              },
              {
                title: "20+ Business Excellence Awards",
                description: "Reliability, innovation, leadership",
              },
              {
                title: "Value Champion & Brillian of the Quarter",
                description: "High-impact global delivery",
              },
            ].map((award, idx) => (
              <Card key={idx} className="border-2 border-accent/20 hover:border-accent hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{award.title}</h3>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Contact
          </h2>

          <div className="mb-8 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <a href="mailto:alavalamahesh4@hotmail.com" className="hover:text-accent transition-colors">
                alavalamahesh4@hotmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5" />
              <span>+91-9908843412</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Linkedin className="h-5 w-5" />
              <a
                href="https://www.linkedin.com/in/alavala"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                linkedin.com/in/alavala
              </a>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Form powered by Netlify
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© {currentYear} Mahesh Alavala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
