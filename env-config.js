require('dotenv').config();

const {PORT, MONGO_URI}=process.env;

module.exports={
    port:PORT,
    mongo_uri:MONGO_URI
}