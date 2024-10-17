import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainSection from "@/Components/MainSection";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import ContactForm from "@/Components/Contact";

export default function Home() {
  return (
    <section>

    

    <div>
      <Navbar />
      <Hero />
      <MainSection />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
    </section>
  );
}
