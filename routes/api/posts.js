const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load Post Modal
const Post = require('../../models/Posts')

//AddPost POST requeset
router.post('/add',(req,res)=>{
    //verify JWT return error
    //if JWT verified
    //create new Post model from request body
    //
    const newPost = new Post({
        userId: req.body.userId,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        date: req.body.date,
        toyCategory: req.body.categories
    });
    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => console.error(err))
});

//Get All Posts
router.get('/toys',(req,res)=>{
    Post.find()
    .exec()
    .then(post => {
        if(!post){
            return res.status(404).json({postsNotFound: "Couldn't find posts."});
        } else {
            return res.status(200).json(res)
        }
    })
    .catch((err)=>{console.error(err)});
})

module.exports = router;

//Get Posts by UserID

//Get Posts by Category