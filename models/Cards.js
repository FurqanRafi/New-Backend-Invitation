const mongoose = require ('mongoose')

const CardSchema = new mongoose.Schema({
    Cardimg1:String,
    Cardimg2:String,
    Cardimg3:String,
    Cardimg4:String
})


module.exports = mongoose.model('Cards', CardSchema)