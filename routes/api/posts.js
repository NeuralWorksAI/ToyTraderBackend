const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load Post Modal
const Post = require('../../models/Posts')

//AddPost POST requeset
router.post('/add',(req,res)=>{
    
    const newPost = {

    }
})