const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load Post Modal
const Post = require('../../models/Posts')

//AddPost POST requeset
router.post('/add',async(req,res)=>{
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
        category: req.body.category
    });
    await newPost
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
            return res.status(200).json(post)
        }
    })
    .catch((err)=>{console.error(err)});
})
//Get Posts by UserID
router.get('/toys/:id',(req,res)=>{
    Post.find({userId:req.params.id})
        .then((toys)=>{
            return res.status(200).json(toys);
        })
        .catch((err)=>{
            return res.status(500).json({message:`Error getting toys by uID ${err}`})
        })
})
//Get Posts by Category
router.get('/toys/category/:category',(req,res)=>{
    Post.find({category:req.params.category})
        .then((toys)=>{
            return res.status(200).json(toys);
        })
        .catch((err)=>{
            return res.status(500).json({message:`Error getting toys by category ${err}`})
        })
})
module.exports = router;

