import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, CheckCircle2, ArrowRight, Network, Shield, Activity, Layers } from 'lucide-react';
import VendorSlider from '../components/VendorSlider';

export default function ActiveNetworkServices() {
  const technologies = [
    {
      vendor: "Cisco",
      description: "Industry-leading switches, routers, and wireless solutions for enterprise networks"
    },
    {
      vendor: "Aruba Networks",
      description: "Advanced wireless LAN controllers and access points with AI-powered management"
    },
    {
      vendor: "Juniper Networks",
      description: "High-performance routing and switching for demanding network environments"
    },
    {
      vendor: "Fortinet",
      description: "Integrated security and networking solutions with SD-WAN capabilities"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Network Assessment",
      description: "Evaluate current infrastructure, traffic patterns, bandwidth requirements, and business objectives to understand your unique needs."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Create detailed network topology with redundancy, segmentation, QoS policies, and security zones aligned with best practices."
    },
    {
      step: "03",
      title: "Equipment Procurement",
      description: "Source enterprise-grade switches, routers, wireless controllers, and access points from leading vendors."
    },
    {
      step: "04",
      title: "Configuration & Deployment",
      description: "Configure devices according to design specifications, implement VLANs, routing protocols, and wireless profiles."
    },
    {
      step: "05",
      title: "Testing & Optimization",
      description: "Comprehensive testing of connectivity, performance, failover scenarios, and fine-tuning for optimal operation."
    },
    {
      step: "06",
      title: "Monitoring & Support",
      description: "Proactive network monitoring, performance analysis, and ongoing optimization to ensure continued reliability."
    }
  ];

  const services = [
    {
      icon: Network,
      title: "LAN/WAN Design & Deployment",
      items: [
        "Core, distribution, and access layer design",
        "Enterprise-grade switch configuration",
        "Router deployment and WAN optimization",
        "Inter-site connectivity and MPLS"
      ]
    },
    {
      icon: Wifi,
      title: "Wireless Infrastructure",
      items: [
        "Wireless site surveys and heat mapping",
        "Controller-based WLAN architecture",
        "Access point deployment and tuning",
        "Guest network and captive portal setup"
      ]
    },
    {
      icon: Layers,
      title: "Network Segmentation",
      items: [
        "VLAN design and implementation",
        "Quality of Service (QoS) policies",
        "Traffic prioritization and shaping",
        "Microsegmentation for security"
      ]
    },
    {
      icon: Activity,
      title: "High Availability",
      items: [
        "Redundant switch stacking",
        "Router failover (HSRP/VRRP)",
        "Load balancing configuration",
        "Link aggregation (LACP)"
      ]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Performance",
      description: "Optimized network architecture ensures fast, reliable connectivity for business-critical applications"
    },
    {
      title: "Scalability",
      description: "Modular design allows easy expansion as your business grows without major infrastructure changes"
    },
    {
      title: "Security Built-In",
      description: "Network segmentation, access controls, and security policies protect against threats"
    },
    {
      title: "Business Continuity",
      description: "Redundant paths and failover capabilities minimize downtime and ensure operations continue"
    },
    {
      title: "Simplified Management",
      description: "Centralized controllers and management platforms provide visibility and control"
    },
    {
      title: "Cost Efficiency",
      description: "Proper design reduces operational costs and extends equipment lifecycle"
    }
  ];

  const industries = [
    "Enterprise Corporate Networks",
    "Manufacturing & Industrial",
    "Healthcare Facilities",
    "Education Campuses",
    "Retail & Hospitality",
    "Financial Services",
    "Government Agencies",
    "Multi-Site Organizations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Active Network Infrastructure
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Active Network Services</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Secure, high-performing, and flexible network infrastructure from switches and routers to wireless solutions. We design, deploy, and optimize the active components that keep your business connected, resilient, and ready for growth.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Discuss Your Network Needs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800" 
                alt="Network Equipment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Slider */}
      <VendorSlider />

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Enterprise-Grade Technologies</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We partner with industry-leading vendors to deliver reliable, scalable network solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-cyan-50 hover:shadow-xl transition-shadow border-l-4 border-l-cyan-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{tech.vendor}</h3>
                  <p className="text-slate-600 leading-relaxed">{tech.description}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Network Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-600 rounded-lg">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Deployment Process</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-cyan-600">{item.step}</div>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Active Network Solutions</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-t-4 border-t-cyan-600">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
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
      <section className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Network Infrastructure
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Partner with our experts to design and deploy a high-performance network that powers your business
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}