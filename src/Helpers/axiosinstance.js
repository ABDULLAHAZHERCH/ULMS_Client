import axios from "axios";

const BASE_URL = [
  "http://localhost:5000/api/v1",
  "https://ulms-server.vercel.app/api/v1",
][0];

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
