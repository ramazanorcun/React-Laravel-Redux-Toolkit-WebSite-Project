import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProduct } from "../slice/productsSlice";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "reactstrap";
import Footer from "../components/Footer";

function MainPage() {
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(addProduct());
  }, []);
  return (
    <div>
      <Container>
        <Row>
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
                      "http://127.0.0.1:8000/Image/" +
                      product?.get_photos[0].path
                    }
                    style={{ width: "18rem", height: "18rem", marginTop: 10 }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    alt={product.name}
                    src={
                      "http://127.0.0.1:8000/Image/" +
                      product?.get_photos[1].path
                    }
                    style={{ width: "18rem", height: "18rem", marginTop: 10 }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    alt={product.name}
                    src={
                      "http://127.0.0.1:8000/Image/" +
                      product?.get_photos[2].path
                    }
                    style={{ width: "18rem", height: "18rem", marginTop: 10 }}
                  />
                </Carousel.Item>
              </Carousel>

              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      {userData?.user_level == "3" ? <Footer /> : null}
    </div>
  );
}

export default MainPage;
