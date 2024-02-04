const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
//Importing Schema Models

const User = require('./model/userSchema');
const Feedback = require('./model/feedbackSchema');

var cors = require('cors')
app.use(cors());
app.use(express.json()) //to undestand json format

//Middleware implementation
const middleware = (req,res,next)=>{
    console.log(`Hello my middleware`);
    next();
}

//using dotenv to secure connection
dotenv.config({path:'./config.env'})
require('./db/conn')
const PORT = process.env.PORT;


app.get('/',(req,res)=>{
    res.send(`Hello world from the server`)
});

app.get('/about',middleware,(req,res)=>{
    res.send(`Hello world from the about`)
});

app.post('/register',(req,res)=>{
    console.log(req.body);
    //res.send({message: req.body})
    const {name,email,phone,domain,desc} = req.body;

    if(!name || !email || !phone || !domain || !desc){
        return res.status(422).json({error: "Please fill all the fields properly"})
    }
    const user= new User({name,email,phone,domain,desc});
    user.save().then(()=>{
        res.status(201).json({message:"Message sent successfully"});
    }).catch((err)=> res.status(500).json({error:"Failed to register"}));
})
app.post('/feedback',(req,res)=>{
    console.log(req.body);
    //res.send({message: req.body})
    const {name,email,desc} = req.body;

    if(!name || !email || !desc){
        return res.status(422).json({error: "Please fill all the fields properly"})
    }
    const feedback= new Feedback({name,email,desc});
    feedback.save().then(()=>{
        res.status(201).json({message:"Thank you so much for taking the time to leave us feedback"});
    }).catch((err)=> res.status(500).json({error:"Failed to register"}));
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
