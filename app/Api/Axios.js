const { default: axios } = require("axios");


const Apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
// const ApiUrl = "http://localhost:1337/api";
const ApiUrl = "https://ecom-strapi-backend.onrender.com/api";

const axiosClient = axios.create({
  baseURL: ApiUrl,
  headers: {
    Authorization: `Bearer ${Apikey}`
  }
});

export default axiosClient;
