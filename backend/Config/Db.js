const mongoose =  require("mongoose")
const connectDb = async () => {
    try {
      await mongoose.connect("mongodb+srv://shobits723:Vish%40l070901@cluster0.hiwzh.mongodb.net/storeit?retryWrites=true&w=majority&appName=Cluster0");
      console.log("DB Connected sucessfully");
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = connectDb;