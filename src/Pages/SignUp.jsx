import React, { useRef, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../app.css";
import NavbarEl from "../Components/NavbarEl";
import {
  Container,
  Card,
  Form,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage) {
      navigate("/");
    }
  }, [successMessage, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      setSuccessMessage("Account created successfully!");
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/email-already-in-use") {
        setError("Email already exists. Please log in.");
      } else {
        setError("Failed to create an account");
        console.error(error);
      }
    }
  };

  return (
    <>
      <Container>
        <NavbarEl />
      </Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url('/imgs/torrevisca-book-bg.png')`,
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center", // Adjust as needed
        }}
      >

        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card bg="light" text="dark" className="rounded shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-3" id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                    autoComplete="current-password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button
                  className="w-100 mb-3 no-button-outline"
                  type="submit"
                  style={{ backgroundColor: "#B0926A" }}
                >
                  Sign Up
                </Button>
              </Form>
              <Row className="mb-3">
                <Col className="text-center mb-2">
                  <p>
                    Already have an account? <Link to="/log-in">Log In</Link>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>

  );
};

export default SignUp;
