import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "White Bay LTD",
      location: "Sidi Abdellah, Algeria",
      role: "Mobile App Developer",
      period: "December 2021 - April 2022",
      achievements: [
        "Delivered high-impact Cross Platform Projects, with notable achievements including the development of 'My Team Connect,' one of our most popular initiatives using React Native CLI.",
        "Achieved a significant reduction in average deadlines by approximately 20 days through efficient code reuse from the React Native mobile app to React.js projects.",
        "Effectively converted the product team's Figma sketches and design requirements into technical specifications, demonstrating successful alignment, project execution, and achievement of organizational goals."
      ],
      skills: [
        "React",
        "React Native",
        "Jest",
        "JavaScript",
        "TypeScript",
        "Redux",
        "REST API",
        "ES6",
        "Functional Programming",
        "Git",
        "MongoDB"
      ]
    },
    {
      company: "Emploitic Group",
      location: "Algiers, Algeria",
      role: "React Native Developer | Front End Developer",
      period: "September 2022 - September 2023",
      achievements: [
        "Led and coordinated the development of the company-facing product as scrum master using React Native, ensuring successful delivery and adherence to agile principles.",
        "Improved site updates by leading product development from Joomla CMS to React/Next.js, enabling agile feature additions and driving a 60% user engagement increase, highlighting site functionality and user satisfaction.",
        "Designed and reviewed code with a focus on efficient and reusable code infrastructure and components between the React Native app and the Next.js React app. This practice led to improved development speed, code quality, and maintainability, ultimately impacting the overall success of projects.",
        "Orchestrated the development and implementation of the transformative tool 'Admin-Tool' dashboard with React-Admin Framework and React.js, shifting client service from manual to digital. This resulted in a tangible financial impact, with the annual budget increasing by 540,000.00 DZD, showcasing the positive financial outcome."
      ],
      skills: [
        "React",
        "React Native",
        "Docker",
        "Next.js",
        "Git",
        "Agile",
        "JavaScript",
        "TypeScript",
        "CI/CD",
        "REST API",
        "ArangoDB",
        "ES6",
        "Flux"
      ]
    },
    {
      company: "Crowd Digital",
      location: "Dubai, United Arab Emirates",
      role: "Mobile Developer | Front End Developer",
      period: "October 2023 - February 2025",
      achievements: [
        "Orchestrated Live Tips project and Dashboard for Dubai Police using React.js, focusing on performance and clean code architecture (Pending Project at Final Stages).",
        "Managed the implementation and integration of video and audio uploading, live streaming, and live chat functionalities using various libraries such as FFmpeg and Agora, seamlessly with React.js.",
        "Deployed effective code reuse strategies between Live Tips and Dashboard to accelerate development pace.",
        "Implemented strategies to enhance Live Tips SEO, performance, accessibility, and best practices by transforming the project to Next.js and leveraging a variety of profiling tools such as Lighthouse for comprehensive optimization."
      ],
      skills: [
        "React.js",
        "Docker",
        "Git",
        "JavaScript",
        "TypeScript",
        "CI/CD",
        "Design Patterns",
        "REST API",
        "FFmpeg",
        "Unit Testing",
        "Flux",
        "Redux Toolkit",
        "Redux Toolkit Query",
        "Agora",
        "Next.js"
      ]
    }
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
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.toReversed().map((exp, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition border-l-4 border-blue-500">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{exp.company}</h3>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <span className="text-gray-500 font-mono">{exp.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">{exp.role}</h4>
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`${getRandomBgColor()} px-4 py-2 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform`}
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
