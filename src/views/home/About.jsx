import React from "react";

// Third Party Libraries
import { Code, Cpu, Globe } from "lucide-react";

// Component Imports
import Subtitle from "../../components/ui/Subtitle";
import Subtext from "../../components/ui/Subtext";

const About = () => {
  return (
    <section id="about" className="px-8 py-5 lg:px-0 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="rounded-2xl overflow-hidden border animate-image-glow">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Developer working on code"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              style={{ aspectRatio: "4/3" }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 order-1 md:order-2">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="w-auto text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-0.5">
              About me
            </span>
          </div>

          <div className="space-y-3">
            <Subtitle>
              Crafting digital experiences with precision and purpose
            </Subtitle>
            <Subtext>
              I'm a passionate full-stack developer with 5+ years of experience
              building web applications that deliver exceptional user
              experiences through clean code and intuitive design.
            </Subtext>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <div className="p-3 w-fit text-white bg-gray-700 rounded-full">
                <Code />
              </div>

              <h3 className="font-semibold text-xl text-white">Front-end</h3>
              <p className="text-white/60">
                Creating responsive, accessible, and performant interfaces with
                React, TypeScript, and modern CSS.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 w-fit text-white bg-gray-700 rounded-full">
                <Cpu />
              </div>

              <h3 className="font-semibold text-xl text-white">Back-end</h3>
              <p className="text-white/60">
                Building robust APIs and services with Node.js, Express, and
                various database technologies.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 w-fit text-white bg-gray-700 rounded-full">
                <Globe />
              </div>

              <h3 className="font-semibold text-xl text-white">DevOps</h3>
              <p className="text-white/60">
                Deploying and managing applications with CI/CD pipelines,
                Docker, and cloud services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
