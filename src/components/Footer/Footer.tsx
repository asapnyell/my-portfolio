import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-black/70 text-gray-300 flex flex-col items-center mt-10 border-t border-white/10 animate-fade-in">
      <span className="text-sm">&copy; {new Date().getFullYear()} Asapnyel.Dev. Todos os direitos reservados.</span>
      <span className="text-xs mt-1">Desenvolvido com React, TypeScript e TailwindCSS</span>
    </footer>
  );
};

export default Footer;
