import React from 'react';
import { Github, Linkedin, Play } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <a 
        href="https://github.com/la-pash" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <Github className="w-6 h-6" />
      </a>
      <a 
        href="https://linkedin.com/in/seif-eddine-kharrachi" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a 
        href="https://play.google.com/store/apps/devid=8367062324581492914" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <Play className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
