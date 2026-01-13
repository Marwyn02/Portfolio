import Button from "../../components/ui/Button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-10 lg:pt-24">
      <div className="flex items-center justify-center pb-8 md:pt-5">
        <span className="w-auto text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-0.5">
          Full-Stack Developer & Graphic Designer
        </span>
      </div>

      <h1 className="text-4xl lg:text-7xl text-white font-semibold text-center lg:leading-20 px-1">
        Creating elegant solutions for <br /> complex problems
      </h1>

      <p className="text-white/70 text-center max-w-xs lg:max-w-2xl text-base lg:text-xl tracking-wider font-light">
        I design and build digital experiences that are intuitive, accessible,
        and performant — focusing on clean code and thoughtful user experiences.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
        <a href="#projects">
          <Button>View my work</Button>
        </a>
        <a href="#contact">
          <Button variant={"secondary"}>Get in touch</Button>
        </a>
      </div>

      <ArrowDown className="text-white animate-bounce" />
    </div>
  );
};

export default Hero;
