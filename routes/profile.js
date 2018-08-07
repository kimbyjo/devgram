const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const User = require('../models/User');
const Profile = require('../models/Profile');

router.get('/', (req, res) => {
    res.send('This is the PROFILE route!!');
});

//Create new user profile
router.post('/', (req, res) => {
   
    var newProfile = new Profile({
        user: req.body.user, 
        handle: req.body.handle,
        avatar: req.body.avatar,
        name: req.body.name,
        bio: req.body.bio,
        location: req.body.location,
        interests: req.body.interests     
  });

  newProfile.save().then(profile => res.json(profile));
});

/*
// @route   POST /profile
// @desc    Update/edit profile
// @access  Private
router.post('/', passport.authenticate('jwt', {session: false}),
(req, res) => {
  
    Profile.findOne({ user: req.user.id })
         .then(profile => {
         if (profile) {
            Profile.findOneAndUpdate(
            {user: req.body.user}, 
            {handle: req.body.handle},
            {avatar: req.body.avatar},
            {name: req.body.name},
            {bio: req.body.bio},
            {location: req.body.location},
            {interests: req.body.interests} 
            ).then(profile => res.json(profile));
        }
    });
  */

//Delete profile by id
router.delete('/', passport.authenticate('jwt', {session: false}),
(req, res) => {
    Profile.findOneAndRemove({ user: req.user.id})
    .then(() => {
        User.findOneAndRemove({_id: req.user.id})
        .then(() => res.json({ sucess: true})
        );
    });
}
);
module.exports = router;