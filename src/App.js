import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import ScrollTop from "./components/ScrollTop";
import Xx99Two from "./pages/headphones/Xx99Two";
import Xx99One from "./pages/headphones/Xx99One";
import Xx59 from "./pages/headphones/Xx59";
import Yx1 from "./pages/earphones/Yx1";
import Zx9 from "./pages/speakers/Zx9";
import Zx7 from "./pages/speakers/Zx7";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Router>
      <Navbar />
      <ScrollTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/headphones">
          <Headphones />
        </Route>
        <Route path="/speakers">
          <Speakers />
        </Route>
        <Route path="/earphones">
          <Earphones />
        </Route>
        <Route path="/cart">
          <Checkout />
        </Route>
        <Route path="/xx99-mark-two-headphones">
          <Xx99Two />
        </Route>
        <Route path="/xx99-mark-one-headphones">
          <Xx99One />
        </Route>
        <Route path="/xx59-headphones">
          <Xx59 />
        </Route>
        <Route path="/yx1-earphones">
          <Yx1 />
        </Route>
        <Route path="/zx9-speaker">
          <Zx9 />
        </Route>
        <Route path="/zx7-speaker">
          <Zx7 />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
