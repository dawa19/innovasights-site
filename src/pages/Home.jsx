import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Shield, Network, Server, CheckCircle2, Globe, Lock, Users, Target, Zap, Brain, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceShowcaseCard from '../components/home/ServiceShowcaseCard';

export default function Home() {
  const services = [
  {
    title: "AI Services",
    kicker: "Strategy & adoption",
    tag: "AI Advisory",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    description: "Practical AI consultancy that turns ambition into clear opportunities, governance, and adoption roadmaps.",
    features: ["AI readiness and maturity assessment", "Use-case discovery and prioritization", "Responsible adoption roadmaps"],
    href: "/AIService"
  },
  {
    title: "Niche Application Services",
    kicker: "Focused business tools",
    tag: "Digital Solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    description: "Specialized workflow applications, dashboards, and portals designed around real operational needs.",
    features: ["Workflow and process analysis", "Custom portals and dashboards", "Automation and integration planning"],
    href: "/NicheApplicationServices"
  },
  {
    title: "IT Network Services",
    kicker: "Reliable connectivity",
    tag: "Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
    description: "Network foundations for secure, scalable connectivity across offices, data centers, and cloud environments.",
    features: ["Structured cabling and fiber", "LAN/WAN and wireless design", "Routing, switching, and segmentation"],
    href: "/ITNetworkServices"
  },
  {
    title: "IT System Administration Services",
    kicker: "Stable operations",
    tag: "Systems",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    description: "Server, virtualization, Microsoft 365, storage, backup, and monitoring services for business continuity.",
    features: ["Server and virtualization management", "Backup and disaster recovery", "Monitoring and operational support"],
    href: "/ITSystemAdministrationServices"
  },
  {
    title: "IT Security Services",
    kicker: "Layered protection",
    tag: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    description: "Security services that protect users, endpoints, networks, applications, and communications.",
    features: ["Firewall and perimeter security", "Endpoint and email protection", "Penetration testing and remediation"],
    href: "/ITSecurityServices"
  }];


  const industries = [
  { icon: "💊", name: "Pharma & Healthcare" },
  { icon: "🛢️", name: "Oil & Gas" },
  { icon: "🎓", name: "Education" },
  { icon: "🏗️", name: "Real Estate" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🚗", name: "Automotive" },
  { icon: "💳", name: "FinTech" },
  { icon: "🖥️", name: "IT System Integrators" }];


  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F4F7' }}>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden bg-[#0B1F3A]">
        <img
          src="https://media.base44.com/images/public/695f880c8a9c082921fd53e5/611c30852_Hero.png"
          alt="AI transformation roadmap cityscape"
          className="absolute inset-0 w-full h-full object-cover object-[68%_top] md:object-top [backface-visibility:hidden]"
          style={{ filter: 'contrast(1.18) saturate(1.14) brightness(1.06)', transform: 'translateZ(0)' }}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/45 md:hidden"></div>
        <div className="absolute inset-y-0 left-0 hidden w-full bg-gradient-to-r from-[#0B1F3A]/70 via-[#0B1F3A]/25 to-transparent md:block md:w-[55%]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-24 md:pb-36">
          <div className="max-w-2xl">
            <div>
              <Badge className="mb-4 max-w-full whitespace-normal bg-yellow-500 text-slate-900 hover:bg-yellow-400 text-xs md:text-sm leading-relaxed">
                AI Consultancy & Digital Transformation
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-[1.08] drop-shadow-xl break-words">
                Building Intelligent Solutions for Your
                <span className="text-yellow-400"> Digital Future</span>
              </h1>
              <p className="text-yellow-400 text-xl md:text-2xl font-semibold mb-4 drop-shadow-lg leading-snug">Insights, Innovation and Impact</p>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                InnovaSights helps organizations define practical AI strategies, identify high-value use cases, and create clear transformation roadmaps supported by secure, reliable digital foundations.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 max-w-sm sm:max-w-none">
                <Link to={createPageUrl('Services')} className="cursor-pointer">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold cursor-pointer">
                    Explore Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')} className="cursor-pointer">
                  <Button size="lg" className="bg-slate-700 hover:bg-slate-600 text-white font-bold border-2 border-white cursor-pointer px-6">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F2F4F7" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#F2F4F7' }}>
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-900/10 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <Badge className="mb-5 bg-yellow-500 text-slate-950 hover:bg-yellow-400">
              Insights, Innovation and Impact
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Our Services</h2>
            <div className="mx-auto my-6 h-1 w-24 rounded-full bg-yellow-500"></div>
            <p className="text-xl leading-relaxed text-slate-600">
              Strategic AI consultancy, niche applications, secure infrastructure, and managed technology foundations designed to create measurable business impact.
            </p>
          </div>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <ServiceShowcaseCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to={createPageUrl('Services')}>
              <Button size="lg" className="bg-slate-950 text-white hover:bg-blue-950">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #123C7E 0%, #0B1F3A 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why InnovaSights?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our clients choose us because we combine strong engineering foundations with a practical AI mindset. We do not chase trends—we identify real business problems, build focused solutions, and support them with secure, reliable technology.
              </p>
              <div className="space-y-4">
                {[
                { icon: Brain, text: "Practical AI Strategy & Consultancy" },
                { icon: Layers, text: "Custom Niche Applications" },
                { icon: Shield, text: "Infrastructure & Security Expertise" },
                { icon: Users, text: "Business-Focused Delivery Team" }].
                map((item, idx) =>
                <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500 rounded">
                      <item.icon className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
                alt="AI consulting team collaboration"
                className="rounded-lg shadow-2xl" />
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Turn AI Ambition into a Practical Roadmap?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Partner with us to assess readiness, prioritize AI opportunities, and define a clear adoption path supported by secure digital foundations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

          </div>
        </div>
      </section>
    </div>);

}