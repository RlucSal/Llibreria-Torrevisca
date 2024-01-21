import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../app.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
      const searchResults = Object.values(data).filter((product) => {
        return (
          product.name.includes(searchInput) ||
          product.author.includes(searchInput)
        );
      });
      console.log(searchResults);
    });
  }

  return (
    <Container>
      <h1 className="beige-text">Product Catalogue</h1>

      {/* Search */}

      <Form onSubmit={handleSubmit}>
        <Row>
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
    </Container>
  );
}

export default ProductCatalogue;
