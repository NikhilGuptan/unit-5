const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String},
    pincode:{type:Number},
    age:{type:String},
    gender:{type:String}
},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("user",userShema);
