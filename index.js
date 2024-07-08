const express = require("express");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});

app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

// ProductSchema
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

const ProductModel = mongoose.model('products' , productSchema);

//create 
app.post('/api/products' , async(req , res) => {
    const body = req.body;

    ProductModel.create({
        product_name : req.body.product_name ,
        product_price : req.body.product_price ,
        isInStock : req.body.isInStock ,
        category : req.body.category
    })
    console.log(ProductModel);

    return res.status(201).json({message : 'product created'}); // status code 201 --> created
})

// get route
app.get('/api/products' , async(req , res) => {
    const allProducts = await ProductModel.find({isInStock : true});
    return res.json(allProducts);
});

// get by id
app.get('/api/products/:id' , async(req , res) => {
    const product = await ProductModel.findById(req.params.id);
    return res.json(product);
});

// update
app.put('/api/products/:id' , async(req , res) => {

    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id , req.body);
    return res.json(updatedProduct); 
});

// delete
app.delete('/api/products/:id' , async(req , res) => {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    return res.json(deletedProduct);
});

/*
mongodb+srv://<username>:<password>@cluster0.xgvhkbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongodb+srv://kartikdeshpande2810:z24yoi5C933OhCtX@cluster0.xgvhkbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/