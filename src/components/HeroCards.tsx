import React from 'react';

const HeroCards = () => {
  const cards = [
    { label: '/me', color: 'bg-orange-500' },
    { label: 'Education', color: 'bg-yellow-500' },
    { label: 'Experience', color: 'bg-green-500' },
    { label: 'Projects', color: 'bg-pink-500' },
    { label: 'Skills', color: 'bg-purple-500' },
    { label: 'Case Studies', color: 'bg-red-500' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 px-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} rounded-lg p-4 text-center cursor-pointer hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
        >
          <span className="text-white font-bold text-lg">{card.label}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroCards;
