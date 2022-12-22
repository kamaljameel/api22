const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price:{
       type: Number,
       required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default:Date.now(),
    },
    company:{
        type: String,
        enum:{
        values: ["apple","tesla","dell"],
        message: `{values} is not supportted` ,
        }
    }
})

module.exports = mongoose.model("product", productSchema);


