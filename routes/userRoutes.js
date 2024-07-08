const express = require('express');

const router = require('express').Router();

const userControllers = require('../controllers/userController');

router.post('/' , userControllers.createUser);

router.get('/' , userControllers.getAllUsers);

router.get('/:id' , userControllers.getById);

router.put('/:id' , userControllers.updateUser);

router.delete('/:id' , userControllers.deleteUser);

module.exports = router;