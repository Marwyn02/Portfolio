import React from "react";
import Card from "../components/ui/Card";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const Data = useLoaderData();
  const WebData = Data.websites;
  return (
    <div className="bg-main">
      <Navbar />
      <div className="text-center mb-2 mt-12">
        <h1 className="font-semibold text-gray-50/90 tracking-wide">
          welcome to my collections
        </h1>
      </div>
      <div>
        <Card data={WebData} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export async function loader() {
  const response = await fetch(`${process.env.PUBLIC_URL}/data.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}
