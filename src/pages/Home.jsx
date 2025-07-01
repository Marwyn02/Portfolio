import React from "react";

import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/nav/Footer.jsx";
import Hero from "../views/home/Hero.jsx";
import Projects from "../views/home/Projects.jsx";
import About from "../views/home/About.jsx";
import Contact from "../views/home/Contact/Contact.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-black/85 md:px-12">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
