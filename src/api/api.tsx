import axios, { Axios } from "axios";

const baseURL="http://192.168.100.7:8000/api";

const API=axios.create({baseURL});

export default API;