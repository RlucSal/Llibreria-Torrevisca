import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../../app.css";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { Row } from "react-bootstrap";

function Homeware() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, "products");

    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      const filteredResults = Object.values(data).filter((product) => {
        return (
          product.type && product.type.includes("homeware")
        )
      })
      setProducts(filteredResults)
    });
  }, [])

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
      <Row>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            name={product.name}
            make={product.make}
            price={product.price}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Homeware;
