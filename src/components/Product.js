import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getallProducts, deleteProduct } from "../services/api";



function Product(props) {
  // pas de constructeur.
  //forme:  const [state, setstate] = useState(initialState)

  const [isBestProduct, setIsBestProduct] = useState(false);
  const [product, setProduct] = useState(props.product);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const Like = () => {
    if (product.like < 5) {
      setProduct({
        ...product,
        like: product.like + 1,
      });
    } else if (!isBestProduct) {
      setIsBestProduct(true);
    }
  };

  useEffect(()=>{
    getProducts()
  }, []);

  const getProducts= async() =>{
    const response = await getallProducts();
    console.log(response);
    setProducts(response.data);
  }

  const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
  if (result) {
    await deleteProduct(id);
    getProducts(); }
  }

  
  return (
    <Card
      style={{ width: "18rem" }}
      className={isBestProduct ? "bestProduct" : ""}
    >
      <Card.Header>
        <Card.Img variant="top" src={"../assets/images/" + product.img} />
      </Card.Header>
      <Card.Body>
        {/* <Card.Title>{product.name}</Card.Title> */}
        <Card.Title><Link to={`/products/${product.name}`}> {product.name}</Link></Card.Title>
        <Card.Text>Quantity: {product.quantity} </Card.Text>
        <Card.Text> Price : {product.price}dt </Card.Text>
        <Card.Text>Liked : {product.like}</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
        <Row>
          <Col md={6}>
            <Button variant="primary" onClick={Like}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="secondary"
              onClick={() => props.buyProd(product)}
              disabled={product.quantity === 0}
            >
              Buy
            </Button>
          </Col>
          
          <Col md={6}>
            <br></br>
            <Button variant="success">
              <Link
                to={`/products/update/${product.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Update Product{" "}
              </Link>
            </Button>
          </Col>
          
          <Col md={6}>

            <Button 
            style={{marginTop: "22px" }}
            variant="danger"
            onClick={()=> deleteProd(product)}
            >
              Delete Product
            </Button>
          </Col>

        </Row>
      </Card.Body>
    </Card>
  );
}

export default Product;
