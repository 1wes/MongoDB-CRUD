const { MongoClient }=require('mongodb');
const {mongo_uri}=require('./env-config');
const mongoose=require('mongoose');

// create connection
const connectDB=async()=>{

    await mongoose.connect(mongo_uri);

    console.log("DB connected..")
}

connectDB().catch(err=>{
    console.log(err)
})

module.exports={
    connectDB
}