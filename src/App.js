import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Error from "./pages/Error";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
