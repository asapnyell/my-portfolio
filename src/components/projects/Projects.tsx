import React, { useState } from "react";

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="w-full py-12 flex flex-col items-center animate-fade-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 text-3xl md:text-4xl font-bold mb-8 cursor-pointer bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text select-none"
        aria-expanded={isOpen}
        aria-controls="projects-content"
      >
        <span>{isOpen ? "📂" : "📁"}</span>
        <span>Meus Projetos</span>
      </button>

      <a
        href="/my-portfolio/projects"
        className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-6 py-2 text-white font-semibold shadow-lg hover:bg-white/30 transition animate-pulse"
      >
        Ver todos os projetos
      </a>
    </section>
  );
};

export default Projects;