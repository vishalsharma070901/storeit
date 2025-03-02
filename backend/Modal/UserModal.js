const mongoose = require("mongoose");
const jwt =  require("jsonwebtoken");

const UserScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    initialSize: {
      type: Number, 
      default: 20 * 1024 * 1024 * 1024, 
    },
    usedSize: { 
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

UserScheme.methods.generateToken = function () {
  try {
    const token  = jwt.sign({
      userId:this._id.toString(),
      email: this.email,
      initialSize: this.initialSize,
      usedSize: this.usedSize,
    }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return  token;
  } catch (error) {
    console.log(error);
  }

} 


const User = new mongoose.model("User", UserScheme);

module.exports = User;
