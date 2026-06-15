import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Building2, MessageSquare, Calendar } from 'lucide-react';

export default function AdminContacts() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.ContactSubmission.list('-created_date', 100)
      .then(setSubmissions)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Contact Submissions</h1>
          <p className="text-slate-500">All messages received from the website contact form</p>
        </div>

        {loading ? (
          <p className="text-slate-500">Loading...</p>
        ) : submissions.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center text-slate-500">No submissions yet.</CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {submissions.map((s) => (
              <Card key={s.id} className="bg-white shadow hover:shadow-md transition-shadow border-l-4 border-l-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl text-slate-900">{s.name}</CardTitle>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(s.created_date).toLocaleString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-6 text-slate-700">
                    {s.email && (
                      <a href={`mailto:${s.email}`} className="flex items-center gap-2 hover:text-blue-600">
                        <Mail className="w-4 h-4 text-yellow-500" />
                        {s.email}
                      </a>
                    )}
                    {s.phone && (
                      <a href={`tel:${s.phone}`} className="flex items-center gap-2 hover:text-blue-600">
                        <Phone className="w-4 h-4 text-yellow-500" />
                        {s.phone}
                      </a>
                    )}
                    {s.company && (
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-yellow-500" />
                        {s.company}
                      </span>
                    )}
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50 rounded-lg p-4">
                    <MessageSquare className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">{s.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}