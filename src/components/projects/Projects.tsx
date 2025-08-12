import React from "react";
import projeto1Img from "/images/projects/projeto1.png";
import projeto2Img from "/images/projects/projeto2.png";

const projectData = [
  {
    imageUrl: projeto1Img,
    title: 'Landing Page Médica Veterinária',
    description: 'Desenvolvi uma landing page pessoal para uma médica veterinária, com design acolhedor e profissional, para apresentar seus serviços, experiência e contato direto com os clientes, a página oferece uma navegação fluida e responsiva, transmitindo confiança e cuidado para quem busca atendimento veterinário.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    imageUrl: projeto2Img,
    title: 'Landing Page Barbearia',
    description: 'Criei uma landing page pessoal para um barbeiro, com visual moderno e atraente que destaca seus serviços exclusivos e facilita o agendamento. O site é responsivo, garantindo ótima experiência tanto em smartphones quanto em desktops, alta performance e facilidade de manutenção.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full py-12 flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-down">
        Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8 max-w-5xl">
       {projectData.map((project, index) => (
          <div
            key={index}
            // Estilos do Glassmorphism
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Imagem do Projeto */}
            <div className="w-full h-45">
              <img
                src={project.imageUrl}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                // Fallback para caso a imagem não carregue
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/600x400/1e1b4b/e0e7ff?text=Erro+ao+carregar';
                }}
              />
            </div>

            {/* Conteúdo do Card */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 flex-grow mb-4">
                {project.description}
              </p>

              {/* Tecnologias usadas */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-500/30 text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
