import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PresentationSection from "./components/presentationSection/PresentationSection";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import { ProjectsPage } from "./pages/ProjectsPage";

import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";

export function App() {
  return (
    <Router basename="/my-portfolio">
      <Routes>
        {/* Layout principal */}
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route
            path="/"
            element={
              <div className="flex flex-col gap-0">
                <div id="home">
                  <PresentationSection />
                </div>
                <div id="skills">
                  <Skills />
                </div>
                <div id="projects">
                  <Projects />
                </div>
                <div id="services"></div>
                <Education />
                <Contact />
                <Footer />
              </div>
            }
          />

          {/* Página separada de projetos */}
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
