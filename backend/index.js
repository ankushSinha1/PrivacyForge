import express from "express";
// const express = require('express')
import dotenv from 'dotenv';
// const dotenv = require('dotenv')
import mongoose from "mongoose";
const app = express();
dotenv.config();
mongoose.connect('mongodb+srv://sinha_ankush:ankush_1234@cluster0.bh6n32m.mongodb.net/');
app.get('/:address', function(req,res){
    History.findAll({address: req.body.address})
    .then(data => {return res.json({data})});
});

app.listen(4000, ()=>{
    console.log(`Server running at ${process.env.PORT}`)
});