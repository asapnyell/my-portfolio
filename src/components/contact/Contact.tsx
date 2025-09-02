import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import the icons

const Contacts: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[120px] gap-4">
      

      <a
        href="https://www.linkedin.com/in/danyel-henrique-0880711a2"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base flex items-center justify-center"
        style={{ minWidth: 120 }}
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/asapnyell"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base flex items-center justify-center"
        style={{ minWidth: 120 }}
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Contacts;