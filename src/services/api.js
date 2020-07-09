import axios from "axios";

// import { Container } from './styles';

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
