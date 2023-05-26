const mongoose =require('mongoose')
const { Schema } = mongoose;
const dataschema = new Schema ({
    name:{type:String,required:true},
    email:{type:String,required:true},
    country:{type:String,required:true},
    travellers:{type:Number,required:true},
    budget:{type:Number,required:true}
},{
    timestamps:true
})
const data = mongoose.model("data",dataschema)
module.exports = data