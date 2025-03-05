import Hero from './components/Hero';
import Languages from './components/Languages';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className="bg-gray-900 text-white pb-24">
      <Hero />
      <Languages />
      <Skills />
      <Education />
      <Experience />
      <StickyFooter />
    </div>
  );
}

export default App;
