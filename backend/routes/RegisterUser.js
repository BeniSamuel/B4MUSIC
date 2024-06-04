const express = require('express');
const router = express.Router();
//const { admin } = require('../middlewares/userController.js');
const {User,validateUser} = require('../models/usermodel');
const _ = require('lodash');
const bcrypt=require('bcrypt')

/*router.get('/', admin, async (req, res) => {
    try {
        const users = await User.find().sort('name');
        const usernames =await users.map(user => _.pick(user, ['username']));
        res.send(usernames);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});*/
router.post('/',async (req,res)=>{
    try{
        const {error} =await validateUser(req.body);
        if (error) return res.status(400).send('Bad request');
        const ExistingUser= await User.findOne({email:req.body.email})
        if(ExistingUser) return res.status(400).send('Email is already in registered');
        const user=await new User(_.pick(req.body,['username','email','password'])) ;
        const salt=await bcrypt.genSalt(15);
        user.password= await bcrypt.hash(req.body.password,salt)
        user=await user.save();
        const token = user.generateAuthToken();
        res.setHeader('Authorization', token).send(_.pick(user, ['name']));
    }
    catch(error){
        res.status(500).send('Internal server error')
    }
})
module.exports = router;
