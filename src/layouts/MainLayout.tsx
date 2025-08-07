import type { ReactNode } from "react";
import Header from "../components/header/Header";


type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      <Header />
      <div className="pt-20">{/* Espaço para o header fixo */}
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
