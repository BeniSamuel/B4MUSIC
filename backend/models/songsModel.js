const { required } = require('joi')
const mongoose=require('mongoose')
const Joi=require('joi')

const songSchema=new mongoose.Schema({
    genre:{
        type:String,
        maxlength:255,
        required:true
        },
    album:{
        type:String,
        unique:false,
        required:true
    },
    name:String,
    artist:{
        type:String,
        unique:false,
        required:true
    }    
})
function validateSong(song) {
    const schema = Joi.object({
        genre: Joi.string().max(50).required(),
        album: Joi.string().max(255).required(),
        name:Joi.string().max(255).required(),
        artist: Joi.string()
    });
    return schema.validate(song);  
}
const Song= mongoose.model('Song',songSchema);
module.exports={
    Song,
    validateSong
};
