import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1 - Title
    {
      type: 'title',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="text-center px-12">
            <h1 className="text-7xl font-bold mb-6">
              <span className="text-white">INNOVA</span>
              <span className="text-yellow-500">SIGHTS</span>
            </h1>
            <div className="h-1 w-40 bg-yellow-500 mx-auto mb-8"></div>
            <h2 className="text-4xl font-semibold mb-6">Engineering the Backbone of Your Digital Future</h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
              Enterprise IT Infrastructure Services for Modern Business
            </p>
          </div>
        </div>
      )
    },
    
    // Slide 2 - Who We Are
    {
      type: 'content',
      content: (
        <div className="h-full flex flex-col bg-white p-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">Who We Are</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <div className="grid grid-cols-2 gap-12 flex-1">
            <div className="space-y-6">
              <p className="text-2xl text-slate-700 leading-relaxed">
                INNOVASIGHTS is a dedicated team of engineers and consultants passionate about building and supporting IT environments that businesses can rely on.
              </p>
              <p className="text-2xl text-slate-700 leading-relaxed">
                We combine practical experience with a hands-on approach to ensure every project runs smoothly and meets real-world needs.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-blue-900">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Focus</h3>
              <ul className="space-y-4 text-xl text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  Network Design & Deployment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  System Administration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  Security Solutions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  Strategic IT Consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3 - Our Experience
    {
      type: 'stats',
      content: (
        <div className="h-full flex flex-col bg-gradient-to-br from-blue-900 to-slate-900 text-white p-16">
          <h2 className="text-5xl font-bold mb-8">Our Track Record</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <div className="grid grid-cols-4 gap-8 flex-1 items-center">
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-6xl font-bold text-yellow-500 mb-4">15+</div>
              <div className="text-2xl">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-6xl font-bold text-yellow-500 mb-4">200+</div>
              <div className="text-2xl">Projects Delivered</div>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-6xl font-bold text-yellow-500 mb-4">50+</div>
              <div className="text-2xl">Enterprise Clients</div>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-6xl font-bold text-yellow-500 mb-4">24/7</div>
              <div className="text-2xl">Support Available</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4 - Core Services
    {
      type: 'services',
      content: (
        <div className="h-full flex flex-col bg-white p-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">Core IT Infrastructure Services</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-blue-900">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Network Infrastructure</h3>
              <ul className="space-y-3 text-xl text-slate-700">
                <li>• Passive Network Services (Cabling)</li>
                <li>• Active Network Services (Switches/Routers)</li>
                <li>• Wireless LAN Design & Deployment</li>
                <li>• Network Segmentation & Security</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl border-l-8 border-indigo-900">
              <h3 className="text-3xl font-bold text-indigo-900 mb-4">System Administration</h3>
              <ul className="space-y-3 text-xl text-slate-700">
                <li>• Server Management & Virtualization</li>
                <li>• Active Directory & M365 Admin</li>
                <li>• Storage & Backup Solutions</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-900">
              <h3 className="text-3xl font-bold text-red-900 mb-4">Security Solutions</h3>
              <ul className="space-y-3 text-xl text-slate-700">
                <li>• Next-Gen Firewall Deployment</li>
                <li>• Endpoint Security (EDR/XDR)</li>
                <li>• Email Security & DLP</li>
                <li>• Penetration Testing</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-8 rounded-2xl border-l-8 border-emerald-900">
              <h3 className="text-3xl font-bold text-emerald-900 mb-4">Specialized Services</h3>
              <ul className="space-y-3 text-xl text-slate-700">
                <li>• IT Infrastructure Assessment</li>
                <li>• Data Center Relocation</li>
                <li>• Managed Support (SLAs)</li>
                <li>• Strategic IT Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5 - Technology Partners
    {
      type: 'partners',
      content: (
        <div className="h-full flex flex-col bg-slate-50 p-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">Enterprise Technology Partners</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <div className="space-y-8 flex-1">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Networking & Infrastructure</h3>
              <div className="grid grid-cols-4 gap-6">
                {['Cisco', 'Aruba Networks', 'Juniper', 'Fortinet'].map((partner, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <p className="text-2xl font-bold text-slate-900">{partner}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-indigo-900 mb-6">Virtualization & Cloud</h3>
              <div className="grid grid-cols-4 gap-6">
                {['VMware vSphere', 'Microsoft Hyper-V', 'Microsoft 365', 'AWS & Azure'].map((partner, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <p className="text-2xl font-bold text-slate-900">{partner}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-900 mb-6">Security Solutions</h3>
              <div className="grid grid-cols-4 gap-6">
                {['Palo Alto Networks', 'Kaspersky', 'Fortinet FortiGate', 'Microsoft Defender'].map((partner, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <p className="text-2xl font-bold text-slate-900">{partner}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6 - Why Choose Us
    {
      type: 'benefits',
      content: (
        <div className="h-full flex flex-col bg-gradient-to-br from-slate-900 to-blue-900 text-white p-16">
          <h2 className="text-5xl font-bold mb-8">Why INNOVASIGHTS?</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">Business-Focused Approach</h3>
                <p className="text-xl text-slate-200">Clear, business-focused advice that aligns with your strategic goals and operational needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">Rapid Response Times</h3>
                <p className="text-xl text-slate-200">Quick turnaround times ensure your IT infrastructure stays operational</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">Trusted Partnership</h3>
                <p className="text-xl text-slate-200">We act as an extension of your team, providing dedicated support when you need it</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">Proven Excellence</h3>
                <p className="text-xl text-slate-200">Years of experience serving enterprise clients with best practices</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">End-to-End Solutions</h3>
                <p className="text-xl text-slate-200">Complete IT infrastructure services from assessment to optimization</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">24/7 Support</h3>
                <p className="text-xl text-slate-200">Round-the-clock availability for critical systems and emergency support</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7 - Trusted Clients
    {
      type: 'clients',
      content: (
        <div className="h-full flex flex-col bg-white p-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">Trusted by Leading Organizations</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <p className="text-2xl text-slate-600 mb-12">We're proud to serve a diverse portfolio of enterprise clients across multiple industries</p>
          <div className="grid grid-cols-4 gap-6 flex-1">
            {[
              "Kellogg's", "Boehringer Ingelheim", "DATALOG", "Tamweel Mortgage",
              "ICPM Group", "Jade Textile Egypt", "STADA", "Cemento",
              "Konecta", "Hassan Allam Properties", "EDARA", "And Many More..."
            ].map((client, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex items-center justify-center border-l-4 border-l-yellow-500">
                <p className="text-xl font-bold text-slate-900 text-center">{client}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // Slide 8 - Industries Served
    {
      type: 'industries',
      content: (
        <div className="h-full flex flex-col bg-slate-50 p-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">Industries We Serve</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <div className="grid grid-cols-3 gap-8 flex-1">
            {[
              { name: 'Financial Services & Banking', desc: 'Secure, compliant IT infrastructure' },
              { name: 'Healthcare & Medical', desc: 'HIPAA-compliant solutions' },
              { name: 'Manufacturing & Industrial', desc: 'Reliable operational technology' },
              { name: 'Government & Public Sector', desc: 'High-security implementations' },
              { name: 'Education & Research', desc: 'Scalable campus networks' },
              { name: 'Retail & E-commerce', desc: 'High-availability systems' },
              { name: 'Professional Services', desc: 'Business-focused IT' },
              { name: 'Technology Companies', desc: 'Enterprise-grade infrastructure' },
              { name: 'Corporate Enterprises', desc: 'End-to-end IT services' }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-blue-900">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{industry.name}</h3>
                <p className="text-lg text-slate-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // Slide 9 - Contact
    {
      type: 'contact',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 text-white p-16">
          <h2 className="text-6xl font-bold mb-8">Let's Transform Your IT Infrastructure</h2>
          <div className="h-1 w-32 bg-yellow-500 mb-12"></div>
          <div className="grid grid-cols-3 gap-12 mb-16 max-w-5xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-3">Phone</div>
              <p className="text-2xl">+201006707798</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-3">Email</div>
              <p className="text-2xl">sales@innovasights.com</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-3">Location</div>
              <p className="text-2xl">Plus Mall, New Cairo, Egypt</p>
            </div>
          </div>
          <div className="text-7xl font-bold">
            <span className="text-white">INNOVA</span>
            <span className="text-yellow-500">SIGHTS</span>
          </div>
          <p className="text-2xl text-slate-300 mt-6">Engineering the Backbone of Your Digital Future</p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 bg-black">
      {/* Slide Content */}
      <div className="absolute inset-0">
        {slides[currentSlide].content}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-black/50 backdrop-blur px-6 py-3 rounded-full">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="ghost"
          className="text-white hover:text-yellow-500 disabled:opacity-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <div className="text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="ghost"
          className="text-white hover:text-yellow-500 disabled:opacity-30"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute top-8 right-8 text-white/70 text-sm bg-black/30 backdrop-blur px-4 py-2 rounded-lg">
        Use ← → arrow keys or click buttons to navigate
      </div>
    </div>
  );
}