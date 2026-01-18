import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Server, Shield, CheckCircle2, Database, Globe, Lock, HardDrive, Mail, Wifi, ArrowRight, ExternalLink, Zap, Target } from 'lucide-react';

export default function Services() {
  const coreServices = [
    {
      icon: Network,
      title: "Passive Network Services",
      description: "Building a strong physical foundation for your IT infrastructure with cabling, connectivity, and physical layouts designed for reliability and scalability.",
      highlights: [
        "Structured cabling (Copper & Fiber)",
        "Data center cabling",
        "Wireless access point cabling",
        "Site surveys & documentation"
      ],
      detailPage: "PassiveNetworkServices"
    },
    {
      icon: Wifi,
      title: "Active Network Services",
      description: "Secure, high-performing, and flexible network infrastructure ensuring your business stays connected, resilient, and ready for growth.",
      highlights: [
        "LAN & WAN design and deployment",
        "Switches and routers configuration",
        "Wireless LAN design and optimization",
        "Network segmentation & monitoring"
      ],
      detailPage: "ActiveNetworkServices"
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Managing physical and virtual servers to ensure security, efficiency, and scalability for your critical business operations.",
      highlights: [
        "Windows server administration",
        "Active Directory & M365 management",
        "Virtualization (VMware, Hyper-V)",
        "Performance monitoring & tuning"
      ],
      detailPage: "ServerManagement"
    },
    {
      icon: HardDrive,
      title: "Storage & Backup Solutions",
      description: "Efficient storage architectures that are secure, scalable, and cost-optimized while ensuring fast data accessibility.",
      highlights: [
        "SAN, NAS, hybrid storage setup",
        "Storage tiering and replication",
        "Backup solutions & automation",
        "Recovery testing and monitoring"
      ],
      detailPage: "StorageBackup"
    },
    {
      icon: Shield,
      title: "Firewall & Perimeter Security",
      description: "Next-generation firewalls and intrusion prevention technologies providing deep visibility and granular control over network traffic.",
      highlights: [
        "Next-Gen Firewall deployment",
        "IDS/IPS systems",
        "Secure VPN access",
        "Traffic inspection & filtering"
      ],
      detailPage: "FirewallSecurity"
    },
    {
      icon: Lock,
      title: "Endpoint Security",
      description: "Modern EDR/XDR platforms protecting servers, desktops, laptops, and mobile devices from malware, ransomware, and insider threats.",
      highlights: [
        "Advanced endpoint protection (EDR/XDR)",
        "Patch management & vulnerability scanning",
        "Device encryption & access control",
        "On-Premises and Cloud solutions"
      ],
      detailPage: "EndpointSecurity"
    },
    {
      icon: Mail,
      title: "Email & Messaging Security",
      description: "Advanced email security services blocking phishing, malware, and data leaks before they reach your users.",
      highlights: [
        "Email security gateways",
        "Data Loss Prevention (DLP)",
        "Cloud email security for M365",
        "Advanced Threat Protection"
      ],
      detailPage: "EmailSecurity"
    }
  ];

  const specializedServices = [
    {
      icon: CheckCircle2,
      title: "IT Infrastructure & Security Assessment",
      description: "End-to-end evaluation of IT environments, covering networks, servers, storage, and security controls. Identifies risks, inefficiencies, and gaps while providing prioritized recommendations for optimization and compliance.",
      highlights: [
        "Comprehensive infrastructure review",
        "Risk identification and classification",
        "Compliance evaluation",
        "Actionable optimization roadmap"
      ],
      detailPage: "ITAssessment"
    },
    {
      icon: Target,
      title: "Penetration Testing Services",
      description: "Real-world attack simulation to identify and eliminate security vulnerabilities before attackers can exploit them. Professional testing of networks, applications, and cloud infrastructure.",
      highlights: [
        "Network and application testing",
        "Cloud security assessment",
        "Real-world attack simulation",
        "Detailed remediation guidance"
      ],
      detailPage: "PenetrationTesting"
    },
    {
      icon: Globe,
      title: "Service Level Agreements (SLAs)",
      description: "Tailored Tier 2 & Tier 3 support packages designed to augment client IT teams. Advanced troubleshooting and escalation for critical systems with guaranteed response times.",
      highlights: [
        "24/7 advanced support",
        "Guaranteed response times",
        "Dedicated escalation team",
        "Proactive monitoring"
      ],
      detailPage: "ServiceLevelAgreements"
    },
    {
      icon: Database,
      title: "Data Center Relocation Services",
      description: "Specialized support for businesses relocating offices or expanding operations. We plan and execute data center moves to new locations with minimal downtime.",
      highlights: [
        "Detailed migration planning",
        "Minimal business disruption",
        "Seamless system migration",
        "Business continuity safeguarding"
      ],
      detailPage: "DataCenterRelocation"
    }
  ];

  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    cyan: "from-cyan-500 to-cyan-600",
    indigo: "from-indigo-500 to-indigo-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
    orange: "from-orange-500 to-orange-600",
    green: "from-green-500 to-green-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
              Comprehensive IT Solutions
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              End-to-end IT infrastructure services designed to power your business forward with reliability, security, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core IT Capabilities</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive infrastructure and security services for enterprise IT environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all border-t-4 border-t-blue-900">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link to={createPageUrl(service.detailPage)}>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Specialized IT Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic consulting and support services tailored to your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all border-t-4 border-t-blue-900">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link to={createPageUrl(service.detailPage)}>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
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
            Ready to Discuss Your IT Infrastructure Needs?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our team of experts is ready to help you design, deploy, and optimize your IT environment
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