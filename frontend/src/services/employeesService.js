import axios from "axios";

// export const TmpStore = () => {
//   let token = localStorage.getItem("token");
//     return axios
//     .get("http://127.0.0.1:8000/api/TmpStore", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((response) => response.data)
//     .then((response) => {
//       return response;
//     })
//     .catch(function (error) {});
// };


const addEmployees = ({email}) => {
  let token = localStorage.getItem("token");
  let user = JSON.parse(localStorage.getItem("user"));

  return axios
  
    .post("http://127.0.0.1:8000/api/mailGonder", {email,store_id:user.store_id},{
      headers: {
        Authorization: `Bearer ${token}`,
        // ContentType: "multipart/form-data",
      },
     
    })
    .then((response) => response.data)

    .then((response) => {
      return response;
    })

    .catch(function (error) {});
};

// export const updateTmpStore =  (id)=> {
//   let token = localStorage.getItem('token')
//   return axios
//     .put('http://127.0.0.1:8000/api/updateTmpStore/'+id,{
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(function (response) {
//     console.log(response);
//     return response.data
//   })
//   .catch(function (error) {
  
//   });
// }
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



const tmpStoreService = {
  // TmpStore,
  addEmployees,
  // updateTmpStore,
  // deleteSubCategories,
};
export default tmpStoreService;
