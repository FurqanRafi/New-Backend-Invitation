const Popular = require("../models/Popular");

const Getpop = async (req, res) => {
  try {
    const popular = await Popular.find();
    res.status(200).json(popular);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Createpop = async (req, res) => {
  try {
    const del = await Popular.deleteMany();
    const mypop = await Popular(req.body);
    await mypop.save();
    res.status(200).json(mypop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const UpdatePop = async (req, res) => {
  const updatePopular = await Popular.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  try {
    const updatedpop = await updatePopular.save();
    res.status(200).json(updatedpop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Deletepop = async (req, res) => {
  try {
    const deletepopular = await Popular.findByIdAndDelete(req.params.id);
    res.status(200).json(deletepopular);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  Getpop,
  Createpop,
  UpdatePop,
  Deletepop,
};
