const express=require('express');
const router=express.Router();
const User = require('../models/usermodel.js');
const auth=require('../middlewares/auth.js')

router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});
module.exports=router;