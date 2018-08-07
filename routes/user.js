const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');
const User = require('../models/User');

//TEST route
router.get('/', (req, res) => {
    res.send('Yay for USER route!');
});

//@route    POST routes/user/register
//@desc     Create new user - Register new user
//@access   Public
router.post('/register', (req, res) => {
   
    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
  });

  newUser.save().then(user => res.json(user));
});

//@route    POST routes/user/login
//@desc     Login user
//@access   Public
router.post ('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //Find user by id to direct to correct profile
    User.findOne({email})
        .then (user => {
        if (!user) {
            return res.status(404).json
            ({email: 'User not found'});
        }
    
        //Confirm password is correct
    bcrypt.compare(password, user.password)
        .then (isMatch => {
        if (isMatch) {

         //User match confirmed now get token for authentication through routes
            const payload = {
                id: user.id, 
                name: user.name,
                handle: user.handle,
                avatar: user.avatar
             };

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 },
            (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
            }
            )

        } else {
            
            errors = 'Incorrect password.';
            return res.status(400)
            .json(errors);
            }
        })
    })
})


module.exports = router;