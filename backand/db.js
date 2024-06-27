const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://chaitanyasahu666:6g8hYs3YbwdTcPDR@cluster1.dmggxzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// const localStorage="mongodb+srv://jay_gajera:Happy108@cluster0.pv37rdy.mongodb.net/Doubtout";


const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
