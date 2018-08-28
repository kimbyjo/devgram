const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/Post');

router.get('/', (req, res) => {
    res.send('This is the POST route!!');
});

//Create new post
router.post('/', (req, res) => {
   
    const newPost = new Post({
        user: req.body.user,
        text: req.body.text,
        image: req.body.image,
        name: req.body.name    
  });

  newPost.save().then(post => res.json(post));
});


module.exports = router;
