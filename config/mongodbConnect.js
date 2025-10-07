const mongoose = require('mongoose')


const ConnectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb Connected')
    } catch (error){
        console.log(error)
    } finally {
        
    }
}

module.exports = ConnectDb

// // module.exports = ConnectDb

// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// let isConnected = false;

// const ConnectDb = async () => {
//   if (isConnected) return;

//   try {
//     await mongoose.connect("mongodb+srv://furqan:furqan123@cluster0.udrs5zb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//     isConnected = true;
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("Mongo Error:", error);
//     throw error;
//   }
// };

// module.exports = ConnectDb;
// >>>>>>> 08f4695c2457480a5c6f3d5b401bdc834a7cbd0c
