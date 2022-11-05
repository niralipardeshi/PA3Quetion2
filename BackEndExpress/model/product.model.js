
const mongoose=require('../db/database');

var productSchema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,    
})

var Products=mongoose.model('products',productSchema);
module.exports=Products;

