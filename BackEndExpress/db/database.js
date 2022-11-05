const { dnsPrefetchControl } = require('helmet');
const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DbUrl,(err)=>{
    if(err){console.log('connection broken')
    }else{console.log('connection connected Successfully')}
});
var db=mongoose.connection;
db.on('error',(e)=>{console.log(e)});
module.exports=mongoose;