const User = require('../models/User')
const bcrypt = require('bcrypt')    
const jwt = require('jsonwebtoken')

const Register = async (req, res ) =>{
    try {
        const {username, email, password, phone} = req.body
        const checkUser = await User.findOne({email})
        if (checkUser){
            return res.status(400).json({
                message:"User Already Exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10 )
        const user = new User({
            username,
            email, password: hashedPassword,
            phone
        })
        await user.save()
        res.status(200).json({
            message:"User Reqistered Successfully",
            user: {id: user._id, username: user.username, email: user.email, password: hashedPassword, phone:user.phone}
        })
    } catch (error){
        res.status(500).json({
            message:error.message
        })
    }
}

const Login = async (req, res ) =>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"User Not find"
            })
        } 
        const Match = bcrypt.compare(password, user.password)
        if(!Match) return res.status(400).json({
            message:"Incorrect Password"
        })
        const token = jwt.sign({id: user._id}, "SECRET_KEY")
        res.status(200).json({
            message:"Login SuccessFully ",
            user:{id:user._id, username:user.username, email:user.email},token
        })


} catch (error){
    res.status(500).json({
        message:error.message
    })
}
}

module.exports = {
    Register,
    Login
}