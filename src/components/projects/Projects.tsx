import React, { useState } from "react";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="w-full py-12 flex flex-col items-center animate-fade-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 text-3xl md:text-4xl font-bold mb-8 cursor-pointer bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text select-none animate-pulse"
        aria-expanded={isOpen}
        aria-controls="projects-content"
        
      >
        <Link to="/ProjectsPage">
          <span>{isOpen ? "📂" : "📁"}</span>
          <span>Meus Projetos </span>
        </Link>
      </button>
    </section>
  );
};

export default Projects;