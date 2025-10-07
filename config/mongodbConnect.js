const mongoose = require("mongoose");

let isConnected = false; // Global variable to cache connection

const ConnectDb = async () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL not defined in environment variables");
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("=> new database connection");
  } catch (err) {
    console.error("DB connection error:", err);
    throw err; // So it fails clearly
  }
};

module.exports = ConnectDb;
