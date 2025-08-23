import MainLayout from "./layouts/MainLayout";
import PresentationSection from "./components/presentationSection/PresentationSection";
import Skills from "./components/skills/Skills";
import React, { useRef, useEffect, useState } from "react";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";

import { Routes, Route } from "react-router-dom";
import {ProjectsPage} from "./pages/projects";

function FadeInOnScroll({ children, className = "", style = {}, padding = "" }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; padding?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-out ${visible ? "opacity-100 animate-fade-in" : "opacity-0"} ${className}`}
      style={style}
    >
      <div className={padding}>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <div className="flex flex-col gap-0">
            <FadeInOnScroll padding="pb-4">
              <div id="home">
                <PresentationSection />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll padding="pt-10 pb-10">
              <div id="skills">
                <Skills />
              </div>
            </FadeInOnScroll>
            <div id="projects">
              <Projects/>
            </div>
            <div id="services">
              
            </div>
            <Education/>
            <Contact/>
            <Footer/>
          </div>
        </MainLayout>
      } />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
