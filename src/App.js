import Header from "./user/component/Header";
import Route from "./user/Route";
import Footer from "./user/component/Footer";
import About from "./user/pages/About";
import Home from "./user/pages/Home";
import Services from "./user/pages/Services";
import Protfolio from "./user/pages/Protfolio";
import Blog from "./user/pages/Blog";
import Contact from "./user/pages/Contact";
import Experience from "./user/pages/Experience";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const route = location.pathname.split("/")[1];

  if (route === "blog") {
    return (
      <div className="onepage background-light designer-home home-mazin home-four">
        <Header />
        <Route />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="onepage background-light designer-home home-mazin home-four">
        <Header />
        <Home />
        <Experience />
        <About />
        <Services />
        <Protfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
