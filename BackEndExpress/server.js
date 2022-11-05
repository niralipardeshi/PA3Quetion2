const express=require('express');
//const dotenv=require('dotenv');
const morgan=require('morgan');
const cors=require('cors');
const helmet=require('helmet');

const productRouter=require('./routers/productRouter');

const app=express();
require('dotenv').config();
//dotenv.config({path:'./.env'});
const PORT= process.env.PORT || 5000;

//log requests
app.use(morgan('tiny'));

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use('/product',productRouter);

// app.get('/',(req,resp)=>{
//     resp.send("<h1>Welcome to express crud </h1>")
// })

app.listen(PORT,()=>{console.log(`Port is listening on http://localhost:${PORT}`)})