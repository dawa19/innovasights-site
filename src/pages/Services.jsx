import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Server, Shield, CheckCircle2, ArrowRight, Brain, Layers } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      id: "ai-services",
      icon: Brain,
      title: "AI Services",
      description: "We help organizations move from AI curiosity to practical adoption. Our AI services focus on readiness, strategy, governance, opportunity discovery, and clear implementation roadmaps that connect AI initiatives to real business outcomes.",
      highlights: [
        "AI readiness and maturity assessment",
        "Business use-case discovery and prioritization",
        "AI strategy, governance, and adoption planning",
        "Roadmaps focused on measurable business impact"
      ],
      cta: "Learn More",
      detailPage: "/AIService"
    },
    {
      id: "niche-application-services",
      icon: Layers,
      title: "Niche Application Services",
      description: "We design focused application concepts for specific operational needs, teams, and industry workflows. These services help organizations define the right tools, automate repetitive work, improve visibility, and build digital solutions around real business processes.",
      highlights: [
        "Specialized workflow and process analysis",
        "Custom portals, dashboards, and internal tools",
        "Application requirements and solution planning",
        "Integration and automation advisory"
      ],
      cta: "Learn More",
      detailPage: "/NicheApplicationServices"
    },
    {
      id: "it-network-services",
      icon: Network,
      title: "IT Network Services",
      description: "We build the physical and active foundations of reliable connectivity. Our network services cover structured cabling, fiber, wireless infrastructure, LAN/WAN design, switching, routing, segmentation, high availability, and performance optimization.",
      highlights: [
        "Structured cabling, fiber, and data center cabling",
        "LAN/WAN and wireless infrastructure design",
        "Switching, routing, VLANs, QoS, and segmentation",
        "Testing, documentation, optimization, and support"
      ],
      cta: "Learn More",
      detailPage: "/ITNetworkServices"
    },
    {
      id: "it-system-administration-services",
      icon: Server,
      title: "IT System Administration Services",
      description: "We manage the core systems that keep businesses running. Our system administration services include servers, virtualization, Microsoft 365, storage, backup, disaster recovery, monitoring, and ongoing operational support.",
      highlights: [
        "Windows, virtualization, and Microsoft 365 administration",
        "Storage architecture, replication, and capacity planning",
        "Backup, recovery, and disaster recovery planning",
        "Performance monitoring, maintenance, and support"
      ],
      cta: "Learn More",
      detailPage: "/ITSystemAdministrationServices"
    },
    {
      id: "it-security-services",
      icon: Shield,
      title: "IT Security Services",
      description: "We protect networks, users, endpoints, applications, and communications through layered security services. This includes firewall and perimeter protection, endpoint security, email security, monitoring, policy management, and penetration testing with clear remediation guidance.",
      highlights: [
        "Firewall, VPN, threat prevention, and perimeter security",
        "Endpoint protection, EDR/XDR, and device control",
        "Email security against phishing, malware, and impersonation",
        "Penetration testing, assessment, and remediation planning"
      ],
      cta: "Learn More",
      detailPage: "/ITSecurityServices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
              Insights, Innovation and Impact
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our AI consultancy, niche application, network, system administration, and IT security services—built to connect insights, innovation, and impact
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Structured around the services clients need most: AI consultancy, niche applications, network foundations, system administration, and IT security including penetration testing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card id={service.id} key={index} className="scroll-mt-32 bg-white hover:shadow-xl transition-all border-t-4 border-t-blue-900">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.detailPage}>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      {service.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Insights, Innovation and Impact?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Partner with us to shape your AI strategy, niche applications, IT foundations, and security roadmap with confidence
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}