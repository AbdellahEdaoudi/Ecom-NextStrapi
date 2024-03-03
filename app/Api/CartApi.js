const { default: axiosClient } = require("./Axios");

const AddToCart = (payload) => axiosClient.post('/carts', payload)

const  getUSerCartItem =(email)=> axiosClient.get(
    `carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
)
const deletCartitem = (id)=>axiosClient.delete(`/carts/${id}`)
export default {
    AddToCart,
    getUSerCartItem,
    deletCartitem,
};