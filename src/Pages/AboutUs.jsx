import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutStyles from "../AboutStyles";
import NavbarEl from "../Components/NavbarEl";
import "../app.css";

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
    <div>
      <NavbarEl className="w-100" />
      <div className=""> </div>
      <h1 className="beige-text" style={AboutStyles.h1}>
        About Us
      </h1>
      <div className="container" style={AboutStyles.container}>
        <div className="row justify-content-center">
          <div className="col-md-6" style={AboutStyles.wrapper}>
            <div style={AboutStyles.imageWrapper}>
              <img
                src="/imgs/PiliErne.png"
                alt="About Us"
                className="img-fluid"
                style={AboutStyles.imageWrapper.image}
              />
            </div>
          </div>
          <div className="col-md-6" style={AboutStyles.textContainer}>
            <div className="text-container mb-4">
              <h3>Who We Are</h3>
              <p>
                Torrevisca is a dream come true that was founded by Pilar
                Brandariz and Ernestina Lucena in <span className="numbers">2015</span>. Two lifelong friends who
                came from two completely different worlds and occupations, but
                the two of us have always shared the same values, respect, and
                the love for a job well done and the passion that accompanies us
                in everything we do.
              </p>
            </div>
            <div className="text-container">
              <h3>Women with Strong Ideas:</h3>
              <p>
                The first is the love for local commerce, for commerce between
                people, traditional and professional, that puts quality before
                quantity. A familiar treatment where our priority is to offer a
                friendly and honest service. At the end, we are what we offer
                and not what we sell...
                <br />
                <br />
                And the second is this revolutionary spirit that leads us to get
                up every morning. We think it is really revolutionary to sell
                stories, books, puzzles, board games, or wooden toys in a
                completely digitalized era. We represent an alternative, a
                proposal that, despite being in favor of the use of technology
                and artificial intelligence, has a different, transformative
                proposal that brings multiple benefits to our environment.
              </p>
            </div>
          </div>
        </div>

        <h2 className="beige-text" style={AboutStyles.h2}>
          We can't wait to hear from you
        </h2>
        <div style={AboutStyles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <div style={AboutStyles.formGroup}>
              <label htmlFor="name" style={AboutStyles.formLabel}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={AboutStyles.formControl}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" style={AboutStyles.formLabel}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={AboutStyles.formControl}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" style={AboutStyles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={AboutStyles.formControl}
                required
              />
            </div>
            <div style={AboutStyles.formGroup}>
              <label htmlFor="message" style={AboutStyles.formLabel}>
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                style={AboutStyles.formControl}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={AboutStyles.submitButton}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
