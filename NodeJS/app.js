//import { Express } from "express";
const express = require('express');
const app= express();
const ProductRoute=require('./Routes/Product.route');

//mongo DB - Mongoose - mongo DB Atlas

// mongodb+srv://Stuti:<password>@cluster0.v81pb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// Stuti
// Stuti0103

const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://Stuti:0AoEollpJed05l2e@cluster0.v81pb.mongodb.net/',
    {
        dbName: 'RestAPI_Products',
        
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log("cannot connect "+err);
});


//const uri = "mongodb+srv://Stuti:Stuti@0103@cluster0.v81pb.mongodb.net/RestAPI_Products";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//  client.close();
//});

app.use('/products',ProductRoute);

app.get("/",(Req,Res,Next)=>{
    console.log(Req.url);
    Res.send("Home Page");
});

// error handling

app.use((req,res,next)=>{
    const err = new Error("Not Found");
    err.status = 404
    next(err); 
});

 // error handler - works from anywhere in app eg. check from productroute

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    });
});

app.listen(8000, ()=>{
    console.log("Listening on port 8000");
});