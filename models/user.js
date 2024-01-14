const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
name:{type:String,required:true},
age:{type:Number},
favoritesfood:[String]
});

const user=mongoose.model("User",userSchema)
module.exports=user

