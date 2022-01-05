import Hero from "../components/Hero";
import Recommendation from "../components/Recommendation";
import Collage from "../components/Collage";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <Recommendation />
      <Collage />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
