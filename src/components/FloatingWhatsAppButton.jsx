import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/201006707798"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-green-900/40"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}