import axios from "axios";

const Products = () => {
  let token = localStorage.getItem("token");
  return axios
    .get("http://127.0.0.1:8000/api/Product", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .then((response) => {
      return response;
    })

    .catch(function (error) {});
};
const addProduct = (item) => {
  let token = localStorage.getItem("token");

  return axios

    .post("http://127.0.0.1:8000/api/addProduct", item, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: "multipart/form-data",
      },
    })
    .then((response) =>  response.data)
    .then((response) => {
      return response;
    })

    .catch(function (error) {});
};
const deleteProducts = ({productId}) => {
  console.log(productId);
  let token = localStorage.getItem("token");

  return axios

    .delete("http://127.0.0.1:8000/api/deleteProducts/"+productId, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: "multipart/form-data",
      },
    })
    
    .then((response) =>  response.data)
    .then((response) => {
      return response;
    })

    .catch(function (error) {});
};

const productsServices = {
  Products,
  addProduct,
  deleteProducts,
};

export default productsServices;
