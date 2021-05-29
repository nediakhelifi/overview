//to get all the products
var axios = require("../apiService/axios");
const read =async (req,res) => {
    try {
        let response =await axios.get("/products")
        console.log(response.data)
        res.send(response.data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const readById =async (req,res) => {
    let id = req.params.id
    try {
        let response =await axios.get("/products/"+id)
        console.log(response.data)
        res.send(response.data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const readStyles =async (req,res) => {
    let id = req.params.id
    
    try {
        let response =await axios.get("/products/"+id+"/styles")
        console.log(response.data)
        res.send(response.data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const readRelated =async (req,res) => {
    let id = req.params.id
    try {
        let response =await axios.get("/products/"+id+"/related")
        console.log(response.data)
        res.send(response.data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = { read ,readById,readStyles,readRelated};
