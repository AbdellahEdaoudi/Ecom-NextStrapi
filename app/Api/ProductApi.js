const { default: axiosClient } = require("./Axios");

const getProducte=()=>axiosClient.get("/products?populate=*")
const getProductebyId=(id)=>axiosClient.get(`/products/${id}?populate=*`)
const getbyfiltCateg=(categorie)=>axiosClient.get(`/products?filters[categorie][$eq]=${categorie}&populate=*`)
export default {
    getProducte,
    getProductebyId,
    getbyfiltCateg

}