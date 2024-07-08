// ProductSchema
const { mongo, default: mongoose } = require("mongoose");

// mongodb generates id automatically
const productSchema = new mongoose.Schema({
    product_name : {
        type : String ,
        required : true 
    },
    product_price : {
        type : String , 
        required : true
    } ,
    isInStock : {
        type : Boolean ,
        required : true
    } , 
    category : {
        type : String , 
        required : true
    }
});

module.exports = mongoose.model("products", productSchema); // products is the collection name in the database