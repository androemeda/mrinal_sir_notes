const UserModel = require('../models/user');

exports.createUser = (req , res) => {
    const body = req.body;

    UserModel.create({
        username : req.body.username ,
        email : req.body.email ,
        password : req.body.password ,
        createdAt : req.body.createdAt
    })
    console.log(UserModel);

    return res.status(201).json({message : 'User created'}); // status code 201 --> created
}

exports.getAllUsers = async (req , res) => {
    const allUsers = await UserModel.find();
    return res.json(allUsers);
}

exports.getById = async (req , res) => {
    const user = await UserModel.findById(req.params.id);
    return res.json(user);
}

exports.updateUser = async (req , res) => {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id , req.body);
    return res.json(updatedUser);
}

exports.deleteUser = async (req , res) => {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    return res.json(deletedUser);
}