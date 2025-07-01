import { Github, SquareArrowOutUpRight } from "lucide-react";
import "./card.css";

const Card = ({ data }) => {
  return (
    <div
      className={`flex flex-col ${
        data.id % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-12 items-center mb-20 md:mb-32`}
    >
      <div className="w-full md:w-1/2">
        <div className="rounded-xl overflow-hidden shadow-sm animate-image-glow">
          <img
            src={data.img}
            alt="project-image"
            className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-3 overflow-hidden">
        <div className="flex flex-row flex-wrap gap-x-1 lg:gap-x-1.5 xl:gap-x-1 gap-y-1 md:gap-y-0 px-1">
          {data.tools.map((tool) => (
            <p
              key={tool.id}
              className={`${tool.programming.name} text-xs text-white text-center font-medium w-auto px-2.5 py-0.5 duration-700 rounded-full group-hover:translate-y-3`}
            >
              {tool.programming.name}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="mt-4 text-2xl font-bold tracking-wide text-white">
            {data.title}
          </h3>
          <p className="text-white/60 text-base group-hover:text-white/90">
            {data.description}
          </p>

          <div className="text-white/90 flex flex-row gap-x-6">
            <a
              className="flex flex-row gap-x-2 items-center"
              href={data.code}
              target="_blank"
            >
              <Github className="h-5 w-5" /> Source code
            </a>
            {data.link !== "" && (
              <a
                className="flex flex-row gap-x-2 items-center"
                href={data.link}
                target="_blank"
              >
                <SquareArrowOutUpRight className="h-5 w-5" /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
