const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:15
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})
userSchema.methods.generateAuthToken=function (){
    const token=jwt.sign({_id:this._id},process.env.jwtPrivateKey);
    return token;
}
const User = mongoose.model('User',userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required(),
        isAdmin: Joi.boolean() 
    });
    return schema.validate(user);  
}
module.exports = {
    User,
    validateUser
};
