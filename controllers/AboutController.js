const About = require("../models/About");

const GetAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const CreateAbout = async (req, res) => {
  try {
    const del = await About.deleteMany();
    const about = await About(req.body);
    await about.save();
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const UpdateAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const DeleteAbout = async (req, res) => {
  try {
    const DeleteAbout = await About.findByIdAndDelete(req.params.id);
    res.status(200).json(DeleteAbout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  GetAbout,
  CreateAbout,
  UpdateAbout,
  DeleteAbout,
};
