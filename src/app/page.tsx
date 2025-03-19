import Hero from "./home/components/Hero";
import FeaturedProject from "./home/components/FeaturedProject";
import Contact from "./home/components/Contact";
import Footer from "./home/components/Footer";

export default function Home() {
  return (
    <div className="scro scroll-smooth">
      <Hero />
      <FeaturedProject />
      <Contact />
      <Footer />
    </div>
  );
}
