import axios from "axios";

const api = axios.create({
  baseURL: "https://semanacet.cefetvga.pro.br/api",
  headers: {
    Accept: 'application/json',
  }
})
export default api;