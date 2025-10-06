const Hero = require('../models/Hero')


const GetHero = async (req, res ) =>{
    try{
        const hero = await Hero.find()
        res.status(200).json(hero)
    } catch(error){
        res.status(500).json({message:error.message})
    }finally{
        
    }
}

const CreateHero = async (req, res) => {
    try{
        const del = await Hero.deleteMany()
        const myHero = await Hero(req.body)
        await myHero.save()
        res.status(200).json(myHero)
    } catch(error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const UpdateHero = async (req, res) =>{

    const UpdateHero = await Hero.findByIdAndUpdate(req.params.id,req.body,{new : true})
    try{
        const updatedHero = await UpdateHero.save() 
        res.status(200).json(updatedHero) 
    } catch(error){
        res.status(500).json({message:error.message})
    }finally{
        
    }
}

const DeleteHero = async (req, res ) =>{
    try{
        const deleteHero = await Hero.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteHero)
    } catch(error){
        res.status(500).json({message:error.message})
    }finally{
        
    }
}


module.exports = {
    GetHero,
    CreateHero,
    UpdateHero,
    DeleteHero
}