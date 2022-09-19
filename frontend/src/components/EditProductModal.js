import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts } from "../slice/productsSlice";


function EditProductModal() {
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.subCategories);
  const products = useSelector((state) => state.products);

  const [productId, setProductId] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeProduct = (e) => {
    setProductId(e.target.value);
  };

  const deleteProduct = (e) => {
    e.preventDefault();
    dispatch(deleteProducts({ productId }));
  };
  return (
    <div className="m-2">
      <Button
        variant="primary"
        style={{ backgroundColor: "InactiveCaptionText" }}
        onClick={handleShow}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Sil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Sub Category</Form.Label>
          <Form.Select name="sub_category_id">
            <option>SubCategory Seçiniz</option>
            {subCategories?.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.name}
              </option>
            ))}
          </Form.Select>
          <Form.Label>Product</Form.Label>
          <InputGroup>
            <Form.Select name="product_id" onChange={handleChangeProduct}>
              <option>Product Seçiniz</option>
              {products?.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
          {/* <Form.Group controlId="formFileMultiple">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple name="images[]" />
          </Form.Group> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProductModal;
