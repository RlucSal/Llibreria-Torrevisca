import { getDatabase, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import "../app.css";


function ProductCatalogue() {

  // database configuration and info retrieval
  const db = getDatabase();
  const productsRef = ref(db, "products");
  onValue(productsRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });


  return (
    <Container>
      <h1>This is the product catalogue</h1>
    </Container>
  )
}

export default ProductCatalogue;