import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NavbarEl from "../Components/NavbarEl";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/");
    } catch (error) {
      setError("Failed to Log In");
      console.error(error);
    }

    setLoading(false);
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
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card bg="light" text="dark" className="rounded shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Welcome back!</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-3" id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button
                  className="w-100 mb-3 no-button-outline"
                  type="submit"
                  style={{ backgroundColor: "#B0926A " }}
                >
                  Continue
                </Button>
              </Form>
              <Row className="mb-3">
                <Col className="text-center mb-2">
                  <p>
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
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
export default LogIn;
