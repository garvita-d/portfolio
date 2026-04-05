import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GitHubStats from '../components/GitHubStats';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

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
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
