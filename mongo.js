const { MongoClient }=require('mongodb');
const {mongo_uri}=require('./env-config')

// instance
const client=new MongoClient(mongo_uri);

// create connection
const connectDB=async()=>{

    await client.connect();

    const db=client.db('test');

    const collection=db.collection('movies');

    let allMovies=await collection.find().toArray();

    console.log(allMovies);
}

connectDB().catch(err=>{
    console.log(err)
})

module.exports={
    connectDB
}