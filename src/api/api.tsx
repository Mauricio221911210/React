import axios, { Axios } from "axios";

const baseURL="http://127.0.0.1:8000/api";

const API=axios.create({baseURL});

export default API;