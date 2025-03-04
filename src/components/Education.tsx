import React from 'react';
import { Code } from 'lucide-react';

const Education = () => {
  const courses = [
    "Information Systems",
    "Algorithms and Data Structures",
    "Web Development",
    "Advanced Android Development",
    "Networking",
    "Java",
    "Object-Oriented Programming"
  ];

  const thesisHashtags = [
    "Android Development",
    "Java",
    "XML",
    "Jetpack Compose",
    "Async Programming",
    "API Integration",
    "Geolocation"
  ];

  const getRandomBgColor = () => {
    const colors = [
      "bg-blue-500/20 hover:bg-blue-500/30",
      "bg-purple-500/20 hover:bg-purple-500/30",
      "bg-green-500/20 hover:bg-green-500/30",
      "bg-pink-500/20 hover:bg-pink-500/30",
      "bg-yellow-500/20 hover:bg-yellow-500/30",
      "bg-indigo-500/20 hover:bg-indigo-500/30",
      "bg-teal-500/20 hover:bg-teal-500/30",
      "bg-orange-500/20 hover:bg-orange-500/30",
      "bg-rose-500/20 hover:bg-rose-500/30",
      "bg-cyan-500/20 hover:bg-cyan-500/30"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section className="py-20 bg-gray-800/50 animate-fadeInUp">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative bg-white/5 rounded-xl p-8 hover:bg-white/10 transition border-l-4 border-blue-500 overflow-hidden group">
            {/* Main Content */}
            <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
              <h3 className="text-xl font-bold text-blue-400">University of Mohammed Cherif Messaadia</h3>
              <p className="text-gray-400">Souk Ahras, Algeria</p>
              <p className="text-gray-400">Bachelor's Degree in Computer Science</p>
              <p className="text-gray-500 font-mono">September 2015 - June 2019</p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Notable Courses:</h4>
                <div className="flex flex-wrap gap-3">
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className={`${getRandomBgColor()} px-4 py-2 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform`}
                    >
                      #{course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out p-8">
              <div className="flex flex-col h-full">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white">Final Year Thesis</h3>
                </div>

                {/* Thesis Description */}
                <p className="text-white text-lg mb-6">
                  Developed a native Android application using Java and XML. Leveraged Jetpack Compose components, 
                  utilized asynchronous programming extensively, consumed APIs, and integrated geolocation features.
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {thesisHashtags.map((hashtag, index) => (
                    <span
                      key={index}
                      className={`${getRandomBgColor()} px-4 py-2 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform`}
                    >
                      #{hashtag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
