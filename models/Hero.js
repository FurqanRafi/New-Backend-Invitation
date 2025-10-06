const mongoose = require ('mongoose')

const HeroSchema = new mongoose.Schema({
    
    title:String,
    heading:String,
    description:String,
    btntext:String, 
    btnlink:String,
    heroimg:String,
    sideimg:String
})

module.exports = mongoose.model('Hero', HeroSchema)