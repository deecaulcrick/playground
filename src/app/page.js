import Header from "@/sections/Header";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div className="w-full ">
      <Header />
      <section className="p-6 md:p-12 mt-16">
        <div>
          <h1 className="text-2xl md:text-4xl tracking-tighter z-999">
            The Playground of Dee Caulcrick. <br />
            <span className="text-black/60">Creative Web Developer.</span>
          </h1>
        </div>
      </section>
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
