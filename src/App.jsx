import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import ProductCatalogue from "./Pages/ProductCatalogue";
import Events from "./Pages/Events";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavbarEl from "./Components/NavbarEl";
import Wrapper from "./Components/Wrapper";
import "./app.css";

const App = () => {
  return (
    <Wrapper className="green-bg">
      <Router>
        <NavbarEl />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/product-catalogue" element={<ProductCatalogue />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
      <Footer />
    </Wrapper>
  );
};

export default App;
