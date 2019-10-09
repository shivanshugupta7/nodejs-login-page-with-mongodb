var express = require('express');
var mongoose=require('mongoose')
var Schema = mongoose.Schema
const { check, validationResult } = require('express-validator');

mongoose.connect("mongodb+srv://shivanshu:PASSWORD@cluster0-owf5m.mongodb.net/latest?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })
const Student = new Schema({
    name:String,
    email:{
        type: String,
        lowercase: true,
        trim: true,
    },
	password: String,
})

module.exports = Student;

