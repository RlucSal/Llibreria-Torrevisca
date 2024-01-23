import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../app.css";
import NavbarEl from "../Components/NavbarEl";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <div className="page-container beige-bg">
        <NavbarEl />
      </div>

      <section className="section">
        <div className="p-2 align-container">
          <img src="/imgs/globe.png" width={'500px'}></img>
        </div>

        <div className="p-2">
          <h1 className=" align-container big beige-text welcome-header">Welcome to Torrevisca</h1>
        </div>

        <div className="align-container mb-5">
          <p className="text-center beige-text welcome-text">We are a locally-owned store in Cambrils, selling a wide range of products that your family will love. From toys to homeware, we select our goods to bring only the best to our customers.</p>
        </div>
      </section>

      <section className="section beige-bg">
        <div className="align-container">
          <h1 className="team-header green-text big">We <img className="heart" src="/imgs/heart-img.png" width={'130px'} /> Our Team!</h1>
        </div>
        <div className="container align-container">
          <Row className="container align-container team-content">
            <img className="p-2" width={'100%'} src="/imgs/team-pic.PNG"></img>

            <p className="green-text p-2 team-text text-center">Our team is at the heart of our business. They are the driving force behind our success, constantly working together to achieve our goals and exceed customer expectations. With their dedication and expertise, they ensure that we deliver the highest quality of service for our customers.</p>
        </Row>
        </div>
        
      </section>

      <section className="p-5">
        <div className=" section beige-bg rounded-3">Events</div>
      </section>
    </>
  );
};

export default Home;
