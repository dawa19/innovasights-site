import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Shield, Network, Server, CheckCircle2, Globe, Lock, Users, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const services = [
    {
      icon: Network,
      title: "Network Design & Deployment",
      description: "Comprehensive passive and active network infrastructure solutions ensuring reliability and scalability.",
      features: ["Structured Cabling", "LAN/WAN Design", "Wireless Solutions"]
    },
    {
      icon: Server,
      title: "System Administration",
      description: "Expert server management, virtualization, and storage solutions for optimal performance.",
      features: ["Server Management", "Storage Solutions", "Backup & Recovery"]
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Multi-layered security approach protecting your infrastructure from modern threats.",
      features: ["Firewall Security", "Endpoint Protection", "Email Security"]
    },
    {
      icon: Target,
      title: "Assessment & Security Testing",
      description: "Comprehensive IT evaluation and penetration testing to identify vulnerabilities and optimize performance.",
      features: ["Infrastructure Assessment", "Penetration Testing", "Risk Mitigation"]
    }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "24/7", label: "Support Available" }
  ];

  const clients = [
    "Kellogg's", "Boehringer Ingelheim", "DATALOG", "Tamweel Mortgage",
    "ICPM Group", "Jade Textile Egypt", "STADA", "Cemento",
    "Konecta", "Hassan Allam Properties", "EDARA"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-blue-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                IT Infrastructure Excellence
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Engineering the Backbone of Your
                <span className="text-yellow-400"> Digital Future</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                INNOVASIGHTS delivers enterprise-grade IT infrastructure services, combining hands-on expertise with cutting-edge solutions to power your business forward.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Services')}>
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                    Explore Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" 
                alt="Digital Infrastructure"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800" 
                alt="IT Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Dedicated Engineers Building Reliable IT Environments
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                INNOVASIGHTS is a dedicated team of engineers and consultants passionate about building and supporting IT environments that businesses can rely on. We combine practical experience with a hands-on approach to ensure every project runs smoothly and meets real-world needs.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We offer end-to-end IT infrastructure services, including data center design and management, network and connectivity solutions, systems administration, and security implementations. From planning and assessments to ongoing support and optimization, we cover every step of your IT journey.
              </p>
              <div className="flex gap-4 mt-8">
                <Link to={createPageUrl('About')}>
                  <Button className="bg-blue-900 hover:bg-blue-800">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core IT Capabilities</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions designed to keep your business secure, connected, and resilient
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-900">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-yellow-500 rounded-lg">
                      <service.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl('Services')}>
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why INNOVASIGHTS?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our clients choose us because we deliver clear, business-focused advice and reliable execution. We stand out through our rapid response times, tailored service agreements, and a commitment to acting as a trusted partner.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Globe, text: "End-to-End Infrastructure Solutions" },
                  { icon: Shield, text: "Enterprise-Grade Security" },
                  { icon: Users, text: "Dedicated Support Team" },
                  { icon: Lock, text: "Compliance & Best Practices" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500 rounded">
                      <item.icon className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" 
                alt="Team Collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Leading Organizations</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600">
              From multinational corporations to growing enterprises
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
                <span className="text-lg font-semibold text-slate-700">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Let's work together to ensure your infrastructure is secure, resilient, and future-ready
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+201006707798">
              <Button size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                Call +201006707798
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}