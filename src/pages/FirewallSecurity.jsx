import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, Lock, Activity, Network, AlertTriangle } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function FirewallSecurity() {
  const technologies = [
    {
      name: "Cisco Firepower",
      description: "Next-generation threat-focused security with integrated IPS, AMP, and URL filtering"
    },
    {
      name: "Fortinet FortiGate",
      description: "High-performance NGFW with SD-WAN, advanced threat protection, and unified management"
    },
    {
      name: "Palo Alto Networks",
      description: "Industry-leading next-generation firewalls with App-ID, User-ID, and threat prevention"
    },
    {
      name: "Sophos XG Firewall",
      description: "Synchronized security platform with deep learning malware detection and web filtering"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "NGFW Deployment",
      items: [
        "Next-generation firewall selection and sizing",
        "Multi-zone security architecture design",
        "High availability and clustering",
        "Performance tuning and optimization",
        "Migration from legacy firewalls"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Threat Prevention",
      items: [
        "Intrusion Prevention System (IPS) configuration",
        "Advanced malware protection",
        "Botnet and C&C blocking",
        "Zero-day threat protection",
        "Threat intelligence integration"
      ]
    },
    {
      icon: Lock,
      title: "VPN & Remote Access",
      items: [
        "Site-to-site VPN tunnels",
        "SSL/IPSec remote access VPN",
        "Multi-factor authentication integration",
        "Secure mobile access",
        "Split tunneling configuration"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring & Management",
      items: [
        "Real-time traffic monitoring",
        "Security event logging and analysis",
        "Compliance reporting",
        "Policy optimization",
        "24/7 SOC integration"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Security Assessment",
      description: "Evaluate current security posture, traffic patterns, threats, and compliance requirements to identify gaps."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design firewall architecture with proper zone segmentation, policy structure, and redundancy mechanisms."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy firewall hardware/virtual appliances, configure security policies, NAT, routing, and VPN."
    },
    {
      step: "04",
      title: "Policy Migration",
      description: "Carefully migrate existing firewall rules, test functionality, and ensure business continuity."
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Comprehensive testing of security policies, failover scenarios, and threat prevention capabilities."
    },
    {
      step: "06",
      title: "Ongoing Management",
      description: "Continuous monitoring, firmware updates, policy refinement, and threat response."
    }
  ];

  const benefits = [
    {
      title: "Advanced Threat Protection",
      description: "Multi-layered security protects against modern threats including ransomware and zero-day attacks"
    },
    {
      title: "Application Visibility",
      description: "Deep packet inspection provides complete visibility into application usage and user behavior"
    },
    {
      title: "Regulatory Compliance",
      description: "Meet PCI DSS, HIPAA, SOX, and other compliance requirements with proper controls"
    },
    {
      title: "Secure Remote Access",
      description: "Enable secure work-from-anywhere with encrypted VPN and multi-factor authentication"
    },
    {
      title: "Business Continuity",
      description: "High availability configurations ensure security protection never stops"
    },
    {
      title: "Centralized Management",
      description: "Single pane of glass for managing security policies across multiple locations"
    }
  ];

  const threatTypes = [
    "Malware & Ransomware",
    "Phishing & Social Engineering",
    "SQL Injection & XSS",
    "DDoS Attacks",
    "Zero-Day Exploits",
    "Botnet Activity",
    "Data Exfiltration",
    "Insider Threats"
  ];

  const industries = [
    "Financial Services & Banking",
    "Healthcare & Medical",
    "Government & Defense",
    "Critical Infrastructure",
    "Retail & E-commerce",
    "Professional Services",
    "Manufacturing",
    "Education"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Perimeter Security
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Firewall & Perimeter Security</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The firewall is the first line of defense against cyber threats. We deploy next-generation firewalls and intrusion prevention technologies that provide deep visibility and granular control over your network traffic.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Strengthen Your Defenses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800" 
                alt="Cybersecurity"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Protecting Against Modern Threats</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Today's threat landscape requires advanced protection beyond traditional firewalls
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {threatTypes.map((threat, index) => (
              <Card key={index} className="bg-gradient-to-br from-red-50 to-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <p className="font-semibold text-slate-900">{threat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Enterprise Firewall Solutions</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading next-generation firewall platforms we deploy and manage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-t-4 border-t-red-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{tech.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Firewall Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Deployment Process</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
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

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Benefits</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-t-4 border-t-red-600">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-yellow-500 mb-4" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Protect</h2>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Feedback</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceTestimonial
              testimonial="INNOVASIGHTS deployed next-generation firewalls that dramatically improved our security posture. Their detailed policy design and migration planning ensured zero downtime during implementation."
              author="Robert Williams"
              role="Security Manager"
              company="Cemento"
            />
            <ServiceTestimonial
              testimonial="The firewall solution has given us complete visibility into our network traffic. INNOVASIGHTS' ongoing management and optimization keeps us protected against evolving threats."
              author="Nadia Hussein"
              role="CISO"
              company="Konecta"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Protect Your Network from Cyber Threats
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Don't leave your business vulnerable. Deploy enterprise-grade firewall protection today
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Request Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}