import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/Col';
import '../css/style.css'
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Products from "../components/Products";
import Categories from "../components/Categories";
import AdminStores from "../pages/AdminStores";



function HomePage() {
 
  return (
    <Tab.Container   defaultActiveKey="#Categories">
      <Row className="m-3 ">
        <Col sm={4}> 
          <ListGroup>
            <ListGroup.Item className="liste" action href="#Categories">
            Categories
            </ListGroup.Item>
            </ListGroup>
            </Col >
            <Col sm={4}>
            <ListGroup >
            <ListGroup.Item  className="liste" action href="#Products">
            Products
            </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col sm={4}>
            <ListGroup >
            <ListGroup.Item  className="liste" action href="#Stores">
           Store
            </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col >
          <Tab.Content>
            <Tab.Pane eventKey="#Categories">
              <Categories />
            </Tab.Pane>
            <Tab.Pane eventKey="#Products">
              <Products />
            </Tab.Pane>
            <Tab.Pane eventKey="#Stores">
                <AdminStores/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>

    </Tab.Container>
  );
}

export default HomePage;
