
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projetos" },
  { href: "#services", label: "Serviços" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Scroll suave para a seção
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Nome */}
        <div className="text-2xl font-extrabold tracking-wide text-white select-none">
          Asapnyel.dev
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors duration-200 after:block after:h-0.5 after:bg-indigo-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left px-1 hover:text-indigo-400 focus:text-indigo-400 outline-none"
              tabIndex={0}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão de contato Desktop */}
        <div className="hidden md:block">
          <a
            href="https://web.whatsapp.com/5532984398787"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Contato
          </a>
        </div>

        {/* Botão menu mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Abrir menu</span>
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-10 text-2xl font-semibold text-white transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-indigo-400 transition-colors duration-200"
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5532984398787"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold py-2 px-6 rounded-lg shadow"
        >
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
