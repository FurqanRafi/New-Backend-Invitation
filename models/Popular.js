const mongoose = require('mongoose')

const PopularSchema = new mongoose.Schema({
    title:String,
    description:String,
    topimg:String
})

module.exports = mongoose.model('Popular', PopularSchema)   