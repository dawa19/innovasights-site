import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2, ArrowRight, Shield, AlertTriangle, Lock, Filter } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function EmailSecurity() {
  const technologies = [
    {
      name: "Cisco Email Security",
      description: "Advanced threat defense for email with reputation filtering, malware scanning, and outbreak intelligence"
    },
    {
      name: "Fortinet FortiMail",
      description: "Comprehensive email security gateway with anti-spam, anti-malware, and data loss prevention"
    },
    {
      name: "Kaspersky Security for Mail",
      description: "Multi-layered email protection with anti-phishing, anti-spam, and advanced malware detection"
    },
    {
      name: "Microsoft Defender for Office 365",
      description: "Cloud-native email security integrated with M365 including Safe Links and Safe Attachments"
    }
  ];

  const services = [
    {
      icon: Filter,
      title: "Email Gateway Security",
      items: [
        "Anti-spam and anti-phishing protection",
        "SPF, DKIM, and DMARC implementation",
        "IP and domain reputation filtering",
        "Greylisting and rate limiting",
        "Attachment and content filtering"
      ]
    },
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      items: [
        "Sandboxing for suspicious attachments",
        "URL rewriting and safe link protection",
        "Impersonation protection",
        "Business Email Compromise (BEC) detection",
        "Zero-day threat protection"
      ]
    },
    {
      icon: Lock,
      title: "Data Loss Prevention",
      items: [
        "Outbound email scanning and filtering",
        "Sensitive data detection (PII, PCI, PHI)",
        "Email encryption for confidential data",
        "Policy-based content blocking",
        "Compliance reporting and auditing"
      ]
    },
    {
      icon: Mail,
      title: "Email Continuity",
      items: [
        "Email archiving and retention",
        "Business continuity during outages",
        "Email quarantine management",
        "User self-service portal",
        "Comprehensive reporting and analytics"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Email Environment Assessment",
      description: "Analyze current email infrastructure, threat landscape, spam/phishing rates, and compliance requirements."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Design email security architecture including gateway placement, MX record changes, and policy structure."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy email security gateway, configure spam/malware filters, set up DLP policies, and integrate with mail servers."
    },
    {
      step: "04",
      title: "Policy Configuration",
      description: "Fine-tune filtering policies, whitelist/blacklist management, and configure user quarantine access."
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Comprehensive testing of email flow, spam detection, malware blocking, and DLP policies."
    },
    {
      step: "06",
      title: "Ongoing Optimization",
      description: "Monitor effectiveness, tune filters to reduce false positives, and provide user support."
    }
  ];

  const threats = [
    {
      name: "Phishing Attacks",
      description: "Fake emails designed to steal credentials or sensitive information"
    },
    {
      name: "Spear Phishing",
      description: "Targeted attacks against specific individuals or organizations"
    },
    {
      name: "Business Email Compromise",
      description: "Impersonation of executives or vendors to initiate fraudulent transfers"
    },
    {
      name: "Malware & Ransomware",
      description: "Malicious attachments or links delivering ransomware or trojans"
    },
    {
      name: "Spam & Bulk Email",
      description: "Unwanted commercial emails that waste time and resources"
    },
    {
      name: "Data Leakage",
      description: "Accidental or malicious transmission of confidential information"
    }
  ];

  const benefits = [
    "99%+ spam and phishing detection rate",
    "Protection against zero-day threats and malware",
    "Reduced risk of business email compromise",
    "Compliance with data protection regulations",
    "Improved employee productivity",
    "Reduced IT help desk burden",
    "Email continuity during outages",
    "Comprehensive audit trails and reporting"
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Legal & Professional Services",
    "Government",
    "Manufacturing",
    "Education",
    "Retail",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Email Protection
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Email & Messaging Security</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Email remains the most common attack vector. We deliver advanced email security services that block phishing, malware, and data leaks before they reach your users. Our solutions safeguard both on-premises and cloud-based email systems.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Secure Your Email
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1526554850534-7c78330d5f90?w=800" 
                alt="Email Security"
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Email-Based Threats</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Over 90% of cyberattacks start with email - protect your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{threat.name}</h3>
                  <p className="text-slate-600">{threat.description}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Enterprise Email Security Solutions</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading platforms for comprehensive email protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-t-4 border-t-green-600">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Email Security Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-600 rounded-lg">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Implementation Process</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-green-600">{item.step}</div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </div>
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
      <section className="py-20 bg-gradient-to-br from-green-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stop Email Threats Before They Reach Your Users
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Deploy enterprise-grade email security to protect your organization from phishing, malware, and data loss
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Secure Your Email Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}