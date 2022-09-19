import axios from "axios";

export const SubCategories = () => {
  let token = localStorage.getItem("token");
  return axios
    .get("http://127.0.0.1:8000/api/SubCategory", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .then((response) => {
      return response;
    })

    .catch(function (error) {});
};
const addSubCategories = (item) => {
  let token = localStorage.getItem("token");

  return axios

    .post("http://127.0.0.1:8000/api/addSubCategory", item, {
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

export const updateSubCategory =  ({name, subCategoryId,categoryId})=> {
  let token = localStorage.getItem('token')
  return axios
    .put('http://127.0.0.1:8000/api/updateSubCategory/'+subCategoryId, {name, subCategoryId,categoryId},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {
console.log(response);
    return response.data
  })
  .catch(function (error) {
  
  });
}
// const deleteSubCategories = (productId) => {
//   let token = localStorage.getItem("token");

//   return axios

//     .delete("http://127.0.0.1:8000/api/deleteSubCategory/"+productId, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         ContentType: "multipart/form-data",
//       },
//     })
    
//     .then((response) =>  response.data)
//     .then((response) => {
//       return response;
//     })

//     .catch(function (error) {});
// };



const subCategoriesServices = {
  SubCategories,
  addSubCategories,
  updateSubCategory,
  // deleteSubCategories,
};
export default subCategoriesServices;
