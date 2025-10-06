const mongoose = require ('mongoose')

const AboutSchema = new mongoose.Schema({
    aboutimg:String,
    upperimg:String,
    title:String,
    description:String,
    img1:String,
    img2:String,
    img3:String

})

module.exports = mongoose.model('About', AboutSchema)