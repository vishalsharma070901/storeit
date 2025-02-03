const mongoose = require("mongoose");

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
  },
  {
    timestamps: true,
  }
);



const User = new mongoose.model("User", UserScheme);

module.exports = User;
