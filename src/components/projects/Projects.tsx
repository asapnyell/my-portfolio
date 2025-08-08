import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-down">
        Projetos
      </h2>
      <div className="flex flex-col items-center justify-center min-h-[120px]">
        <span className="text-xl font-semibold text-white animate-pulse">building...</span>
      </div>
    </section>
  );
};

export default Projects;
