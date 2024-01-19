import React, { useRef } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../app.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


function ProductCatalogue() {

  // database configuration and info retrieval
  const db = getDatabase();
  const productsRef = ref(db, "products");
  onValue(productsRef, (snapshot) => {
    const data = snapshot.val();
  });

  function handleSubmit(event) {
    event.preventDefault();

    // input retrieval
    const searchInput = document.getElementById("formSearch").value;

    // database configuration and info retrieval
    const db = getDatabase();
    const productsRef = ref(db, "products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const searchResults = Object.values(data).filter(product => {
        return product.name.includes(searchInput) || product.author.includes(searchInput);
      });
      console.log(searchResults);
    });
  }

  return (
    <Container>
      <h1 className="beige-text">Product Catalogue</h1>

      {/* Searchbar */}
      <Form onSubmit={handleSubmit}>
        <Row className="w-100 searchbar">
          <Form.Label className="beige-text">Product Search</Form.Label>
          <Col>
            <Form.Group className="mb-3" controlId="formSearch">
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
          </Col>
          <Col>
            <Button className="no-button-outline brown-bg" id="input" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>


      {/* Category Cards */}
      <Row>
        <Col>
          <Card className="no-button-outline">
            <Card.Img src="/imgs/bookshelf.PNG" />
            <Card.ImgOverlay className="content">
              <Card.Body><h1 className="title beige-text">Books</h1></Card.Body>
              <Link to="product-catalogue/books" />
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="no-button-outline">
            <Card.Img src="/imgs/toys.PNG" />
            <Card.ImgOverlay className="content">
              <Card.Body><h1 className="title beige-text">Toys</h1></Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <div style={{ padding: '1%' }} />
      </Row>
      <Row>
        <Col>
          <Card className="no-button-outline">
            <Card.Img src="/imgs/stationary.PNG" />
            <Card.ImgOverlay className="content">
              <Card.Body><h1 className="title beige-text">Stationary</h1></Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="no-button-outline">
            <Card.Img src="/imgs/homeware.PNG" />
            <Card.ImgOverlay className="content">
              <Card.Body><h1 className="title beige-text">Homeware</h1></Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default ProductCatalogue;