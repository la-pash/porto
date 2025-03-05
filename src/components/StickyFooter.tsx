import React from 'react';
import SocialLinks from "./SocialLinks"

const StickyFooter = () => {
  const cards = [
    { label: '/me', color: 'bg-orange-500', icon: '👤' },
    { label: 'Education', color: 'bg-yellow-500', icon: '🎓' },
    { label: 'Experience', color: 'bg-green-500', icon: '💼' },
    { label: 'Projects', color: 'bg-pink-500', icon: '📂' },
    { label: 'Skills', color: 'bg-purple-500', icon: '🛠️' },
    { label: 'Case Studies', color: 'bg-red-500', icon: '📊' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Cards Section */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 flex-1">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.color} rounded-lg p-2 flex items-center justify-center space-x-2 cursor-pointer hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap`}
              >
                <span className="text-white text-sm md:text-base">{card.icon}</span>
                <span className="text-white text-sm md:text-base font-medium hidden md:inline-block">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4 ml-12">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
