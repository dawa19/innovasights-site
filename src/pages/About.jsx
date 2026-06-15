import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Zap, Award, CheckCircle2, ArrowRight, Brain, Layers, HeartPulse, Flame, GraduationCap, Building2, Factory, Car, CreditCard, Monitor } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Practical AI Strategy",
      description: "We help organizations identify realistic AI opportunities, prioritize use cases, and turn ideas into measurable outcomes."
    },
    {
      icon: Brain,
      title: "AI Advisory Expertise",
      description: "We guide leaders through AI readiness, opportunity discovery, governance, and adoption planning."
    },
    {
      icon: Layers,
      title: "Business-Focused Roadmaps",
      description: "We translate strategic goals into practical AI initiatives, prioritized actions, and clear implementation paths."
    },
    {
      icon: Award,
      title: "Strong Technical Foundation",
      description: "Our infrastructure and security background gives every AI and digital solution a reliable, secure base."
    }
  ];

  const whyChooseUs = [
    "50+ cumulative years of expert engineering experience",
    "AI consultancy focused on practical adoption and measurable value",
    "AI opportunity discovery designed around real operational needs",
    "Business-focused AI adoption roadmaps for specialized workflows",
    "Core infrastructure and security services remain a strong foundation",
    "Business-focused delivery model positioning us as trusted partners",
    "End-to-end support from AI ideation to implementation and operation",
    "Serving digital transformation across the MEA region"
  ];

  const industries = [
    { icon: HeartPulse, name: "Pharma & Healthcare" },
    { icon: Flame, name: "Oil & Gas" },
    { icon: GraduationCap, name: "Education" },
    { icon: Building2, name: "Real Estate" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Car, name: "Automotive" },
    { icon: CreditCard, name: "FinTech" },
    { icon: Monitor, name: "IT System Integrators" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
            Insights, Innovation and Impact
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A dedicated team of engineers and consultants helping organizations plan practical AI adoption with secure, reliable digital foundations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800" 
                alt="AI consulting and application development team"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Building AI-Ready Strategies
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                InnovaSights helps organizations approach AI with clarity and confidence. We assess readiness, identify meaningful opportunities, define governance principles, and create roadmaps that connect AI initiatives to business value.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our consulting approach combines business understanding with technical depth across infrastructure, security, data environments, and digital operations—ensuring AI plans are practical, secure, and ready for execution.
              </p>
              <div className="flex items-center gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <p className="text-slate-800 font-medium">
                  Every solution is designed to connect insight, innovation, and measurable business impact
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why InnovaSights?</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our clients choose us for our commitment to excellence and our ability to deliver results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {values.map((value, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-t-4 border-t-blue-900">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-500 rounded-lg flex-shrink-0">
                        <value.icon className="w-8 h-8 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What Sets Us Apart</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Mission Statement */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-12 text-white">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                To become a trusted regional and global partner for AI-enabled transformation, helping organizations adopt practical AI strategies supported by secure technology foundations that create real impact.
                </p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8">
                Our mission is to help organizations across the Middle East and Africa move from AI ambition to practical execution. We provide AI consultancy, readiness assessments, adoption roadmaps, governance guidance, and reliable infrastructure/security services that enable leaders to scale with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Services')}>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white border-2 border-white cursor-pointer">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted Across Industries</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600">
              Serving diverse sectors with AI consultancy, adoption roadmaps, and secure digital foundations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group overflow-hidden bg-white border border-slate-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
                <CardContent className="relative p-7 text-center">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900 opacity-70"></div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-7 w-7 text-yellow-500" />
                  </div>
                  <span className="text-base font-bold text-slate-800">{industry.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}