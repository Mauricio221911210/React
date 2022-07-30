import axios, { Axios } from "axios";

const baseURL="http://10.148.128.184:8000/api";

const API=axios.create({baseURL});

export default API;

