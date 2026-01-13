import React from "react";
import Card from "../../components/ui/Card.jsx";
import Subtitle from "../../components/ui/Subtitle.jsx";
import Subtext from "../../components/ui/Subtext.jsx";

const graphics = [
  {
    id: 1,
    title: "Jewelry Enhancement",
    url: "./images/jewelry-enhancement.png",
  },
  {
    id: 2,
    title: "Product Image Editing",
    url: "./images/shoe-enhancement.png",
  },
  {
    id: 3,
    title: "Email Header",
    url: "./images/header.jpg",
  },
  {
    id: 4,
    title: "Logo Design",
    url: "./images/1.png",
  },
  {
    id: 5,
    title: "Logo Design",
    url: "./images/2.png",
  },
];

const Graphics = () => {
  return (
    <section id="graphics" className="pt-20 lg:pt-20">
      <div className="flex items-center justify-center">
        <span className="w-auto text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-0.5">
          Graphics
        </span>
      </div>

      <div className="space-y-3 py-5">
        <Subtitle align="center">Graphics work</Subtitle>

        <Subtext align="center">
          Designs that speak clearly and visually.
        </Subtext>
      </div>

      <div className="grid grid-cols-1 gap-y-3 gap-x-1 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-5 px-8 md:px-0 py-12">
        {graphics.map((graphic) => (
          <div
            key={graphic.id}
            className={`flex flex-col md:gap-1 items-center mb-10 md:mb-20`}
          >
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-sm animate-image-glow">
                <img
                  src={graphic.url}
                  alt="project-image"
                  className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-3 overflow-hidden">
              <div className="space-y-4">
                <h3 className="mt-4 text-xl font-bold tracking-wide text-white/80">
                  {graphic.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Graphics;
