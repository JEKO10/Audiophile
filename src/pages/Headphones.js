import Recommendation from "../components/Recommendation";
import ProductsH from "../components/ProductsH";
import About from "../components/About";
import Footer from "../components/Footer";

function Headphones() {
  return (
    <div>
      <h1 id="title">Headphones</h1>
      <ProductsH />
      <Recommendation />
      <About />
      <Footer />
    </div>
  );
}

export default Headphones;
