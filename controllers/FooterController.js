const Footer = require('../models/Footer')


const GetFooter = async(req, res) =>{
    try{
        const footer = await Footer.find(req.body)
        res.status(200).json(footer)
    } catch(error){
        res.status(500).json({
            message:error.message
        })
    } finally{

    }
}


const CreateFooter = async (req, res ) =>{
    try{
        const del = await Footer.deleteMany()
        const footer = await Footer(req.body)
        await footer.save()
        res.status(200).json(footer)
    } catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const UpdateFooter = async(req,res) => {
    const updateFooter = await Footer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    try{
        const updatedFooter = await updateFooter.save()
        res.status(200).json(updatedFooter)
    } catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


const DeleteFooter = async (req, res) => {
    try{
        const deleteFooter = await Footer.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteFooter)
    }catch(error){
        re.status(500).json({
            message:error.message
        })
    }
}

module.exports = {
    GetFooter,
    CreateFooter,
    UpdateFooter,
    DeleteFooter

}