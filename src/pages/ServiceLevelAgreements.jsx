import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Clock, Users, Shield, Activity, Zap, Phone } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function ServiceLevelAgreements() {
  const tiers = [
    {
      name: "Tier 2 Support",
      icon: Users,
      description: "Advanced technical support for complex issues requiring specialized expertise",
      features: [
        "Advanced troubleshooting and diagnosis",
        "Network and infrastructure support",
        "Security incident response",
        "Performance optimization",
        "Escalation from Tier 1 help desk",
        "Remote and on-site support options"
      ],
      responseTime: "4 hours",
      availability: "Business Hours (8x5)",
      idealFor: "Organizations with internal IT teams needing expert backup"
    },
    {
      name: "Tier 3 Support",
      icon: Shield,
      description: "Expert-level support for critical systems and complex technical challenges",
      features: [
        "Architecture and design consultation",
        "Root cause analysis and remediation",
        "Vendor liaison and escalation",
        "Major incident management",
        "Change implementation support",
        "Proactive system monitoring"
      ],
      responseTime: "2 hours",
      availability: "24/7/365",
      idealFor: "Mission-critical environments requiring highest level expertise"
    }
  ];

  const services = [
    {
      icon: Clock,
      title: "Guaranteed Response Times",
      items: [
        "Priority-based ticket routing",
        "Critical issue escalation protocols",
        "SLA compliance monitoring",
        "Response time reporting",
        "After-hours emergency support"
      ]
    },
    {
      icon: Activity,
      title: "Proactive Monitoring",
      items: [
        "24/7 infrastructure monitoring",
        "Performance trend analysis",
        "Capacity planning alerts",
        "Security event monitoring",
        "Automated alert notifications"
      ]
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      items: [
        "Named technical account manager",
        "Consistent engineering team",
        "Knowledge of your environment",
        "Regular health check reviews",
        "Quarterly business reviews"
      ]
    },
    {
      icon: Zap,
      title: "Rapid Issue Resolution",
      items: [
        "Advanced diagnostic tools",
        "Direct vendor support access",
        "Spare equipment availability",
        "On-site engineer dispatch",
        "Emergency change procedures"
      ]
    }
  ];

  const coverage = [
    {
      category: "Network Infrastructure",
      items: [
        "Switches, routers, and wireless",
        "Firewall and security appliances",
        "Load balancers and SD-WAN",
        "VPN and remote access"
      ]
    },
    {
      category: "Server & Virtualization",
      items: [
        "Windows and Linux servers",
        "VMware and Hyper-V",
        "Active Directory and DNS",
        "Application servers"
      ]
    },
    {
      category: "Storage & Backup",
      items: [
        "SAN and NAS systems",
        "Backup solutions",
        "Disaster recovery",
        "Data replication"
      ]
    },
    {
      category: "Security Systems",
      items: [
        "Endpoint protection",
        "Email security",
        "SIEM and logging",
        "Access control systems"
      ]
    }
  ];

  const benefits = [
    {
      title: "Augment IT Teams",
      description: "Extend your internal IT capabilities with expert-level support without full-time hiring costs"
    },
    {
      title: "Predictable Costs",
      description: "Fixed monthly fee provides budget certainty and eliminates surprise emergency support bills"
    },
    {
      title: "Faster Resolution",
      description: "Experienced engineers resolve issues quickly, minimizing downtime and business impact"
    },
    {
      title: "Knowledge Transfer",
      description: "Learn from our experts through collaborative problem-solving and documentation"
    },
    {
      title: "Peace of Mind",
      description: "Know that expert help is always available when critical issues arise"
    },
    {
      title: "Scalable Support",
      description: "Adjust support levels as your business grows or during critical projects"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Environment Assessment",
      description: "Review your infrastructure, document systems, identify critical components, and understand support requirements."
    },
    {
      step: "02",
      title: "SLA Design",
      description: "Design custom SLA package with appropriate tier level, response times, coverage scope, and support hours."
    },
    {
      step: "03",
      title: "Knowledge Transfer",
      description: "Our team learns your environment, documents configurations, and establishes support procedures."
    },
    {
      step: "04",
      title: "Monitoring Setup",
      description: "Deploy monitoring tools, configure alerting, and establish communication protocols."
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Provide continuous support per SLA terms with regular reviews and proactive recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Managed Support
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Service Level Agreements (SLAs)</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tailored Tier 2 & Tier 3 support packages designed to augment client IT teams. We provide advanced troubleshooting and escalation for critical systems across networking, security, and system administration — with guaranteed response and resolution times.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Explore SLA Options
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" 
                alt="IT Support Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Support Tiers</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the level of support that matches your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tiers.map((tier, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-t-4 border-t-emerald-600">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-emerald-600 rounded-lg">
                      <tier.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <p className="text-slate-600 mt-1">{tier.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-slate-500">Response Time</p>
                      <p className="font-bold text-emerald-600">{tier.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Availability</p>
                      <p className="font-bold text-emerald-600">{tier.availability}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-700 mb-1">Ideal For:</p>
                    <p className="text-slate-600">{tier.idealFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What's Included</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-600 rounded-lg">
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

      {/* Coverage Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Coverage</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive support across your entire IT infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coverage.map((area, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-900">{area.category}</CardTitle>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Get Started</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-emerald-600">{item.step}</div>
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
              <Card key={index} className="bg-white border-t-4 border-t-emerald-600">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by IT Teams</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceTestimonial
              testimonial="INNOVASIGHTS' SLA support has been a game-changer for our small IT team. Having Tier 3 expertise on call 24/7 gives us the confidence to handle any situation that arises."
              author="Richard Foster"
              role="IT Director"
              company="Regional Business"
            />
            <ServiceTestimonial
              testimonial="The response times and expertise provided under our SLA agreement consistently exceed expectations. INNOVASIGHTS feels like an extension of our internal team, not just a vendor."
              author="Amira Zaki"
              role="Systems Manager"
              company="Multi-National Corporation"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enhance Your IT Support Capabilities?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's design a custom SLA package that meets your needs and budget
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Discuss Your Requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}