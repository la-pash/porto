import React from 'react';
import { Code, GitBranch, Database, Terminal, Cpu, Layers, Cloud, Shield, Zap, Settings, Box, Monitor, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "React.js", icon: <Code className="w-6 h-6" />, experience: "4 years" },
        { name: "Next.js", icon: <Layers className="w-6 h-6" />, experience: "2 years" },
        { name: "JavaScript", icon: <Code className="w-6 h-6" />, experience: "5 years" },
        { name: "TypeScript", icon: <Code className="w-6 h-6" />, experience: "3 years" },
        { name: "Redux Toolkit", icon: <Settings className="w-6 h-6" />, experience: "3 years" },
        { name: "Redux Toolkit Query", icon: <Settings className="w-6 h-6" />, experience: "2 years" },
        { name: "Flux", icon: <Zap className="w-6 h-6" />, experience: "3 years" },
        { name: "ES6", icon: <Code className="w-6 h-6" />, experience: "5 years" }
      ]
    },
    {
      title: "Mobile App",
      skills: [
        { name: "React Native", icon: <Smartphone className="w-6 h-6" />, experience: "3 years" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <Code className="w-6 h-6" />, experience: "5 years" },
        { name: "TypeScript", icon: <Code className="w-6 h-6" />, experience: "3 years" }
      ]
    },
    {
      title: "Containerization",
      skills: [
        { name: "Docker", icon: <Box className="w-6 h-6" />, experience: "2 years" }
      ]
    },
    {
      title: "Libraries (General & UI)",
      skills: [
        { name: "React.js", icon: <Code className="w-6 h-6" />, experience: "4 years" },
        { name: "React Native", icon: <Smartphone className="w-6 h-6" />, experience: "3 years" },
        { name: "Redux Toolkit", icon: <Settings className="w-6 h-6" />, experience: "3 years" },
        { name: "Redux Toolkit Query", icon: <Settings className="w-6 h-6" />, experience: "2 years" },
        { name: "Flux", icon: <Zap className="w-6 h-6" />, experience: "3 years" },
        { name: "Jest", icon: <Shield className="w-6 h-6" />, experience: "3 years" },
        { name: "FFmpeg", icon: <Monitor className="w-6 h-6" />, experience: "1 year" },
        { name: "Agora", icon: <Monitor className="w-6 h-6" />, experience: "1 year" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Next.js", icon: <Layers className="w-6 h-6" />, experience: "2 years" }
      ]
    }
  ];

  const getRandomBgColor = () => {
    const colors = [
      "bg-blue-500/20",
      "bg-purple-500/20",
      "bg-green-500/20",
      "bg-pink-500/20",
      "bg-yellow-500/20",
      "bg-indigo-500/20",
      "bg-teal-500/20",
      "bg-orange-500/20",
      "bg-rose-500/20",
      "bg-cyan-500/20"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomBorderColor = () => {
    const colors = [
      "border-blue-500",
      "border-purple-500",
      "border-green-500",
      "border-pink-500",
      "border-yellow-500",
      "border-indigo-500",
      "border-teal-500",
      "border-orange-500",
      "border-rose-500",
      "border-cyan-500"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section className="py-20 bg-gray-800/50 animate-fadeInUp">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative bg-white/5 rounded-xl p-8 transition ${getRandomBorderColor()} border-l-4`}
            >
              {/* Main Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-400 mb-6">{category.title}</h3>
              </div>

              {/* Skills Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`${getRandomBgColor()} rounded-lg p-4 flex items-center gap-3`}
                  >
                    <div className="text-blue-400">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                      <p className="text-gray-300 text-sm">{skill.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
