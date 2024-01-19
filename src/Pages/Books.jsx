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


function Books() {

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
      <h3 className="beige-text p-5">Books</h3>


    </Container>
  )
}

export default Books;