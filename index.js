const express = require("express");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const productRoutes = require('./routes/productRoutes');

const userRoutes = require('./routes/userRoutes');

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

app.use('/api/products', productRoutes);

app.use('/api/users' , userRoutes);

/*
mongodb+srv://<username>:<password>@cluster0.xgvhkbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongodb+srv://kartikdeshpande2810:z24yoi5C933OhCtX@cluster0.xgvhkbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/