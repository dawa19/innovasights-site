import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import InnovaLogo, { OrbitIconWhite } from './components/InnovaLogo';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'About', page: 'About' },
    { name: 'Services', page: 'Services' },
    { name: 'Contact', page: 'Contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <FloatingWhatsAppButton />
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <InnovaLogo size="md" showTagline={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
              {navLinks.map((link) => (
                link.name === 'Services' ? (
                  <div key={link.page} className="relative group">
                    <Link
                      to={createPageUrl(link.page)}
                      className={`font-semibold transition-colors ${
                        currentPageName === link.page || 
                        currentPageName === 'PassiveNetworkServices' ||
                        currentPageName === 'ActiveNetworkServices' ||
                        currentPageName === 'ServerManagement' ||
                        currentPageName === 'StorageBackup' ||
                        currentPageName === 'FirewallSecurity' ||
                        currentPageName === 'EndpointSecurity' ||
                        currentPageName === 'EmailSecurity' ||
                        currentPageName === 'PenetrationTesting' ||
                        currentPageName === 'ITAssessment' ||
                        currentPageName === 'DataCenterRelocation' ||
                        currentPageName === 'ServiceLevelAgreements'
                          ? 'text-[#F2B705]'
                          : 'text-[#0B1F3A] hover:text-[#F2B705]'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-6">
                        <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Our Services</h3>
                        <div className="space-y-2">
                          <Link to="/AIService" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            AI Services
                          </Link>
                          <Link to="/NicheApplicationServices" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Niche Application Services
                          </Link>
                          <Link to="/ITNetworkServices" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            IT Network Services
                          </Link>
                          <Link to="/ITSystemAdministrationServices" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            IT System Administration Services
                          </Link>
                          <Link to="/ITSecurityServices" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            IT Security Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`font-semibold transition-colors ${
                      currentPageName === link.page
                        ? 'text-[#F2B705]'
                        : 'text-[#0B1F3A] hover:text-[#F2B705]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}

            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-slate-200 mt-2">
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-semibold transition-colors ${
                      currentPageName === link.page
                        ? 'text-[#F2B705]'
                        : 'text-[#0B1F3A]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-white" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <InnovaLogo white={true} size="md" showTagline={true} />
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Insights, Innovation and Impact. AI consultancy, niche application advisory, and secure IT services that help organizations move from vision to measurable business value.
              </p>
              <div className="flex gap-4">
                <a href="mailto:sales@innovasights.com" className="hover:text-yellow-400 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/innovasights" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/201006707798" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors cursor-pointer" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#F2B705' }}>Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-slate-300 hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#F2B705' }}>Contact</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <a href="mailto:sales@innovasights.com" className="hover:text-yellow-400 transition-colors">
                    sales@innovasights.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <a 
                    href="https://maps.app.goo.gl/jForiVmjMnwRBHJN7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Office 208 B, Plus Mall - South Investors Area, New Cairo, Egypt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} InnovaSights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}