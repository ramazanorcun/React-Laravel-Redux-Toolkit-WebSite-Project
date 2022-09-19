import axios from "axios";

const categories = () => {
  let token = localStorage.getItem("token");

  return axios
    .get("http://127.0.0.1:8000/api/mainCategories", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .then((response) => {
      return response;
    })

    .catch(function (error) {});
};
const addCategories = (item) => {
  let token = localStorage.getItem("token");

  return axios

    .post("http://127.0.0.1:8000/api/addMainCategory", item, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: "multipart/form-data",
      },
    })
    .then((response) => response.data)

    .then((response) => {
      console.log(response);
      return response;
    })

    .catch(function (error) {});
};
const deleteCategory = (categoryId) => {
  let token = localStorage.getItem("token");

  return axios

    .delete("http://127.0.0.1:8000/api/deleteMainCategory/" + categoryId, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: "multipart/form-data",
      },
    })
    .then((response) => response.data)

    .then((response) => {
      return response;
    })

    .catch(function (error) {});
};

export const updateCategory =  ({categoryId,name})=> {
  let token = localStorage.getItem('token')
  return axios
    .put('http://127.0.0.1:8000/api/updateCategory/'+categoryId, {categoryId,name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {
      console.log(response.data);
    return response.data
  })
  .catch(function (error) {
  
  });
}
const categoriesServices = {
  categories,
  addCategories,
  deleteCategory,
  updateCategory,
};

export default categoriesServices;
