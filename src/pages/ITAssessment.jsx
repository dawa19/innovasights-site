import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Search, FileText, TrendingUp, AlertTriangle, Network, Shield, Server, Wifi } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function ITAssessment() {
  const assessmentDomains = [
    {
      icon: Network,
      title: "Network Performance & Reliability",
      description: "Evaluates wireless, switching, and ISP connectivity to confirm scalability, minimize bottlenecks, and deliver secure, high-performance communication across the business"
    },
    {
      icon: Server,
      title: "Data Center & Infrastructure Resilience",
      description: "Reviews on-premise compute and storage systems for health, efficiency, and lifecycle management, ensuring high availability, optimized resources, and business continuity alignment"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Threat Protection",
      description: "Reviews the organization's defense mechanisms across endpoints, firewalls, and email systems to ensure resilience against vulnerabilities, cyberattacks, and data breaches"
    },
    {
      icon: Wifi,
      title: "Access Control & Physical Security Integration",
      description: "Assesses how access control and surveillance systems connect with IT infrastructure, ensuring secure authentication, reliable monitoring, and uninterrupted video/data transmission"
    }
  ];

  const assessmentAreas = [
    {
      category: "Network Infrastructure",
      items: [
        "Switches and routing performance",
        "Wireless coverage and capacity",
        "ISP connectivity and redundancy",
        "Network segmentation and VLANs",
        "Bandwidth utilization and bottlenecks"
      ]
    },
    {
      category: "Server & Virtualization",
      items: [
        "Physical and virtual server health",
        "Resource utilization and capacity",
        "Virtualization platform assessment",
        "Active Directory and DNS configuration",
        "Backup and disaster recovery"
      ]
    },
    {
      category: "Storage Systems",
      items: [
        "Storage capacity and performance",
        "RAID configuration and redundancy",
        "Backup solution effectiveness",
        "Storage tiering and optimization",
        "Data retention policies"
      ]
    },
    {
      category: "Security Posture",
      items: [
        "Firewall policies and rules review",
        "Endpoint protection status",
        "Email security effectiveness",
        "Patch management compliance",
        "Access control and authentication"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Initial consultation to understand business objectives, critical systems, compliance requirements, and assessment scope."
    },
    {
      step: "02",
      title: "Data Collection",
      description: "Gather configuration files, network diagrams, inventory lists, and access to systems for comprehensive evaluation."
    },
    {
      step: "03",
      title: "Technical Assessment",
      description: "In-depth analysis of network, servers, storage, security controls, and physical infrastructure across all assessment domains."
    },
    {
      step: "04",
      title: "Risk Classification",
      description: "Categorize identified risks by severity (Critical, High, Medium, Low) and likelihood of exploitation."
    },
    {
      step: "05",
      title: "Report Development",
      description: "Comprehensive report with findings, risk ratings, evidence, and detailed recommendations for remediation."
    },
    {
      step: "06",
      title: "Executive Presentation",
      description: "Present findings to stakeholders with actionable roadmap prioritized by business impact and quick wins."
    }
  ];

  const deliverables = [
    "Executive summary with risk overview",
    "Detailed technical findings by domain",
    "Risk classification matrix",
    "Prioritized remediation roadmap",
    "Cost-benefit analysis for improvements",
    "Compliance gap analysis",
    "Best practice recommendations",
    "Implementation timeline and milestones"
  ];

  const benefits = [
    {
      title: "Risk Identification",
      description: "Uncover hidden vulnerabilities and inefficiencies before they cause business disruption or security breaches"
    },
    {
      title: "Compliance Validation",
      description: "Ensure infrastructure meets industry standards and regulatory requirements (PCI DSS, HIPAA, ISO 27001)"
    },
    {
      title: "Cost Optimization",
      description: "Identify underutilized resources, redundant systems, and opportunities for consolidation"
    },
    {
      title: "Strategic Planning",
      description: "Data-driven insights enable better IT budget planning and technology investment decisions"
    },
    {
      title: "Performance Improvement",
      description: "Optimize configurations and eliminate bottlenecks to improve system performance"
    },
    {
      title: "Business Continuity",
      description: "Ensure backup, disaster recovery, and redundancy mechanisms align with business needs"
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Legal & Professional Services",
    "Education",
    "Government",
    "Retail",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Strategic Consulting
              </Badge>
              <h1 className="text-5xl font-bold mb-6">IT Infrastructure & Security Assessment</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                End-to-end evaluation of IT environments, covering networks, servers, storage, and security controls. Identifies risks, inefficiencies, and gaps while providing prioritized recommendations for optimization and compliance.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Request an Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
                alt="IT Assessment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Domains */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Assessment Domains Overview</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive evaluation across all critical IT infrastructure areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {assessmentDomains.map((domain, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-t-4 border-t-blue-600">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-blue-900 rounded-lg">
                      <domain.icon className="w-8 h-8 text-yellow-500" />
                    </div>
                    <CardTitle className="text-xl">{domain.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{domain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Assessment Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Evaluate</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {assessmentAreas.map((area, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{area.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Assessment Methodology</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-blue-600">{item.step}</div>
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

      {/* Deliverables */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Assessment Deliverables</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">{deliverable}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Benefits</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-t-4 border-t-blue-600">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center border-l-4 border-l-yellow-500">
                <p className="font-semibold text-slate-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Assessment Success Stories</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceTestimonial
              testimonial="The IT assessment from INNOVASIGHTS uncovered critical vulnerabilities we weren't aware of. Their detailed roadmap gave us clear priorities and helped secure budget approval for necessary improvements."
              author="Catherine Lee"
              role="VP of Technology"
              company="Manufacturing Company"
            />
            <ServiceTestimonial
              testimonial="INNOVASIGHTS' comprehensive assessment provided invaluable insights into our infrastructure. The prioritized recommendations helped us optimize performance while reducing costs significantly."
              author="Mohammed Rashid"
              role="IT Manager"
              company="Healthcare Provider"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gain Complete Visibility into Your IT Infrastructure
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a comprehensive assessment with actionable recommendations to optimize, secure, and future-proof your infrastructure
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Schedule Your Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}