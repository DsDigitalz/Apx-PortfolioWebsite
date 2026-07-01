import Header from "@/app/components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0B0418]">
        <Hero />
        <About />
      </main>
    </>
  );
}