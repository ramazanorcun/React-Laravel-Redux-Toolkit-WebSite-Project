import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import '../css/style.css'
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../slice/categoriesSlice";
// import { getCategories } from "../slice/categoriesSlice";
import { addSubCategories } from "../slice/subCategoriesSlice";

function AddCategoryModal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [catId, setCatId] = useState(0);

  
  function handleChange(e) {
    const catId =(e.target.value)
    setCatId(e.target.value);
    console.log(catId);
  }

  const categories = useSelector((state) => state.categories);

  const handleCategory = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(addCategories(data));
  };

  const handleSubCategory = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(addSubCategories(data)).then(() => {
      handleClose();
    });
  };

  return (
    <>
      <Button
      onClick={handleShow}>
        Add Category
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Categories </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-2" onSubmit={handleCategory}>
            <Form.Label>Add Main Categories</Form.Label>
            <Form.Control  id={catId} name="name" type="text" placeholder="Category Name" />
            <Button className="mt-2 " variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
          <Form onSubmit={handleSubCategory}>
            <Form.Label>Select Main Category </Form.Label>
            <Form.Select
              name="main_category_id"
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option hidden>Main Category</option>
              {categories?.map((category, i) => (
                <option key={i} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Add Sub Categories </Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Sub Category Name"
            />
            <br />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategoryModal;
