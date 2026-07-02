import Header from "@/app/components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* <Footer /> */}
    </>
  );
}