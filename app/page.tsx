import Header from "@/app/components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0B0418]">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}