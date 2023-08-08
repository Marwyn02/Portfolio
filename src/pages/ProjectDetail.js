import React from "react";

import { useLoaderData } from "react-router-dom";
import ProjectItem from "../components/layout/ProjectItem";

const ProjectDetail = () => {
  const data = useLoaderData();
  return (
    <>
      <ProjectItem data={data} />;
    </>
  );
};

export default ProjectDetail;

export async function loader({ request, params }) {
  try {
    const id = params.projectId;

    const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
    const data = await response.json();

    const website = data.websites.find((item) => item.title === id);
    if (!website) {
      throw new Error(`Website with id ${id} not found`);
    }
    return website;
  } catch (err) {
    console.log(err);
  }
}
