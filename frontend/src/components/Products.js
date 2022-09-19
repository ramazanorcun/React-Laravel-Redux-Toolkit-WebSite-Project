import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../slice/productsSlice";
import AddProductModal from "./AddProductModal";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "reactstrap";
import EditProductModal from "./EditProductModal";

// import { addProduct } from "../slice/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(addProduct());
  }, []);

  return (
    <Container>
      <Row>
        <Row className="mt-3">
          <Col>
            <AddProductModal />
          </Col>
        </Row>

        {products?.map((product) => (
          <Card
            className="col-4 m-3"
            style={{ width: "18rem" }}
            key={product.id}
            border="primary"
         
          >
            <Carousel variant="dark" interval={null} indicators={null}>
              <Carousel.Item>
                <Card.Img
                  alt={product.name}
                  src={
                    "http://127.0.0.1:8000/Image/" + product?.get_photos[0].path
                  }
                  style={{ width: "18rem", height: "18rem", marginTop:10}}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  alt={product.name}
                  src={
                    "http://127.0.0.1:8000/Image/" + product?.get_photos[1].path
                  }
                  style={{ width: "18rem", height: "18rem", marginTop:10 }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  alt={product.name}
                  src={
                    "http://127.0.0.1:8000/Image/" + product?.get_photos[2].path
                  }
                  style={{ width: "18rem", height: "18rem", marginTop:10}}
                />
              </Carousel.Item>
            </Carousel>

            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <EditProductModal />
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
