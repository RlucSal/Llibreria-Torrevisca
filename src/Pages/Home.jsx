import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../app.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <Container className="page-container beige-bg">
        <h1 className="green-text">Home</h1>
        <div className="align-container">
          <img className="shop-photo" src="/imgs/shop_photo.jpg"></img>
        </div>
      </Container>
    </>
  );
};

export default Home;
