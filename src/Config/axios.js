import axios from "axios";

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, //  "http://localhost:44389/",
  // baseURL: "https://apps.tamsa.com.mx/wotservices_test/",
});

export default clienteAxios;
