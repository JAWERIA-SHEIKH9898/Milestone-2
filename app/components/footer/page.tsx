import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm md:text-base mb-4 md:mb-0">&copy; 2024 Jaweria. connect with me on my social media accounts.</p>
        
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61556463635045" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 text-lg md:text-xl">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/jaweria7261/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 text-lg md:text-xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/jaweria-talib-87839b300/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 text-lg md:text-xl">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/JAWERIA-SHEIKH9898" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 text-lg md:text-xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;