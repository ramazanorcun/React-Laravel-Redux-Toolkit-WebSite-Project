import axios from "axios";


export const register = (item) => {
  return axios.post("http://localhost:8000/api/auth/register", item);
};
export const login = ({ email, password }) => {
  return axios
    .post("http://127.0.0.1:8000/api/auth/login", {
      email,
      password,
    })
    .then((response) => {
      let user = {};
      user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(response.data));

      return response.data;
    });
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;
