const mongoose = require ('mongoose')

const NavbarSchema = new mongoose.Schema({
    logo:String,
    navlinks:[{
        name:String,
        url:String,
    }],
    btntext:String,
    btnlink:String,

})

module.exports = mongoose.model('Navbar', NavbarSchema)