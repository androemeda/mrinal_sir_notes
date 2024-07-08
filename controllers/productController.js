const ProductModel = require('../models/product');

exports.createProduct = (req , res) => {
    const body = req.body;

    ProductModel.create({
        product_name : req.body.product_name ,
        product_price : req.body.product_price ,
        isInStock : req.body.isInStock ,
        category : req.body.category
    })
    console.log(ProductModel);

    return res.status(201).json({message : 'product created'}); // status code 201 --> created
}

exports.getAllProducts = async(req , res) => {
    const allProducts = await ProductModel.find({isInStock : true});
    return res.json(allProducts);
}

exports.getById = async(req , res) => {
    const product = await ProductModel.findById(req.params.id);
    return res.json(product);
}

exports.updateProduct = async(req , res) => {

    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id , req.body);
    return res.json(updatedProduct); 
}

exports.deleteProduct = async(req , res) => {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    return res.json(deletedProduct);
}