import { Github } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black px-8 py-5 md:px-12 md:py-5 fixed w-full z-50">
      <a href="#">
        <h1 className="text-start text-xl text-white font-semibold">
          marwyn.dev.portfolio
        </h1>
      </a>

      <div className="flex flex-row gap-x-10 items-center">
        <div className="hidden text-white/80 font-medium text-[15px] md:flex items-center gap-x-10">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <a href="https://github.com/Marwyn02">
            <Github className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
