import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+201006707798",
      link: "tel:+201006707798"
    },
    {
      icon: Mail,
      title: "Email",
      details: "sales@innovasights.com",
      link: "mailto:sales@innovasights.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Plus Mall - South Investors Area, New Cairo, Egypt",
      link: "https://maps.app.goo.gl/jForiVmjMnwRBHJN7"
    }
  ];

  const services = [
    "IT Infrastructure Assessment",
    "Network Design & Deployment",
    "Security Solutions",
    "Data Center Services",
    "Managed IT Support"
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-slate-300">Fill out the form and we'll get back to you within 24 hours</p>
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

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Why Choose INNOVASIGHTS?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Rapid response times with 24/7 availability",
                    "Tailored solutions for your business needs",
                    "Experienced team of certified engineers",
                    "Proven track record with enterprise clients",
                    "Comprehensive end-to-end IT services"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-2 border-yellow-500">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Need Immediate Assistance?</h3>
                  <p className="text-slate-600 mb-4">Our team is available to help you right now</p>
                  <a href="tel:+201006707798">
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call +201006707798
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
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
              Plus Mall - South Investors Area, New Cairo, Egypt
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps?q=INNOVASIGHTS+-+Plus+Mall,+South+Investors+Area,+New+Cairo,+Egypt&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="INNOVASIGHTS Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}