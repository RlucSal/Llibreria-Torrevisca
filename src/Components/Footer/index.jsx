import React from "react";
import { Button } from "react-bootstrap";
import "./style.css"
import "../../app.css"

const Footer = () => {
  return (
    <div className="wrapper align-container green-bg">
      <footer className="footer yellow-bg green-text p-5">

        <div className="align-container">
          <h5>Llibreria Torrevisca 2024</h5>
        </div>
        
<div className="align-container">
          <div className="text-center p-4">
          <Button className="green-bg no-button-outline" target="_blank" href="https://www.instagram.com/llibreriatorrevisca/"><i className="fa-brands fa-instagram beige-text"></i></Button>
          <p className="social-text green-text">Instagram</p>
        </div>

        <div className="text-center p-4">
          <Button className="green-bg no-button-outline" target="_blank" href="https://www.facebook.com/profile.php?id=100069859880375"><i className="fa-brands fa-facebook-f beige-text"></i></Button>
          <p className="social-text green-text">Facebook</p>
        </div>

        <div className="text-center p-4">
          <Button className="green-bg no-button-outline" target="_blank" href="https://www.eventbrite.co.uk/o/llibreria-torrevisca-77645227423"><i className="fa-solid fa-calendar-days beige-text"></i></Button>
          <p className="social-text green-text">Eventbrite</p>
        </div>
</div>


      </footer>
    </div>
  );
};

export default Footer;