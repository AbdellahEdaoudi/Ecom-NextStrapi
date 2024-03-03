const { default: axiosClient } = require("./Axios");

const CreatOrder =(data)=>axiosClient.post('/orders',data)

export default {
    CreatOrder,
}