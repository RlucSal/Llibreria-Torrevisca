import React, { useState } from "react";
import "../app.css";
import NavbarEl from "../Components/NavbarEl";


const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <NavbarEl />
  
      <div className="about-title">
      <h1>About Us</h1>
      </div>
      <div className="text-container">
          <h3>Who We Are</h3>
          <p>
            Torrevisca is a dream come true that was founded by Pilar
            Brandariz and Ernestina Lucena in <span className="numbers">2015</span>.
            Two lifelong friends who came from two completely different worlds and
            occupations, but the two of us have always shared the same values, respect,
            and the love for a job well done and the passion that accompanies us in everything we do.
          </p>
        </div>
      <div className="contact-image"></div>
      <div className="about-flexbox">
        <div className="text-container">
          <h3>Women with Strong Ideas</h3>
          <p>
            The first is the love for local commerce, for commerce between people,
            traditional and professional, that puts quality before quantity. A familiar
            treatment where our priority is to offer a friendly and honest service.
            At the end, we are what we offer and not what we sell...
            <br />
            <br />
            And the second is this revolutionary spirit that leads us to get up every
            morning. We think it is really revolutionary to sell stories, books, puzzles,
            board games, or wooden toys in a completely digitalized era. We represent an
            alternative, a proposal that, despite being in favor of the use of technology and
            artificial intelligence, has a different, transformative proposal that brings
            multiple benefits to our environment.
          </p>
        </div>
      </div>

      <div className="form-wrapper">
      <h2>We can't wait to hear from you</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    
    </>
  );
};

export default AboutUs;
