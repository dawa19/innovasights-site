import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '../../utils';

export default function ServiceDetailPage({ badge, title, intro, sections, benefits }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Services')} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            ← Back to Services
          </Link>
          <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">{badge}</Badge>
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all border-t-4 border-t-blue-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">{section.description}</p>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Benefits</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-10 h-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to discuss {title}?</h2>
          <p className="text-xl text-slate-300 mb-8">Let’s define the right approach for your organization.</p>
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