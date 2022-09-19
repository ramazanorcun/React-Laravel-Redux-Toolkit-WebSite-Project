import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategories, getCategories, updateCategories } from "../slice/categoriesSlice";
import { Input, InputGroup } from "reactstrap";
import {  updateSubCategories } from "../slice/subCategoriesSlice";

function EditCategoryModal() {
  const dispatch = useDispatch();
  //map etmede kullanılır
  const categories = useSelector((state) => state.categories);
  const subCategories = useSelector((state) => state.subCategories);

  const [categoryId, setCategoryId] = useState();
  const [subCategoryId, setSubCategoryId]=useState();
  const [name, setNewCategory] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //category delete
  const handleChangeCategory = (e) => {
    setCategoryId(e.target.value);
  };

  const deleteCategory = (e) => {
    e.preventDefault();
    dispatch(deleteCategories(categoryId))
    .then(() => {
      handleClose();
    });
  };

  //category update
  const handleUpdateCategory = (e) => {
    setNewCategory(e.target.value);
    
  };
  const updateCategory = (e) => {
    e.preventDefault();
    dispatch(updateCategories({ name, categoryId }))
    dispatch(getCategories());
  };

// subCategory update

const handleChangeSubCategory=(e)=>{
  setSubCategoryId(e.target.value)
}
  const handleUpdateSubCategory = (e) => {
    setNewCategory(e.target.value);
  };

  const updateSubCategory = (e) => {
    e.preventDefault();
    dispatch(updateSubCategories({ name, subCategoryId,categoryId }))
    .then(() => {
      handleClose();
    });
  
    
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
          <Modal.Title>Category Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Category</Form.Label>
          <Form.Select name="category_id" onChange={handleChangeCategory}>
            <option>Category Seçiniz</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          <InputGroup className="mt-3">
            <Input
              type="text"
              name="category_id"
              placeholder="New Category"
              onChange={handleUpdateCategory}
            />
          </InputGroup>
          <div className="mt-3">
            <Button className="m-1" variant="danger" onClick={deleteCategory}>
              Delete
            </Button>
            <Button variant="info" onClick={updateCategory}>
              Update
            </Button>
          </div>
          <Form.Select
            className="mt-3"
            name="category_id"
            onChange={handleChangeCategory}
          >
            <option >Category Seçiniz</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="mt-3"
            name="subCategory_id"
            onChange={handleChangeSubCategory}
          >
            <option>Sub Category Seçiniz</option>
            {subCategories?.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.name}
              </option>
            ))}
          </Form.Select>
          <Input
            className="mt-3"
            type="text"
            name="subCategory_id"
            placeholder="New Sub Category"
            onChange={handleUpdateSubCategory}
          />
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={updateSubCategory} >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditCategoryModal;
