import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HardDrive, CheckCircle2, ArrowRight, Database, RefreshCw, Shield, Archive } from 'lucide-react';
import ServiceTestimonial from '../components/ServiceTestimonial';

export default function StorageBackup() {
  const technologies = [
    {
      name: "QNAP",
      description: "Enterprise NAS solutions with high-performance storage, data protection, and flexible scalability options"
    },
    {
      name: "Veeam Backup",
      description: "Industry-leading backup and replication solution for virtual, physical, and cloud environments"
    },
    {
      name: "SAN Solutions",
      description: "High-performance Storage Area Networks for mission-critical applications requiring maximum I/O performance"
    },
    {
      name: "Hybrid Cloud Storage",
      description: "Seamless integration of on-premises and cloud storage for optimal cost and performance balance"
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Enterprise Storage",
      items: [
        "SAN (Storage Area Network) deployment",
        "NAS (Network Attached Storage) configuration",
        "Hybrid storage architecture design",
        "Storage pooling and virtualization",
        "Performance optimization and tuning"
      ]
    },
    {
      icon: Archive,
      title: "Storage Tiering",
      items: [
        "Hot/warm/cold data classification",
        "Automated tiering policies",
        "SSD acceleration for critical data",
        "Archive storage for compliance",
        "Cost optimization strategies"
      ]
    },
    {
      icon: RefreshCw,
      title: "Backup Solutions",
      items: [
        "Automated backup scheduling",
        "Full, incremental, and differential backups",
        "Virtual machine backup and replication",
        "Cloud backup integration",
        "Backup monitoring and reporting"
      ]
    },
    {
      icon: Shield,
      title: "Disaster Recovery",
      items: [
        "Business continuity planning",
        "Disaster recovery site setup",
        "Regular recovery testing",
        "Failover and failback procedures",
        "RTO and RPO optimization"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Capacity Planning",
      description: "Analyze current storage usage, growth trends, and future requirements to design optimal storage architecture."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design storage solution considering performance, redundancy, scalability, and cost-efficiency requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy storage hardware, configure RAID levels, storage pools, and integrate with existing infrastructure."
    },
    {
      step: "04",
      title: "Backup Configuration",
      description: "Set up automated backup jobs, retention policies, and verify backup integrity with test restores."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring of storage health, capacity, performance, and proactive optimization."
    }
  ];

  const benefits = [
    {
      title: "Data Protection",
      description: "Multiple layers of protection ensure your critical business data is always safe and recoverable"
    },
    {
      title: "High Availability",
      description: "Redundant storage systems minimize downtime and ensure continuous data access"
    },
    {
      title: "Scalability",
      description: "Easily expand storage capacity as your data grows without disrupting operations"
    },
    {
      title: "Performance",
      description: "Optimized storage architecture delivers fast access to frequently-used data"
    },
    {
      title: "Cost Efficiency",
      description: "Tiered storage and deduplication reduce total cost of ownership"
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with proper data retention and backup policies"
    }
  ];

  const industries = [
    "Healthcare & Medical Records",
    "Financial Services & Banking",
    "Legal & Professional Services",
    "Media & Entertainment",
    "Manufacturing & CAD/CAM",
    "Research & Development",
    "Government & Public Sector",
    "E-commerce & Retail"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Data Management
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Storage & Backup Solutions</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Modern businesses rely on efficient storage systems to handle large volumes of data. We design and manage storage architectures that are secure, scalable, and cost-optimized while ensuring fast data accessibility.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Protect Your Data
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800" 
                alt="Data Storage"
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Storage Technologies</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-leading solutions for enterprise data storage and protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-t-4 border-t-purple-600">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Storage & Backup Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-600 rounded-lg">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Implementation Approach</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-purple-600">{item.step}</div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-t-4 border-t-purple-600">
                <CardContent className="p-6">
                  <HardDrive className="w-12 h-12 text-yellow-500 mb-4" />
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
      <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Secure Your Business Data Today
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Don't risk data loss. Let our experts design a comprehensive storage and backup solution
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}