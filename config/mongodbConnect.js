// const mongoose = require('mongoose')

// const ConnectDb = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log('Mongodb Connected')
//     } catch (error){
//         console.log(error)
//     } finally {

//     }
// }

// module.exports = ConnectDb

const mongoose = require("mongoose");
let isConnected = false;

const ConnectDb = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Mongo Error:", error);
    throw error;
  }
};

module.exports = ConnectDb;
