const Cards = require("../models/Cards");

const Getcards = async (req, res) => {
  try {
    const cards = await Cards.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Createcards = async (req, res) => {
  try {
    const del = await Cards.deleteMany();
    const data = {
      Cardimg1: req.body.cardimg1,
      Cardimg2: req.body.cardimg2,
      Cardimg3: req.body.cardimg3,
      Cardimg4: req.body.cardimg4,
    };
    const cards = new Cards(data);
    await cards.save();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatecards = async (req, res) => {
  try {
    const data = {
      Cardimg1: req.body.cardimg1,
      Cardimg2: req.body.cardimg2,
      Cardimg3: req.body.cardimg3,
      Cardimg4: req.body.cardimg4,
    };
    const cards = await Cards.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const DeleteCards = async (req, res) => {
  try {
    const deletecards = await Cards.findByIdAndDelete(req.params.id);
    res.status(200).json(deletecards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
  }
};  

module.exports = {
  Getcards,
  Createcards,
  Updatecards,
  DeleteCards,
};
