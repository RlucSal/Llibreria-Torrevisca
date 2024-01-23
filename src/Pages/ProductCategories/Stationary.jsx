import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../../app.css";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { Row } from "react-bootstrap";
import NavbarEl from "../../Components/NavbarEl";


function Stationary() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, "products");

    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      const filteredResults = Object.values(data).filter((product) => {
        return (
          product.type && product.type.includes("stationary")
        )
      })
      setProducts(filteredResults)
    });
  }, [])

  return (
    <>
      <NavbarEl />
      <Container>
        <h1 className="beige-text page-title">Product Catalogue</h1>
        <Link className="link beige-text" to={"/product-catalogue"}>
          <i className="fa-solid fa-arrow-left-long beige-text"></i> Back to
          Categories
        </Link>
        <div className="align-container">
          <h2 className="beige-text category">Stationary</h2>
        </div>
        <div className="container rounded-3 w-100 p-5 brown-bg">
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
        </div>
      </Container>
    </>
  );
}

export default Stationary;