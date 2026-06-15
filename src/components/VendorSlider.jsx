import React from 'react';
import { motion } from 'framer-motion';

export default function VendorSlider() {
  const vendors = [
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'HPE', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg' },
    { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { name: 'Fortinet', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' }
  ];

  // Double the vendors array for seamless loop
  const duplicatedVendors = [...vendors, ...vendors];

  return (
    <div className="overflow-hidden bg-slate-50 py-12">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Trusted Technology Partners</h3>
        <p className="text-slate-600">Enterprise-grade solutions from industry leaders</p>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 * vendors.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedVendors.map((vendor, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-md px-6"
            >
              <img 
                src={vendor.logo} 
                alt={vendor.name}
                className="max-w-full max-h-16 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}