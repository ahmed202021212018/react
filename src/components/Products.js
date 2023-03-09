import { useState, useEffect } from "react";
import Product from "./Product";
// import products from "../products.json";
import { Container, Row, Col, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";


function Products(props) {
  // const [state, setstate] = useState(initialState)

  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);


  // function buy
  // le boutton est desactive si la quantite egale a 0
  const addBuy = (product) => {
    product.quantity--;
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={4}>
            <Product key={product.id} product={product} buyProd={addBuy}></Product>
          </Col>
        ))}
      </Row>
      {show && <Alert variant="primary">You bought an Item</Alert>}
      
    </Container>
  );
}

export default Products;
