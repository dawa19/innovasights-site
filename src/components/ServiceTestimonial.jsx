import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

export default function ServiceTestimonial({ testimonial, author, company, role }) {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <Quote className="w-10 h-10 text-yellow-500 mb-4" />
        <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
          "{testimonial}"
        </p>
        <div>
          <p className="font-bold text-slate-900">{author}</p>
          <p className="text-slate-600">{role}</p>
          <p className="text-yellow-600 font-semibold">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
}