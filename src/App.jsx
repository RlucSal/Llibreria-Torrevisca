import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import ProductCatalogue from "./Pages/ProductCatalogue";
import Books from "./Pages/ProductCategories/Books";
import Toys from "./Pages/ProductCategories/Toys";
import Stationary from "./Pages/ProductCategories/Stationary";
import Homeware from "./Pages/ProductCategories/Homeware";
import Events from "./Pages/Events";
import Footer from "./Components/Footer";
import NavbarEl from "./Components/NavbarEl";
import Wrapper from "./Components/Wrapper";
import "./app.css";

// Scrolls to the top when a new page is opened
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Wrapper className="green-bg">
      <Router>
        <NavbarEl />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/product-catalogue" element={<ProductCatalogue />} />
          <Route path="/books" element={<Books />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/stationary" element={<Stationary />} />
          <Route path="/homeware" element={<Homeware />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
      <Footer />
    </Wrapper>
  );
};

export default App;
