const Navbar = require("../models/Navbar");

const GetNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.find();
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
  }
};

const CreateNavbar = async (req, res) => {
  try {
    const del = await Navbar.deleteMany();
    const myNav = await Navbar(req.body);
    await myNav.save();
    res.status(200).json(myNav);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const UpdateNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(navbar);
  } catch (error) {
    console.log(error);
  }
};

const DeleteNavbar = async (req, res) => {
  try {
    const deleteNavbar = await Navbar.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteNavbar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally { 
  }
};

module.exports = {
  GetNavbar,
  CreateNavbar,
  UpdateNavbar,
  DeleteNavbar,
};
