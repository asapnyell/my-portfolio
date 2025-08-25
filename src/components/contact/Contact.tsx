import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[120px] gap-4">
      <a
        id="contact"
        href="https://wa.me/5532984398787"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        style={{ minWidth: 120, textAlign: "center" }}
      >
        Whatsapp
      </a>

       <a
        href="https://www.linkedin.com/in/danyel-henrique-0880711a2"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        style={{ minWidth: 120, textAlign: "center" }}
      >
        Linkedin
      </a>

      <a
        href="https://github.com/asapnyell"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        style={{ minWidth: 120, textAlign: "center" }}
      >
        GitHub
      </a>
      
    </div>

    
  );
};

export default Contacts;