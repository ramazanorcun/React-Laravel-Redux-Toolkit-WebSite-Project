import React,{useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import { Table } from "reactstrap";
import { getCategories } from "../slice/categoriesSlice";
import { getSubCategories } from "../slice/subCategoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";


function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const subCategories = useSelector((state) => state.subCategories);  
  
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());
  }, []);

  return (
    <div className="container">
    <div className="row m-3" >
      <div className="m-2">
        <AddCategoryModal/>
      </div>
      <div className="col-8">
      <Modal.Dialog>
        <Modal.Header className="m-2">
          <Modal.Title>Categories Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered hover  striped>
            <thead >
              <tr align="center">
                <th>Categories</th>
                <th>SubCategories</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              {categories?.map((category) =>
                subCategories.map((subcategory,i) =>
                  parseInt(subcategory.main_category_id) === category.id ? (
                    <tr align="center" key={i}>
                      <td>{category.name}</td>
                      <td>{subcategory.name}</td>
                      <td>
                        <EditCategoryModal/>
                      </td>
                    </tr>
                  ) : null
                )
              )}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal.Dialog>
      </div>
    </div>
    </div>
  );
}
export default Categories;
