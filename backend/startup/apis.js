const express = require('express')
const Authapi = require('../routes/logAuthenticate');
const users = require('../routes/RegisterUser')
const me = require('../routes/user')
const  songs=require('../routes/songs')

module.exports = function (app) {
    app.use('/api/B4MUSIC/login', Authapi)
    app.use('/api/B4MUSIC/register', users)
    app.use('/api/B4MUSIC/me', me)
    app.use('./api/B4MUSIC/songs',songs)
}

