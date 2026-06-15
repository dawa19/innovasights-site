import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save contact submission to database
      await base44.entities.ContactSubmission.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message
      });
      
      toast.success('Message Sent Successfully. Our engineering team will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "sales@innovasights.com",
      link: "mailto:sales@innovasights.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Office 208 B, Plus Mall - South Investors Area, New Cairo, Egypt",
      link: "https://maps.app.goo.gl/jForiVmjMnwRBHJN7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Let's discuss how we can help transform your IT infrastructure. Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all border-t-4 border-t-yellow-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-slate-600 hover:text-blue-600 transition-colors">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-slate-600">{info.details}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-slate-300">Your message will be saved and our team will contact you shortly</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+20 XXX XXX XXXX"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your IT infrastructure needs..."
                      className="w-full min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <a 
              href="https://maps.app.goo.gl/jForiVmjMnwRBHJN7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-600 hover:text-blue-600 transition-colors inline-block"
            >
              Office 208 B, Plus Mall - South Investors Area, New Cairo, Egypt
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps?q=InnovaSights+-+Plus+Mall,+South+Investors+Area,+New+Cairo,+Egypt&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="InnovaSights Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}