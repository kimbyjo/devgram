const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const User = require('../models/Post');
const Profile = require('../models/Profile');

router.get('/', (req, res) => {
    res.send('This is the POST route!!');
});

//Create new post
router.post('/', (req, res) => {
   
    const newPost = new Post({
        user: req.user.id, //Get user from id
        text: req.body.text,
        image: req.body.image,
        name: req.body.name, //Get name from id
        avatar: req.body.avatar     
  });

  newPost.save().then(post => res.json(post));
});


module.exports = router;