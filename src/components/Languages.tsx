import React from 'react';

const Languages = () => {
  const languages = [
    {
      name: "English",
      flag: "https://flagcdn.com/us.svg",
      level: "Fluent",
      score: 100
    },
    {
      name: "French",
      flag: "https://flagcdn.com/fr.svg",
      level: "Conversational",
      score: 70
    },
    {
      name: "Arabic",
      flag: "https://flagcdn.com/dz.svg",
      level: "Native",
      score: 100
    }
  ];

  return (
    <section className="py-20 bg-gray-800/50 animate-fadeInUp">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Languages
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition border-l-4 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={lang.flag} 
                  alt={lang.name} 
                  className="w-12 h-8 object-cover rounded-sm"
                />
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{lang.name}</h3>
                  <p className="text-gray-400">{lang.level}</p>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${lang.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
