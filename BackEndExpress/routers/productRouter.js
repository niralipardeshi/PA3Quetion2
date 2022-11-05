const router=require('express').Router();
const e = require('express');
const Products=require('../model/product.model');

router.get("/:id",(req,resp)=>{
    Products.findById({'_id':req.params.id},(err,product)=>{
        if(err){
            console.log(err);
        }else if(!product){
            console.log('product not found')
        }else{
            console.log(product); 
            resp.send(product);
        }
    })
})

router.post("/",(req,resp)=>{
    var prod=new Products({
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity
    })
    prod.save((err,products)=>{
        if(err){
            resp.send(products); 
            console.log(err)}
        else{
            console.log(products);
            resp.send(products);   
        }        
    })
})

router.put('/:id',(req,resp)=>{
    Products.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,product)=>{
        if(err) return resp.status(500).send('there was a problem in updateing');
        resp.status(200).send(product);
    })
})

router.delete('/:id',(req,resp)=>{
    Products.findOneAndRemove({_id:req.params.id},(err,product)=>{
        if(err) return resp.status(500).send('there was a problem in Deleting');
        resp.status(200).send(product);
    })
})

router.get('/',(req,resp)=>{
    Products.find((err,productlist)=>{
        if(err){
            console.log(err);
        }else if(!productlist){
            console.log('products not found')
        }else{
            console.log(productlist);
            resp.send(productlist);
        }
    })
})

module.exports=router;