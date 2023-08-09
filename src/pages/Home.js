import React, { Suspense } from "react";
import Card from "../components/ui/Card";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import { defer, useLoaderData, Await } from "react-router-dom";

const Home = () => {
  const { projects } = useLoaderData();

  return (
    <div className="bg-main">
      <Navbar />
      <div className="text-center mb-2 mt-12">
        <h1 className="font-semibold text-gray-50/90 tracking-wide">
          welcome to my collections
        </h1>
      </div>
      <Suspense
        fallback={
          <p className="text-center text-white text-xl mt-10 font-extrabold">
            Loading Projects...
          </p>
        }
      >
        <Await resolve={projects}>
          {(loadedProjects) => {
            return <Card data={loadedProjects} />;
          }}
        </Await>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;

async function loadProjects() {
  const response = await fetch(`${process.env.PUBLIC_URL}/data.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data.websites;
}

export function loader() {
  return defer({
    projects: loadProjects(),
  });
}
