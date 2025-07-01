import React from "react";

import { Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="md:px-12 py-12 border-t bg-black">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a
              href="#"
              className="text-white text-xl font-display font-bold tracking-tight transition-opacity hover:opacity-80"
            >
              marwyn<span className="text-primary">.portfolio</span>
            </a>
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Marwyn02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
