import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Xx99Two from "./pages/headphones/Xx99Two";
import Xx99One from "./pages/headphones/Xx99One";
import Xx59 from "./pages/headphones/Xx59";

function App() {
  return (
    <Router>
      <Navbar />
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
          <Cart />
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
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
