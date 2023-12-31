import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
