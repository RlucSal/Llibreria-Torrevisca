import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../../app.css";
import { Link } from "react-router-dom";

function Homeware() {
  // database configuration and info retrieval
  const db = getDatabase();
  const productsRef = ref(db, "products/homeware");
  onValue(productsRef, (snapshot) => {
    const data = snapshot.val();
    const searchResults = Object.values(data).filter((product) => {
      return (
        product.name.includes(searchInput) || product.make.includes(searchInput)
      );
    });
    console.log(searchResults);
  });

  return (
    <Container>
      <h1 className="beige-text page-title">Product Catalogue</h1>
      <Link className="link beige-text" to={"/product-catalogue"}>
        <i className="fa-solid fa-arrow-left-long beige-text"></i> Back to
        Categories
      </Link>
      <div className="align-container">
        <h2 className="beige-text category">Homeware</h2>
      </div>
      {searchResults.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          author={product.author}
          make={product.make}
          publisher={product.publisher}
          price={product.price}
        />
      ))}
    </Container>
  );
}

export default Homeware;
