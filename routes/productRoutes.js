const express = require('express');

const router = require('express').Router();

const productControllers = require('../controllers/productController');

//create 
router.post('/' , productControllers.createProduct)

// get route
router.get('/' , productControllers.getAllProducts);

// get by id
router.get('/:id' , productControllers.getById);

// update
router.put('/:id' , productControllers.updateProduct);

// delete
router.delete('/:id' , productControllers.deleteProduct);

module.exports = router;