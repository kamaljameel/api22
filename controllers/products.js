const product = require("../model/product");
const getAllProducts = async (req, res) => {

    const {company , name , featured} = req.query;
    const queryObject = {};



    if(company){
        queryObject.company=company;
    }

if(featured){
    queryObject.featured= featured;
}


    if(name){
        queryObject.name={ $regex: name, $options: 'i' };
    }

    console.log(queryObject);
          const mydata = await product.find(queryObject); 
    res.status(200).json({mydata})
}

const getAllProductsTesting = async (req, res) => {


    res.status(200).json({msag: "i get all products testing"})
}

module.exports = {getAllProducts, getAllProductsTesting};




