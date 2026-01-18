import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+201006707798" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone className="w-4 h-4" />
              +201006707798
            </a>
            <a href="mailto:sales@innovasights.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail className="w-4 h-4" />
              sales@innovasights.com
            </a>
          </div>
          <a 
            href="https://maps.app.goo.gl/jForiVmjMnwRBHJN7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-yellow-400 transition-colors"
          >
            Plus Mall - South Investors Area, New Cairo
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695f880c8a9c082921fd53e5/195e432df_Screenshot2026-01-13141549.png" 
                alt="INNOVASIGHTS" 
                className="h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
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
                          ? 'text-yellow-500'
                          : 'text-slate-700 hover:text-yellow-500'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-6">
                        <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Core IT Capabilities</h3>
                        <div className="space-y-2 mb-4">
                          <Link to={createPageUrl('PassiveNetworkServices')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Passive Network Services
                          </Link>
                          <Link to={createPageUrl('ActiveNetworkServices')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Active Network Services
                          </Link>
                          <Link to={createPageUrl('ServerManagement')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Server Management
                          </Link>
                          <Link to={createPageUrl('StorageBackup')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Storage & Backup
                          </Link>
                          <Link to={createPageUrl('FirewallSecurity')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Firewall Security
                          </Link>
                          <Link to={createPageUrl('EndpointSecurity')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Endpoint Security
                          </Link>
                          <Link to={createPageUrl('EmailSecurity')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Email Security
                          </Link>
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide border-t pt-4">Specialized IT Services</h3>
                          <div className="space-y-2">
                          <Link to={createPageUrl('ITAssessment')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            IT Assessment
                          </Link>
                          <Link to={createPageUrl('PenetrationTesting')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Penetration Testing
                          </Link>
                          <Link to={createPageUrl('ServiceLevelAgreements')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Service Level Agreements
                          </Link>
                          <Link to={createPageUrl('DataCenterRelocation')} className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">
                            Data Center Relocation
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
                        ? 'text-yellow-500'
                        : 'text-slate-700 hover:text-yellow-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                  Get Started
                </Button>
              </Link>
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
                        ? 'text-yellow-500'
                        : 'text-slate-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to={createPageUrl('Contact')} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white w-full">
                    Get Started
                  </Button>
                </Link>
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
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695f880c8a9c082921fd53e5/195e432df_Screenshot2026-01-13141549.png" 
                alt="INNOVASIGHTS" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-slate-300 mb-4 leading-relaxed">
                Engineering the Backbone of Your Digital Future. Dedicated IT infrastructure services for businesses that demand reliability, security, and excellence.
              </p>
              <div className="flex gap-4">
                <a href="tel:+201006707798" className="hover:text-yellow-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:sales@innovasights.com" className="hover:text-yellow-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Quick Links</h3>
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
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Contact</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <a href="tel:+201006707798" className="hover:text-yellow-400 transition-colors">
                    +201006707798
                  </a>
                </li>
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
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Plus Mall - South Investors Area, New Cairo, Egypt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} INNOVASIGHTS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}