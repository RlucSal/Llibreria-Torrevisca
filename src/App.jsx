import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import ProductCatalogue from "./Pages/ProductCatalogue";
import Books from "./Pages/Books"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavbarEl from "./Components/NavbarEl";
import Wrapper from "./Components/Wrapper";
import "./app.css";
import EventbriteIntegration from "./Pages/EventbriteIntegration";

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
          <Route path="/books" element={<Books />} />
          <Route
            path="/EventbriteIntegration"
            element={<EventbriteIntegration />}
          />
        </Routes>
      </Router>
      <Footer />
    </Wrapper>
  );
};

export default App;
