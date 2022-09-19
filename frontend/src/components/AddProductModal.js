import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import { addProduct, getProducts } from "../slice/productsSlice";
import { Row } from "reactstrap";

function AddProductModal() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const subCategories = useSelector((state) => state.subCategories);
  const [categoryId, setCategoryId] = useState();

  const onChangeId = (e) => {
    const categoryId = e.target.value;
    setCategoryId(categoryId);
    
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(getProducts());
    // dispatch(addProduct());
  }, []);

  const Product = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(addProduct(data));
  };

  return (
    <>
      <Button
       onClick={handleShow}>
       Add Products
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Product}>
            <Form.Label>Main Categories</Form.Label>
            <Form.Select
              title="Categories"
              placeholder="categories"
              onChange={onChangeId}
            >
              <option>Category Seçiniz</option>
              {categories?.map((category, i) => (
                <option key={i} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
            <Form.Label size="sm"> Sub Categories </Form.Label>
            <Form.Select name="sub_category_id">
              <option>SubCategory Seçiniz</option>
              {subCategories?.map((subCategory) =>
                parseInt(categoryId) === subCategory.main_category_id ? (
                  <option key={subCategory.id} value={subCategory.id}>
                    {subCategory.name}
                  </option>
                ) : null
              )}
            </Form.Select>
            <Form.Label>Product</Form.Label>
            <InputGroup>
              <Form.Control           
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Add Product"
                name="name"
              />
            </InputGroup>
            <Form.Label>Description</Form.Label>
            <InputGroup>
              <Form.Control
                aria-describedby="inputGroup-sizing-sm"
                name="description"
                placeholder="description"
              />
            </InputGroup>
            <Form.Group controlId="formFileMultiple">
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" multiple name="images[]" />
            </Form.Group>

            <Row>
            <Button className="col-4 mt-3 m-2" variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <Button className="col-4 mt-3 m-2" variant="info" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddProductModal;
