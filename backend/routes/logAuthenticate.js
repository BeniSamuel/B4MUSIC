const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User,validateUser} = require('../models/usermodel.js');

router.post('/', async (req, res, next) => { 
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send({ message: 'Bad request' });

    let userFound = await User.findOne({ email: req.body.email });
    if (!userFound) return res.status(400).send('Invalid user');

    const validPassword = await bcrypt.compare(req.body.password, userFound.password); 
    if (!validPassword) return res.status(400).send('Invalid username or password');
    userFound.generateAuthToken()
    next()
});

module.exports=router;
