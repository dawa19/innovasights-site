import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, CheckCircle2, ArrowRight, Settings, Cloud, Shield, Activity } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function ServerManagement() {
  const technologies = [
    {
      name: "Windows Server",
      description: "Complete administration of Windows Server environments including Active Directory, DNS, DHCP, and Group Policy management"
    },
    {
      name: "VMware vSphere",
      description: "Enterprise virtualization platform deployment, management, and optimization for maximum resource utilization"
    },
    {
      name: "Microsoft Hyper-V",
      description: "Hyper-V virtualization solutions for cost-effective server consolidation and disaster recovery"
    },
    {
      name: "Microsoft 365",
      description: "M365 ecosystem administration including Exchange Online, SharePoint, Teams, and security configurations"
    }
  ];

  const services = [
    {
      icon: Settings,
      title: "Server Administration",
      items: [
        "Windows Server deployment and configuration",
        "Performance monitoring and optimization",
        "Patch management and security updates",
        "User and permission management",
        "Server health checks and audits"
      ]
    },
    {
      icon: Activity,
      title: "Active Directory Services",
      items: [
        "AD design and implementation",
        "Group Policy management",
        "DNS and DHCP configuration",
        "Single Sign-On (SSO) setup",
        "Directory synchronization"
      ]
    },
    {
      icon: Cloud,
      title: "Virtualization",
      items: [
        "VMware vSphere deployment",
        "Hyper-V cluster configuration",
        "VM lifecycle management",
        "Resource allocation and optimization",
        "Virtual infrastructure monitoring"
      ]
    },
    {
      icon: Shield,
      title: "M365 Administration",
      items: [
        "Exchange Online configuration",
        "SharePoint and OneDrive management",
        "Teams deployment and governance",
        "Security and compliance policies",
        "User provisioning and licensing"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description: "Comprehensive review of existing server environment, workloads, capacity, and performance metrics to identify optimization opportunities."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design optimal server architecture considering redundancy, scalability, resource allocation, and business continuity requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy and configure servers, virtualization platforms, Active Directory, and related services following best practices."
    },
    {
      step: "04",
      title: "Migration & Integration",
      description: "Seamlessly migrate workloads, applications, and data with minimal downtime and integrate with existing systems."
    },
    {
      step: "05",
      title: "Monitoring & Maintenance",
      description: "Proactive monitoring, patch management, performance tuning, and regular health checks to ensure optimal operation."
    }
  ];

  const benefits = [
    "Maximum uptime and business continuity",
    "Optimized resource utilization and cost efficiency",
    "Enhanced security with regular patching and updates",
    "Scalable infrastructure that grows with your business",
    "Centralized management and simplified administration",
    "Disaster recovery and backup capabilities",
    "Compliance with security and regulatory requirements",
    "24/7 monitoring and proactive issue resolution"
  ];

  const industries = [
    "Enterprise Corporations",
    "Financial Services",
    "Healthcare & Medical",
    "Manufacturing",
    "Professional Services",
    "Education",
    "Government",
    "Retail & E-commerce"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                System Administration
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Server Management</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Servers form the core of business IT operations, hosting applications, databases, and critical services. Our experts manage physical and virtual servers to ensure security, efficiency, and scalability.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Optimize Your Servers
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" 
                alt="Server Infrastructure"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technologies We Master</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expertise across leading server and virtualization platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-t-4 border-t-indigo-600">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Server Management</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-600 rounded-lg">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-indigo-600">{item.step}</div>
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
      <section className="py-20">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceTestimonial
              testimonial="INNOVASIGHTS' server management services have been outstanding. Their proactive monitoring caught potential issues before they became problems, and our uptime has never been better."
              author="Omar Khalil"
              role="Infrastructure Manager"
              company="Kellogg's"
            />
            <ServiceTestimonial
              testimonial="The virtualization migration project was handled flawlessly. INNOVASIGHTS optimized our resources and reduced costs while improving performance across all our applications."
              author="Jennifer Martinez"
              role="Systems Administrator"
              company="Boehringer Ingelheim"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Optimize Your Server Infrastructure
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Partner with our certified team to ensure your servers deliver maximum performance and reliability
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