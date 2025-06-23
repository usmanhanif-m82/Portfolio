import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import TechStack from './components/TechStack';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import StackPage from './pages/StackPage';
import ContactPage from './pages/ContactPage';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen bg-[#F7F7F7] overflow-hidden">
      {/* Mobile Layout */}
      {isMobile ? (
        <div className="h-full overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                <Sidebar />
                  <Hero />
                  <About />
                  <Projects />
                  <TechStack />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      ) : (
        // Desktop Layout (unchanged)
        <div className="md:flex md:flex-row h-full pt-5">
          {/* Sidebar */}
          <div className="md:w-[20%]  md:h-full md:sticky top-5">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="w-[80%] h-full overflow-y-auto pr-3">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Projects />
                    <TechStack />
                    <Contact />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/stack" element={<StackPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;