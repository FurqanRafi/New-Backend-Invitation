const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
  } finally {
  }
};

module.exports = ConnectDb;
