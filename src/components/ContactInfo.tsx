import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-2 mb-6">
      <div className="flex items-center justify-center gap-2">
        <MapPin className="w-5 h-5 text-blue-400" />
        <span>Dubai, UAE</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Phone className="w-5 h-5 text-blue-400" />
        <a href="tel:+971523547807">+971 52 35 47 807</a>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Mail className="w-5 h-5 text-blue-400" />
        <a href="mailto:seifkharrachi@gmail.com">seifkharrachi@gmail.com</a>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Globe className="w-5 h-5 text-blue-400" />
        <a href="https://www.la-pash.store" target="_blank" rel="noopener noreferrer">https://www.la-pash.store</a>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Globe className="w-5 h-5 text-blue-400" />
        <a href="https://angrygame.org/" target="_blank" rel="noopener noreferrer">https://angrygame.org/</a>
      </div>
    </div>
  );
};

export default ContactInfo;
