import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, CheckCircle2, ArrowRight, Cable, Building2, Wifi, FileText } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function PassiveNetworkServices() {
  const process = [
    {
      step: "01",
      title: "Site Survey & Assessment",
      description: "Comprehensive evaluation of your facility, existing infrastructure, and future needs. We document current conditions and identify requirements."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Create detailed cabling design with CAD drawings, specifications, and compliance with TIA/EIA standards. Plan pathways, cable routes, and termination points."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional installation of structured cabling infrastructure using certified installers. Proper cable management, labeling, and testing throughout."
    },
    {
      step: "04",
      title: "Testing & Certification",
      description: "Comprehensive testing of all cable runs using industry-standard equipment. Provide test reports and certification documentation."
    },
    {
      step: "05",
      title: "Documentation & Handover",
      description: "Complete as-built drawings, labeling schemes, and maintenance documentation. Knowledge transfer to your IT team."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Future-Ready Infrastructure",
      description: "Scalable cabling that supports current and future bandwidth requirements without costly replacements"
    },
    {
      icon: CheckCircle2,
      title: "Reduced Downtime",
      description: "Professional installation minimizes troubleshooting time and connectivity issues"
    },
    {
      icon: CheckCircle2,
      title: "Standards Compliance",
      description: "Adherence to TIA/EIA standards ensures reliability and manufacturer warranties"
    },
    {
      icon: CheckCircle2,
      title: "Cost Efficiency",
      description: "Proper design and installation reduces long-term maintenance and upgrade costs"
    },
    {
      icon: CheckCircle2,
      title: "Organized Infrastructure",
      description: "Clear labeling and documentation simplifies troubleshooting and modifications"
    },
    {
      icon: CheckCircle2,
      title: "Performance Optimization",
      description: "Quality materials and proper installation techniques ensure maximum network performance"
    }
  ];

  const services = [
    {
      icon: Cable,
      title: "Structured Cabling Systems",
      items: [
        "Category 5e, 6, 6A copper cabling",
        "Single-mode and multi-mode fiber optic cabling",
        "Backbone and horizontal cabling",
        "Patch panel installation and termination"
      ]
    },
    {
      icon: Building2,
      title: "Data Center Cabling",
      items: [
        "Rack and cabinet cabling design",
        "High-density patch panel solutions",
        "Cable management systems",
        "Hot aisle/cold aisle optimization"
      ]
    },
    {
      icon: Wifi,
      title: "Wireless Infrastructure",
      items: [
        "Access point cabling and power (PoE)",
        "Optimal AP placement cabling",
        "Controller and switch connectivity",
        "Outdoor AP weatherproof installations"
      ]
    },
    {
      icon: FileText,
      title: "Documentation Services",
      items: [
        "As-built CAD drawings",
        "Cable labeling and identification",
        "Testing and certification reports",
        "Maintenance and warranty documentation"
      ]
    }
  ];

  const industries = [
    "Corporate Offices & Enterprise",
    "Data Centers & Colocation Facilities",
    "Manufacturing & Industrial",
    "Healthcare & Medical Facilities",
    "Education & Research Institutions",
    "Hospitality & Retail",
    "Government & Public Sector",
    "Financial Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Network Infrastructure
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Passive Network Services</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Building the strong physical foundation for your IT infrastructure with professional structured cabling, connectivity, and physical layouts designed for reliability, scalability, and future growth.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Request a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800" 
                alt="Network Cabling Infrastructure"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                The Foundation of Reliable Connectivity
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our passive network services focus on building a strong physical foundation for your IT infrastructure. We ensure that cabling, connectivity, and physical layouts are designed and implemented to deliver reliability, scalability, and compliance with global standards.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                This creates a future-ready environment that supports high-performance active devices and applications. Whether you're building a new facility or upgrading existing infrastructure, our certified team ensures every cable run meets the highest standards.
              </p>
              <div className="flex items-start gap-3 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <Network className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Standards-Compliant Installation</p>
                  <p className="text-slate-600">All installations follow TIA/EIA-568 and ISO/IEC 11801 standards</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1606318842400-4ba4c7a33f51?w=800" 
                alt="Professional Cable Installation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Passive Network Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive cabling solutions from design to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-900 rounded-lg">
                      <service.icon className="w-8 h-8 text-yellow-500" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Implementation Process</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach ensuring quality at every step
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-yellow-500">{item.step}</div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Benefits of Professional Cabling</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-t-4 border-t-blue-900">
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-yellow-500 mb-4" />
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

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceTestimonial
              testimonial="INNOVASIGHTS delivered a complete structured cabling solution for our new headquarters. Their attention to detail and compliance with industry standards ensured our infrastructure will serve us for years to come."
              author="Ahmed Hassan"
              role="IT Director"
              company="Hassan Allam Properties"
            />
            <ServiceTestimonial
              testimonial="The passive network infrastructure deployed by INNOVASIGHTS has been rock solid. Their documentation and labeling system makes troubleshooting incredibly easy for our team."
              author="Sarah Johnson"
              role="Network Manager"
              company="ICPM Group"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Network Foundation?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our certified team design and deploy a structured cabling infrastructure that meets your needs today and tomorrow
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Schedule a Site Survey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}