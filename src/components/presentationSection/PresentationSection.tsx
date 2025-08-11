import React from "react";
import avatarImg from "../../assets/sobremimtwo.jpg";

const PresentationSection: React.FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] w-full px-4 md:px-12 gap-10 md:gap-20 animate-fade-in"
    >
      {/* Texto de apresentação */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 animate-slide-left">
        <h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-700 ease-out hover:scale-105 hover:drop-shadow-2xl"
           style={{ animation: 'pulse-scale 4s ease-in-out infinite' }}
        >
          Olá, eu sou <span className="decoration-indigo-400">Danyel Henrique</span>
          
        </h1>
        <p
          className="text-lg md:text-2xl max-w-2xl text-gray-200 transition-all duration-700 ease-out"
        >
          Desenvolvedor Full Stack apaixonado por tecnologia, interfaces modernas e experiências digitais incríveis. <br />
          Bem-vindo ao meu portfólio!
        </p>
        <a
          href="#projects"
          className="inline-block mt-4 bg-indigo-500 hover:bg-indigo-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg animate-fade-in"
        >
          Ver Projetos
        </a>
      </div>

      {/* Espaço para imagem com fundo brilhante */}
      <div className="flex-1 flex items-center justify-center relative min-h-[260px] md:min-h-[340px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-60 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 blur-2xl opacity-70 animate-pulse-glow" />
        </div>
        <div className="relative z-10 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-400 bg-gray-900 flex items-center justify-center "
        style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}
        >
          {/* Substitua a imagem abaixo pela sua foto/avatar */}
          <img
            src={avatarImg}
            alt="Avatar de Asapnyel"
            className="w-full h-full object-cover animate-fade-in "
          />
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
