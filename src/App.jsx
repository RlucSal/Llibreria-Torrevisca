import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavbarEl from "./Components/NavbarEl"

const App = () => {
  return (
    <Router>
      <div>
        <NavbarEl>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
          </Routes>
        </NavbarEl>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
