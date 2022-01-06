import Recommendation from "../components/Recommendation";
import ProductsH from "../components/ProductsH";
import About from "../components/About";

function Headphones() {
  return (
    <div>
      <h1 id="titleH">Headphones</h1>
      <ProductsH />
      <Recommendation />
      <About />
    </div>
  );
}

export default Headphones;
