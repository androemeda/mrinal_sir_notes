const { mongo, default: mongoose } = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
});
  
// Create the User model from the schema
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;