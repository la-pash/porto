import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Code } from 'lucide-react';

function App() {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Seif Eddine Kharrachi';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollContainer = (containerId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section with Avatar */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
            />
            <h1 className="font-mono text-3xl font-bold mb-2 text-blue-400">
              {displayText}
              <span className="animate-blink">|</span>
            </h1>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate about creating elegant solutions to complex problems. Specialized in building
              modern web applications with cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => scrollContainer('skills-container', 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full z-10 hover:bg-blue-600 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollContainer('skills-container', 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full z-10 hover:bg-blue-600 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div
              id="skills-container"
              className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {[
                {
                  title: "Frontend Development",
                  description: "Creating responsive and interactive user interfaces",
                  skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"]
                },
                {
                  title: "Backend Development",
                  description: "Building scalable server-side applications",
                  skills: ["Node.js", "Express", "NestJS", "Python", "Django", "FastAPI"]
                },
                {
                  title: "Database Management",
                  description: "Designing and optimizing database structures",
                  skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "TypeORM"]
                },
                {
                  title: "DevOps & Cloud",
                  description: "Managing and deploying applications",
                  skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Nginx"]
                },
                {
                  title: "Testing & Quality",
                  description: "Ensuring code quality and reliability",
                  skills: ["Jest", "Cypress", "React Testing Library", "JUnit", "Selenium"]
                }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="min-w-[300px] bg-white/5 rounded-xl p-6 hover:bg-white/10 transition"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{skill.title}</h3>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "Frontend",
                techs: [
                  { name: "React", level: 90 },
                  { name: "TypeScript", level: 85 },
                  { name: "Next.js", level: 80 },
                  { name: "Tailwind CSS", level: 90 },
                  { name: "Redux", level: 85 }
                ]
              },
              {
                category: "Backend",
                techs: [
                  { name: "Node.js", level: 85 },
                  { name: "Express", level: 80 },
                  { name: "NestJS", level: 75 },
                  { name: "GraphQL", level: 70 },
                  { name: "REST APIs", level: 90 }
                ]
              },
              {
                category: "Database",
                techs: [
                  { name: "PostgreSQL", level: 85 },
                  { name: "MongoDB", level: 80 },
                  { name: "Redis", level: 75 },
                  { name: "Prisma", level: 85 },
                  { name: "Supabase", level: 80 }
                ]
              },
              {
                category: "DevOps & Tools",
                techs: [
                  { name: "Git", level: 90 },
                  { name: "Docker", level: 80 },
                  { name: "AWS", level: 75 },
                  { name: "CI/CD", level: 85 },
                  { name: "Linux", level: 80 }
                ]
              }
            ].map((stack, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition">
                <h3 className="text-xl font-bold mb-6 text-blue-400">{stack.category}</h3>
                <div className="space-y-4">
                  {stack.techs.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{tech.name}</span>
                        <span className="text-blue-400">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => scrollContainer('projects-container', 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full z-10 hover:bg-blue-600 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollContainer('projects-container', 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full z-10 hover:bg-blue-600 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div
              id="projects-container"
              className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A full-stack e-commerce solution with real-time inventory management",
                  image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300",
                  tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
                  links: { github: "#", live: "#" }
                },
                {
                  title: "Task Management System",
                  description: "Enterprise task management with real-time collaboration features",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300",
                  tech: ["React", "Express", "MongoDB", "Socket.io"],
                  links: { github: "#", live: "#" }
                },
                {
                  title: "AI Content Generator",
                  description: "Content generation platform powered by machine learning",
                  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300",
                  tech: ["Python", "FastAPI", "React", "TensorFlow"],
                  links: { github: "#", live: "#" }
                },
                {
                  title: "Real Estate Platform",
                  description: "Property listing and management system with virtual tours",
                  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300",
                  tech: ["Vue.js", "Django", "PostgreSQL", "AWS"],
                  links: { github: "#", live: "#" }
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="min-w-[400px] bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                      >
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                      <a
                        href={project.links.live}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                role: "Senior Full Stack Developer",
                company: "Tech Innovations Inc.",
                period: "2021 - Present",
                description: "Leading the development of enterprise-scale applications and mentoring junior developers.",
                achievements: [
                  "Architected and implemented a microservices-based platform that improved system scalability by 300%",
                  "Led a team of 5 developers in delivering critical projects ahead of schedule",
                  "Introduced automated testing practices that reduced bug reports by 60%"
                ]
              },
              {
                role: "Full Stack Developer",
                company: "Digital Solutions Ltd",
                period: "2019 - 2021",
                description: "Developed and maintained multiple client projects using modern web technologies.",
                achievements: [
                  "Built and deployed 15+ full-stack applications for various clients",
                  "Implemented CI/CD pipelines that reduced deployment time by 70%",
                  "Optimized database queries resulting in 40% faster page load times"
                ]
              },
              {
                role: "Frontend Developer",
                company: "WebCraft Agency",
                period: "2017 - 2019",
                description: "Created responsive and interactive web applications for diverse clients.",
                achievements: [
                  "Developed 20+ responsive websites using React and Vue.js",
                  "Reduced bundle sizes by 45% through code splitting and optimization",
                  "Implemented accessibility features that improved user experience"
                ]
              }
            ].map((experience, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition border-l-4 border-blue-500"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{experience.role}</h3>
                    <p className="text-gray-400">{experience.company}</p>
                  </div>
                  <span className="text-gray-500 font-mono">{experience.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <Code className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
