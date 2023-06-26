const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const prodSchema = new Schema({

    name:{
        type:String
    },

    about:{
        type:String
    },
    prix:{
        type:Number
       
    },
    date:{
        type:String
    },
    image:{
      type:String
    }

})
const Product = mongoose.model("product",prodSchema)
module.exports= Product;