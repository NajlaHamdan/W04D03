//import logo from './logo.svg';
import "./App.css";
import Aboute from "./Components/Aboute";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import { Route, Link, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Aboute">
          <Aboute />
        </Route>
        <Route path="/Card">
          <Card />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
