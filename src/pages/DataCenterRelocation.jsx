import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Truck, Map, Shield, Clock, FileCheck, Users } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function DataCenterRelocation() {
  const services = [
    {
      icon: Map,
      title: "Planning & Assessment",
      items: [
        "Current environment documentation",
        "Site survey and preparation",
        "Dependency mapping and sequencing",
        "Risk assessment and mitigation",
        "Detailed project timeline"
      ]
    },
    {
      icon: Truck,
      title: "Physical Migration",
      items: [
        "Equipment disconnection and labeling",
        "Secure transportation and handling",
        "Professional packing and insurance",
        "Chain of custody documentation",
        "Equipment tracking and monitoring"
      ]
    },
    {
      icon: FileCheck,
      title: "Technical Migration",
      items: [
        "Pre-migration testing and validation",
        "System backup and verification",
        "Configuration preservation",
        "Application migration coordination",
        "Network reconnection and testing"
      ]
    },
    {
      icon: Shield,
      title: "Business Continuity",
      items: [
        "Minimal downtime planning",
        "Failover and rollback procedures",
        "Communication protocols",
        "User access management",
        "Post-migration support"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Comprehensive assessment of current data center, inventory all equipment, map dependencies, and create detailed migration plan with timeline."
    },
    {
      step: "02",
      title: "Design & Preparation",
      description: "Design new data center layout, prepare infrastructure (power, cooling, cabling), and coordinate with all stakeholders."
    },
    {
      step: "03",
      title: "Pre-Migration Testing",
      description: "Test new facility infrastructure, verify power and cooling, validate network connectivity, and create rollback procedures."
    },
    {
      step: "04",
      title: "Migration Execution",
      description: "Execute move according to plan with proper sequencing, migrate systems in phases, maintain chain of custody, and minimize downtime."
    },
    {
      step: "05",
      title: "Validation & Testing",
      description: "Verify all systems operational, test application functionality, validate network connectivity, and ensure data integrity."
    },
    {
      step: "06",
      title: "Stabilization & Optimization",
      description: "Monitor systems for issues, fine-tune configurations, optimize performance, and provide ongoing support during stabilization period."
    }
  ];

  const challenges = [
    {
      challenge: "Minimal Downtime Required",
      solution: "Phased migration approach with hot standbys and careful sequencing to keep critical systems operational"
    },
    {
      challenge: "Complex Dependencies",
      solution: "Detailed dependency mapping and application-aware migration planning to prevent service disruptions"
    },
    {
      challenge: "Data Integrity Risks",
      solution: "Comprehensive backup strategy, data verification procedures, and rollback capabilities"
    },
    {
      challenge: "Hardware Transportation",
      solution: "Professional packing, secure transportation with insurance, and equipment tracking throughout move"
    },
    {
      challenge: "Staff Coordination",
      solution: "Clear communication plans, defined responsibilities, and 24/7 project management during migration"
    },
    {
      challenge: "Unknown Issues",
      solution: "Contingency planning, extra equipment reserves, and experienced team ready to handle unexpected challenges"
    }
  ];

  const benefits = [
    "Minimal business disruption during relocation",
    "Preserved system configurations and data",
    "Risk mitigation through proper planning",
    "Professional project management",
    "Insurance and liability protection",
    "24/7 support during migration",
    "Post-migration optimization",
    "Documentation and knowledge transfer"
  ];

  const scenarios = [
    "Office relocation to new building",
    "Data center consolidation projects",
    "Lease expiration and facility change",
    "Mergers and acquisitions integration",
    "Cloud migration preparatory moves",
    "Disaster recovery site establishment",
    "Business expansion to new locations",
    "Infrastructure modernization projects"
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
                Specialized Services
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Data Center Relocation Services</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Specialized support for businesses relocating offices or expanding operations. We plan and execute data center moves to new locations with minimal downtime, ensuring seamless migration of systems, applications, and workloads while safeguarding business continuity.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Plan Your Move
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800" 
                alt="Data Center"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Relocation Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end support for stress-free data center moves
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Migration Methodology</h2>
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

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Challenges & Our Solutions</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-slate-900">{item.challenge}</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-600">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Relocation Scenarios</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6 text-center">
                  <Truck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-slate-900">{scenario}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Services</h2>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Planning a Data Center Move?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our experienced team handle your relocation with precision, minimal downtime, and complete peace of mind
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Start Planning Your Move
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}