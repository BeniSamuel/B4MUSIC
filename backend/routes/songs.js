const express = require('express')
const router = express.Router();
const {Song,validateSong}= require('../models/songsModel')
const auth = require('../middlewares/auth')
const lodash = require('lodash')

router.get('/', auth, async (req, res) => {
    try{
        const songs = await [];
    songs = await Song.find()
    res.status(200).send(_.pick(songs, ['_id', 'name']))
    }
    catch(error){
        res.status(500).send('Internal server error')
    }    
})
router.post('/',async (req,res)=>{
    const {name,genre,artist,album}=await validateSong(req.body)
    const song= await new Song(_.pick(req.body,['name,genre,artist,album']))
    await song.save();
    
})

