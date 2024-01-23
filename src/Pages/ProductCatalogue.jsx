import React, { useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../app.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import BookCard from "../Components/BookCard";
import NavbarEl from "../Components/NavbarEl";

function ProductCatalogue() {
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  // refreshes to clear search
  const handleRefresh = () => {
    window.location.reload();
  };

  function handleSubmit(event) {
    event.preventDefault();

    // input retrieval
    const searchInput = document.getElementById("formSearch").value;

    // clear previous search results
    setSearchResults([]);

    // database configuration and info retrieval
    const db = getDatabase();
    const productsRef = ref(db, "products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      const filteredResults = Object.values(data).filter((product) => {
        return (
          (product.name && product.name.includes(searchInput)) ||
          (product.author && product.author.includes(searchInput)) ||
          (product.make && product.make.includes(searchInput))
        );
      });


      // checks if there are any results returned
      if (filteredResults.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setSearchResults(filteredResults);
      }
    });
  }


  return (
    <Container>
      <NavbarEl/>
      <div className="align-container">
        <h1 className="beige-text page-title">Product Catalogue</h1>
      </div>
      

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
            <Button
              className="no-button-outline brown-bg"
              id="input"
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      {noResults && (
        <Container className="no-results">
          <Card className="beige-text brown-bg w-100">
            <Card.Title className="p-3">No results found!</Card.Title>
          </Card>
        </Container>
      )}

      {/* Display category cards until a search is made */}
      {searchResults.length > 0 ? (
        <Row>
          <Link className="link beige-text" onClick={handleRefresh}>
            <i className="fa-solid fa-arrow-left-long beige-text"></i> Back to
            Categories
          </Link>
          {searchResults.map((product) => {
            if (product.type === "books") {
              return (
                <BookCard
                  key={product.id}
                  img={product.img}
                  name={product.name}
                  author={product.author}
                  publisher={product.publisher}
                  price={product.price}
                />
              );
            } else {
              return (
                <ProductCard
                  key={product.id}
                  img={product.img}
                  name={product.name}
                  make={product.make}
                  price={product.price}
                />
              );
            }
          })}
        </Row>
      ) : (
        <>
          {/* Category Cards */}
          <Row>
            <Col>
              <Link to="/books">
                <Card className="no-button-outline">
                  <Card.Img src="/imgs/bookshelf.PNG" />
                  <Card.ImgOverlay className="content">
                    <Card.Body>
                      <h1 className="title beige-text">BOOKS</h1>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>

            <Col>
              <Link to="/toys">
                <Card className="no-button-outline">
                  <Card.Img src="/imgs/toys.PNG" />
                  <Card.ImgOverlay className="content">
                    <Card.Body>
                      <h1 className="title beige-text">TOYS</h1>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          </Row>

          <Row>
            <div style={{ padding: "1%" }} />
          </Row>
          <Row>
            <Col>
              <Link to="/stationary">
                <Card className="no-button-outline">
                  <Card.Img src="/imgs/stationary.PNG" />
                  <Card.ImgOverlay className="content">
                    <Card.Body>
                      <h1 className="title beige-text">STATIONARY</h1>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>

            <Col>
              <Link to="/homeware">
                <Card className="no-button-outline">
                  <Card.Img src="/imgs/homeware.PNG" />
                  <Card.ImgOverlay className="content">
                    <Card.Body>
                      <h1 className="title beige-text">HOMEWARE</h1>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default ProductCatalogue;
