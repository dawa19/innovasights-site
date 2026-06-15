import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServiceShowcaseCard({ service, index }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/0 via-blue-950/0 to-yellow-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="grid h-full md:grid-cols-2">
        <div className="relative min-h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <Badge className="absolute left-5 top-5 bg-yellow-500 text-slate-950 hover:bg-yellow-400">
            {service.tag}
          </Badge>
        </div>

        <div className="relative flex flex-col p-7 md:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-900">{service.kicker}</p>
          <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-950 md:text-3xl">{service.title}</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">{service.description}</p>

          <div className="mb-8 space-y-3">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <Link to={service.href}>
              <Button className="bg-blue-950 text-white hover:bg-blue-900">
                Explore Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}