import React from "react";

const services = [
  {
    title: "Criação de Sites Profissionais",
    description: "Desenvolvimento de páginas modernas, responsivas e otimizadas para negócios, portfólios, landing pages e mais.",
    icon: (
      <svg className="w-10 h-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M9 3v2m6-2v2m-7 4h8m-8 4h8m-8 4h8m-8 4h8" /></svg>
    ),
  },
  {
    title: "Cardápios Digitais",
    description: "Cardápios online interativos para restaurantes, bares e lanchonetes, com fácil atualização e visual atrativo.",
    icon: (
      <svg className="w-10 h-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
    ),
  },
  {
    title: "Landing Pages de Alta Conversão",
    description: "Páginas focadas em conversão para campanhas, produtos ou serviços, com design moderno e CTA eficiente.",
    icon: (
      <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-down">
        Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer min-h-[260px] group"
          >
            <div className="mb-2 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <span className="text-xl font-semibold text-white drop-shadow text-center">
              {service.title}
            </span>
            <p className="text-gray-200 text-center text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
