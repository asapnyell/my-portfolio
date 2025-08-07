import React, { useRef, useEffect } from "react";

const skills = [
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M24 4C12.95 4 4 12.95 4 24c0 11.05 8.95 20 20 20s20-8.95 20-20C44 12.95 35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z" fill="#E76F00"/><path d="M24 12c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm0 22c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" fill="#E76F00"/></svg>
    ),
  },
  {
    name: "Spring",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="24" cy="24" r="20" fill="#6DB33F"/><path d="M24 14c-5.52 0-10 4.48-10 10h2c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8v2c5.52 0 10-4.48 10-10s-4.48-10-10-10z" fill="#fff"/></svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="24" cy="24" r="20" fill="#222"/><g><ellipse rx="10" ry="4" cx="24" cy="24" fill="none" stroke="#61DAFB" strokeWidth="2.5"/><ellipse rx="10" ry="4" cx="24" cy="24" fill="none" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(60 24 24)"/><ellipse rx="10" ry="4" cx="24" cy="24" fill="none" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(120 24 24)"/><circle cx="24" cy="24" r="2.5" fill="#61DAFB"/></g></svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect width="48" height="48" rx="10" fill="#3178C6"/><text x="24" y="32" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="Arial">TS</text></svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect width="48" height="48" rx="10" fill="#38BDF8"/><path d="M14 28c2-4 6-6 10-6s8 2 10 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><path d="M14 20c2-4 6-6 10-6s8 2 10 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect width="48" height="48" rx="10" fill="#F7DF1E"/><text x="24" y="32" textAnchor="middle" fontSize="18" fill="#222" fontFamily="Arial">JS</text></svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect width="48" height="48" rx="10" fill="#3776AB"/><text x="24" y="32" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="Arial">Py</text></svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect width="48" height="48" rx="10" fill="#F05032"/><path d="M34 26a2 2 0 1 1-2-2l-6-6-2 2 6 6a2 2 0 1 1 2 2z" fill="#fff"/></svg>
    ),
  },
];


const Skills: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let animationFrame: number;
    const speed = 1.2; // pixels per frame

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += speed;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicar os cards para efeito de looping
  const cards = [...skills, ...skills];

  return (
    <section className="w-full py-12 flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-down">
        Minhas Skills
      </h2>
      <div
        ref={carouselRef}
        className="w-full max-w-4xl px-4 overflow-x-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div className="flex gap-6 w-max animate-none select-none" style={{ minWidth: '100%' }}>
          {cards.map((skill, idx) => (
            <div
              key={skill.name + idx}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in min-w-[180px]"
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="text-lg font-semibold text-white drop-shadow">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
