import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
