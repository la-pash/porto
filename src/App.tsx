import React from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
