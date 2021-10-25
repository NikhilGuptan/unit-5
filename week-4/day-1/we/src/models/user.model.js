const mongoose = require("mongoose");

// 1  shema

const userSchema = new mongoose.Schema({
    first_name : {type:String,required:true},
    last_name : {type:String,required:true},
    email:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

// 2. creatig the model

module.exports =  mongoose.model("user",userSchema);