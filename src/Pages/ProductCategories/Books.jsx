import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../../app.css";
import { Link } from "react-router-dom";
import BookCard from "../../Components/BookCard";

function Books() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, "products/books");

    onValue(productsRef, (snapshot) => {
      const data = Object.values(snapshot.val());
      setProducts(data);
    });
  }, []);

  return (
    <Container>
      <h1 className="beige-text page-title">Product Catalogue</h1>
      <Link className="link beige-text" to={"/product-catalogue"}>
        <i className="fa-solid fa-arrow-left-long beige-text"></i> Back to
        Categories
      </Link>
      <div className="align-container">
        <h2 className="beige-text category">Books</h2>
      </div>
      {products.map((product) => (
        <BookCard
          key={product.id}
          name={product.name}
          author={product.author}
          publisher={product.publisher}
          price={product.price}
        />
      ))}
    </Container>
  );
}

export default Books;
