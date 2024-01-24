import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../app.css";
import NavbarEl from "../Components/NavbarEl";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import VideoBackground from "../Components/VideoBackground";

const Home = () => {
  // const navigate = useNavigate();

  // const handleSignUpClick = () => {
  //   navigate("/sign-up");
  // };

  return (
    <>
      <VideoBackground />

      <section className="section">
        <div className="p-2 align-container">
          <img src="/imgs/globe.png" width={'500px'}></img>
        </div>

        <div className="p-2">
          <h1 className=" align-container big beige-text welcome-header">Welcome to Torrevisca</h1>
        </div>
        <div className="align-container">
          <div className="mb-5 text-center welcome-text">
            <p className="beige-text mb-3">We are a locally-owned store in Cambrils, selling a wide range of products that your family will love. From toys to homeware, we select our goods to bring only the best to our customers.</p>
            <Link to="/product-catalogue">
              <Button className="beige-bg green-text rounded-5 no-button-outline-beige products-btn">SEE PRODUCTS</Button>
            </Link>
          </div>
        </div>

      </section>

      <section className="section beige-bg">
        <div className="align-container">
          <h1 className="team-header green-text big">We <img className="heart" src="/imgs/heart-img.png" width={'130px'} /> What We Do!</h1>
        </div>
        <div className="container align-container">
          <div className="container align-container team-content">
            <img className="p-2 mb-3 team-pic" width={'50%'} src="/imgs/team-pic.PNG"></img>
            <div className="p-3 mb-3 team-text text-center">
              <p className="green-text">As a team, we work together to achieve our goals and exceed customer expectations. We are committed to providing the best for our customers. At our shop, we prioritise customer satisfaction and strive to create a positive and enjoyable shopping experience. We are always ready to assist customers with their needs and ensure they leave our shop with a smile on their face. </p>
              <Link to="/AboutUs">
                <Button className="green-bg yellow-text rounded-5 no-button-outline-green contact-btn"> CONTACT US!</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h1 className=" big p-5 align-container events-header beige-text">Our Events</h1>

        <div className="event-imgs align-container">
          <Row>
            <Col>
              <div className="event-img-portrait">
                <img src="/imgs/event-portrait1.png" />
              </div>
            </Col>
            <Col>
              <div className="event-img-landscape mb-4">
                <img src="/imgs/event-landscape1.png" />
              </div>
              <div className="event-img-landscape">
                <img src="/imgs/event-landscape2.png" />
              </div>
            </Col>
            <Col>
              <div className="event-img-portrait">
                <img src="/imgs/event-portrait2.png" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="align-container">
          <div className="text-center p-5 events-text">
            <p className="beige-text">We hold events for all ages, all year round! From storytelling for young children, to acclaimed writers, we like to think we cover it all. Check out our Events page to see what we've got coming up next.</p>
            <Link to="/events">
              <Button className="beige-bg green-text rounded-5 no-button-outline-beige contact-btn">TO EVENTS</Button>
            </Link>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;
