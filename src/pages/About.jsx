import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Zap, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Business-Focused Approach",
      description: "We deliver clear, business-focused advice that aligns with your strategic goals and operational needs."
    },
    {
      icon: Zap,
      title: "Rapid Response Times",
      description: "Our team is committed to quick turnaround times, ensuring your IT infrastructure stays operational."
    },
    {
      icon: Users,
      title: "Trusted Partnership",
      description: "We act as an extension of your team, providing dedicated support and expertise when you need it most."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "With years of experience serving enterprise clients, we bring proven methodologies and best practices."
    }
  ];

  const whyChooseUs = [
    "End-to-end IT infrastructure services from assessment to optimization",
    "Hands-on approach with practical, real-world solutions",
    "Tailored service agreements that fit your business requirements",
    "Enterprise-grade solutions for businesses of all sizes",
    "Rapid response times with guaranteed SLAs",
    "Experienced team of certified engineers and consultants",
    "24/7 support availability for critical systems",
    "Strong track record with leading multinational corporations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
              About INNOVASIGHTS
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A dedicated team of engineers and consultants passionate about building IT environments that businesses can rely on
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800" 
                alt="Professional IT Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Building Reliable IT Environments
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                INNOVASIGHTS is a dedicated team of engineers and consultants passionate about building and supporting IT environments that businesses can rely on. We combine practical experience with a hands-on approach to ensure every project runs smoothly and meets real-world needs.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We offer end-to-end IT infrastructure services, including data center design and management, network and connectivity solutions, systems administration, and security implementations. From planning and assessments to ongoing support and optimization, we cover every step of your IT journey.
              </p>
              <div className="flex items-center gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <p className="text-slate-800 font-medium">
                  Every project is executed with precision, reliability, and a focus on long-term business value
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why INNOVASIGHTS?</h2>
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

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8">
              To empower businesses with robust, secure, and scalable IT infrastructure solutions that drive digital transformation and enable sustained growth. Whether you're a multinational corporation or a growing enterprise, we bring the right mix of expertise and flexibility to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Leading Organizations</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600">
              We're proud to serve a diverse portfolio of enterprise clients across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Kellogg's", "Boehringer Ingelheim", "DATALOG", "Tamweel", "ICPM Group", "Jade Textile", "STADA", "Cemento", "Konecta", "Hassan Allam", "EDARA", "And More..."].map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex items-center justify-center">
                <span className="text-lg font-semibold text-slate-700 text-center">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}