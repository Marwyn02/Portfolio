import React, { useEffect, useState } from "react";

// Components Imports
import Card from "../../components/ui/Card.jsx";
import Subtitle from "../../components/ui/Subtitle.jsx";
import Subtext from "../../components/ui/Subtext.jsx";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/data.json"); // Assuming data.json is in the public folder
        const data = await response.json();
        setProjects(data.websites); // Update state with data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="lg:pt-20">
      <div className="flex items-center justify-center">
        <span className="w-auto text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-0.5">
          Projects
        </span>
      </div>

      <div className="space-y-3 py-5">
        <Subtitle align="center">Featured work</Subtitle>

        <Subtext align="center">
          A selection of projects that showcase my skills and passion for
          building innovative web applications <br /> that solve real problems.
        </Subtext>
      </div>

      <div className="grid grid-cols-1 gap-y-3 gap-x-1 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-5 px-8 md:px-0 py-12">
        {loading ? (
          <p className="col-start-2 text-center text-white text-xl mt-10 font-extrabold">
            Loading Projects...
          </p>
        ) : (
          projects &&
          projects.map((project) => <Card key={project.id} data={project} />)
        )}
      </div>
    </section>
  );
};

export default Projects;
