import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Shield, Search, Target, FileText, Globe, Lock, Users, AlertTriangle } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function PenetrationTesting() {
  const testingTypes = [
    {
      icon: Shield,
      title: "Network Penetration Testing",
      description: "Testing internal and external networks for vulnerabilities that could allow unauthorized access or data exfiltration",
      items: [
        "Firewall and perimeter testing",
        "Server and endpoint exposure",
        "Active Directory & privilege escalation",
        "VPN and remote access security",
        "Lateral movement assessment"
      ]
    },
    {
      icon: Globe,
      title: "Web Application Testing",
      description: "Identifying vulnerabilities in websites, portals, and business applications",
      items: [
        "SQL injection & data leakage",
        "Authentication and session flaws",
        "API vulnerabilities",
        "Business logic abuse",
        "OWASP Top 10 security risks"
      ]
    },
    {
      icon: Lock,
      title: "Cloud & Infrastructure Testing",
      description: "Assessing cloud platforms and private hosting environments for security gaps",
      items: [
        "Misconfigured storage (AWS S3, Azure Blob)",
        "Exposed management interfaces",
        "Insecure identities and permissions",
        "Data exposure risks",
        "Container and orchestration security"
      ]
    },
    {
      icon: Users,
      title: "Social Engineering (Optional)",
      description: "Testing how attackers could exploit human behavior to gain access",
      items: [
        "Phishing simulations",
        "Password harvesting attempts",
        "Unauthorized physical access tests",
        "Employee security awareness",
        "Real employee risk assessment"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Scope & Planning",
      description: "Define exactly what systems will be tested, agree on safe boundaries, establish rules of engagement, and set testing windows."
    },
    {
      step: "02",
      title: "Reconnaissance & Discovery",
      description: "Map exposed systems, identify potential attack paths, gather intelligence, and understand the attack surface."
    },
    {
      step: "03",
      title: "Exploitation & Attack Simulation",
      description: "Attempt to break into systems using real attacker techniques — safely and legally. Test vulnerabilities for exploitability."
    },
    {
      step: "04",
      title: "Risk Validation",
      description: "Verify which vulnerabilities are actually exploitable, not just theoretical. Assess real business impact and data exposure."
    },
    {
      step: "05",
      title: "Detailed Reporting",
      description: "Deliver professional report with risk levels (Critical/High/Medium/Low), technical evidence, business impact, and clear remediation steps."
    },
    {
      step: "06",
      title: "Remediation Support",
      description: "Help your IT team fix identified issues, validate that vulnerabilities are properly closed, and provide retesting as needed."
    }
  ];

  const benefits = [
    {
      title: "Real-World Attack Simulation",
      description: "Unlike automated tools, we think and act like actual attackers to find vulnerabilities that scanners miss"
    },
    {
      title: "Business-Focused Risk Analysis",
      description: "Understand the real business impact of vulnerabilities, not just technical scores"
    },
    {
      title: "Actionable Remediation",
      description: "Clear, prioritized steps to fix issues - not vague recommendations"
    },
    {
      title: "Executive & Technical Reporting",
      description: "Dual-format reports: executive summary for leadership, technical details for IT teams"
    },
    {
      title: "Compliance Support",
      description: "Meet regulatory and audit requirements for security testing (PCI DSS, ISO 27001, SOC 2)"
    },
    {
      title: "Post-Remediation Validation",
      description: "Verify that fixes are effective and vulnerabilities are properly addressed"
    }
  ];

  const whatWeLookFor = [
    "External and internal network exposure",
    "Web and mobile application flaws",
    "Cloud misconfigurations and data leaks",
    "User access and privilege escalation paths",
    "Misconfigurations and exposed services",
    "Weak authentication and password security",
    "Unpatched vulnerabilities",
    "Business logic flaws"
  ];

  const whoNeeds = [
    {
      category: "Organizations Handling Sensitive Data",
      description: "Companies managing customer, financial, or healthcare data that must be protected"
    },
    {
      category: "Public-Facing Systems",
      description: "Businesses with websites, portals, or APIs exposed to the internet"
    },
    {
      category: "Cloud-Hosted Environments",
      description: "Organizations using AWS, Azure, or other cloud platforms"
    },
    {
      category: "ERP & Business Systems",
      description: "Companies running Oracle, SAP, Odoo, or custom business applications"
    },
    {
      category: "Audit & Compliance Preparation",
      description: "Organizations preparing for security audits or regulatory compliance"
    },
    {
      category: "Concerned About Breaches",
      description: "Any business worried about ransomware, data breaches, or insider threats"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Specialized Security Services
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Penetration Testing Services</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We help organizations identify and eliminate security vulnerabilities before attackers can exploit them. Our penetration testing simulates real-world cyberattacks performed by experienced security professionals who think and act like real attackers.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Request Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800" 
                alt="Security Testing"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Critical Question */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Critical Question We Answer</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-600">
              <CardContent className="p-10">
                <Target className="w-16 h-16 text-red-600 mx-auto mb-6" />
                <p className="text-2xl font-bold text-slate-900 mb-4 leading-relaxed">
                  "If an attacker targeted your organization today, could they get in — and what would they reach?"
                </p>
                <p className="text-lg text-slate-600">
                  Our testing goes beyond automated scans to provide real-world attack simulation and business-focused risk analysis.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">What We Assess</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeLookFor.map((item, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700 font-medium">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Types of Penetration Testing</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive testing across all attack surfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testingTypes.map((type, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <p className="text-sm text-slate-600 mt-1">{type.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Our Penetration Testing Works</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured and professional approach to security testing
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-red-600">{item.step}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why INNOVASIGHTS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why INNOVASIGHTS</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We speak both security and business — so risks are understood and fixed, not ignored
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-t-4 border-t-red-600">
                <CardContent className="p-6">
                  <Search className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who Needs Penetration Testing</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Essential security validation for organizations handling sensitive systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoNeeds.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.category}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Results</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceTestimonial
              testimonial="INNOVASIGHTS' penetration testing uncovered critical vulnerabilities in our web application that we had no idea existed. Their detailed report and remediation support helped us fix everything before going live."
              author="Daniel Rodriguez"
              role="Security Manager"
              company="E-commerce Platform"
            />
            <ServiceTestimonial
              testimonial="The testing revealed weak points in our cloud infrastructure that could have led to a major breach. The team's professionalism and expertise gave us confidence in our security posture after remediation."
              author="Hana Khalifa"
              role="IT Security Director"
              company="Financial Services Firm"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Find Your Vulnerabilities Before Attackers Do
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Schedule a penetration test to identify and eliminate security risks across your infrastructure, applications, and cloud environments
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Request Penetration Test
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}