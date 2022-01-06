import Recommendation from "../components/Recommendation";
import ProductsS from "../components/ProductsS";
import About from "../components/About";
import Footer from "../components/Footer";

function Speakers() {
  return (
    <div>
      <h1 id="title">Speakers</h1>
      <ProductsS />
      <Recommendation />
      <About />
      <Footer />
    </div>
  );
}

export default Speakers;
