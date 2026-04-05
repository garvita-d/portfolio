import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Leadership from "../components/Leadership";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <GitHubStats />
        <Skills />
        <Certifications />
        <Leadership />
      </main>
      <Footer />
    </>
  );
}
