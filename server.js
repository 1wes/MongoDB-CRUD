const express=require('express');
const app=express();
const {port}=require('./env-config');
const connectDB=require('./mongo');
const cors=require('cors');
const createStudent=require('./create');
const readStudent=require('./read');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors)

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})