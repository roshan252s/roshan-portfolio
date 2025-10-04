import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";



export default function Homepage() {
  return (
    <>
      <section
        id="home"
        className="min-h-[75vh] bg-gradient-to-r from-blue-50 to-blue-100 scroll-mt-16 ">
        <Hero />
      </section>


      <section
        id="about"
        className="min-h-[80vh] bg-[#efefef] scroll-mt-16 flex justify-center items-center" >
        <About />
      </section>

      <section
        id="projects"
        className="min-h-[80vh] bg-[#d6d6d6] scroll-mt-16 flex justify-center items-center" >
        <Projects />
      </section>


      <section
        id="contact"
        className=" min-h-[80vh] bg-[#efefed] scroll-mt-16">
        <Footer />
      </section>

    </>

  );
}
