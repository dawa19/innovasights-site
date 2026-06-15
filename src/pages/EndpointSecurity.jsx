import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle2, ArrowRight, Laptop, Smartphone, Shield, Activity } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function EndpointSecurity() {
  const technologies = [
    {
      name: "Kaspersky Endpoint Security",
      description: "Multi-layered protection with machine learning, behavior analysis, and exploit prevention for on-premises and cloud deployments"
    },
    {
      name: "EDR/XDR Solutions",
      description: "Advanced Endpoint Detection and Response with threat hunting, forensics, and automated incident response capabilities"
    },
    {
      name: "Microsoft Defender",
      description: "Cloud-native endpoint protection integrated with M365 ecosystem and Azure security services"
    },
    {
      name: "Mobile Device Management",
      description: "Comprehensive mobile security and management for iOS, Android, and Windows devices"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "Endpoint Protection Platform",
      items: [
        "Next-gen anti-virus and anti-malware",
        "Real-time threat detection and blocking",
        "Machine learning-based protection",
        "Ransomware protection and remediation",
        "Exploit prevention and HIPS"
      ]
    },
    {
      icon: Activity,
      title: "EDR/XDR Capabilities",
      items: [
        "Continuous endpoint monitoring",
        "Behavioral analysis and anomaly detection",
        "Threat hunting and investigation",
        "Automated incident response",
        "Forensic data collection"
      ]
    },
    {
      icon: Lock,
      title: "Device Control",
      items: [
        "USB and peripheral device management",
        "Application whitelisting/blacklisting",
        "Web filtering and content control",
        "Data encryption (disk and file-level)",
        "Device lockdown policies"
      ]
    },
    {
      icon: Laptop,
      title: "Patch & Vulnerability Management",
      items: [
        "Automated patch deployment",
        "Vulnerability scanning and assessment",
        "Third-party application patching",
        "Compliance reporting",
        "Remediation workflow management"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Endpoint Assessment",
      description: "Inventory all endpoints, assess current security posture, and identify vulnerabilities and compliance gaps."
    },
    {
      step: "02",
      title: "Solution Selection",
      description: "Choose appropriate endpoint security platform based on requirements, budget, and existing infrastructure."
    },
    {
      step: "03",
      title: "Deployment Planning",
      description: "Design deployment strategy, create security policies, and plan rollout to minimize business disruption."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Deploy endpoint agents, configure policies, integrate with SIEM/SOC, and validate protection mechanisms."
    },
    {
      step: "05",
      title: "User Training",
      description: "Educate end users on security best practices and proper response to security alerts."
    },
    {
      step: "06",
      title: "Continuous Management",
      description: "Monitor threats, update signatures, tune policies, and provide ongoing support and optimization."
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Protection",
      description: "Multi-layered defense protects against malware, ransomware, zero-day exploits, and advanced threats"
    },
    {
      title: "Visibility & Control",
      description: "Complete visibility into endpoint activity with centralized management and reporting"
    },
    {
      title: "Rapid Response",
      description: "Automated threat detection and response minimizes dwell time and reduces impact"
    },
    {
      title: "Compliance Support",
      description: "Meet regulatory requirements with proper endpoint controls, encryption, and audit trails"
    },
    {
      title: "Reduced Attack Surface",
      description: "Patch management and vulnerability remediation close security gaps before exploitation"
    },
    {
      title: "Flexible Deployment",
      description: "On-premises, cloud, or hybrid deployment options to fit your infrastructure"
    }
  ];

  const threatTypes = [
    "Ransomware & Crypto-lockers",
    "Fileless Malware",
    "Zero-Day Exploits",
    "Phishing & Spear-Phishing",
    "Trojans & Backdoors",
    "Rootkits & Bootkits",
    "Keyloggers & Spyware",
    "Advanced Persistent Threats"
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Government",
    "Retail & E-commerce",
    "Professional Services",
    "Manufacturing",
    "Education",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Endpoint Protection
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Endpoint Security</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Every device connected to your network is a potential entry point for attackers. Our endpoint solutions protect servers, desktops, laptops, and mobile devices with modern EDR/XDR platforms that prevent malware, ransomware, and insider threats.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Secure Your Endpoints
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800" 
                alt="Endpoint Security"
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Endpoint Threats We Defend Against</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Modern endpoint security must protect against sophisticated and evolving threats
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {threatTypes.map((threat, index) => (
              <Card key={index} className="bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Lock className="w-10 h-10 text-orange-600 mx-auto mb-3" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Enterprise Endpoint Solutions</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced protection platforms for on-premises and cloud deployments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-t-4 border-t-orange-600">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Endpoint Security Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-600 rounded-lg">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Deployment Methodology</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-orange-600">{item.step}</div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Endpoint Security Matters</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-t-4 border-t-orange-600">
                <CardContent className="p-6">
                  <Smartphone className="w-12 h-12 text-yellow-500 mb-4" />
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Protect Every Device in Your Organization
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Deploy comprehensive endpoint security to defend against modern threats
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Get Protected Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}