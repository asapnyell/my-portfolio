import React from "react";
import avatarImg from "../../assets/logoUni.jpg";

const Education: React.FC = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-down">
        Formação Acadêmica
      </h2>
      <div className="flex justify-center w-full">
        <div
          className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer min-w-[260px] max-w-md group"
        >
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border-2 border-indigo-400 group-hover:scale-110 transition-transform duration-300">
            <img
              src={avatarImg}
              alt="Logo da Instituição"
              className="w-40 h-40 object-contain opacity-80"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-lg font-semibold text-white drop-shadow">
              Sistemas de Informação
            </span>
            <span className="text-sm text-indigo-200 font-medium">
              2024 - 2028
            </span>
            <span className="text-sm text-gray-300">
              Instituição: <span className="font-semibold text-white">UniAcademia - Centro Universitário
</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
