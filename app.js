const express = require("express");
const serverlessExpress = require("@vendia/serverless-express");
const NavbarRouter = require("./routers/NavbarRouter");
const HeroRouter = require("./routers/HeroRouter");
const AboutRouter = require("./routers/AboutRouter");
const PopularRouter = require("./routers/PopularRouter");
const CardsRouter = require("./routers/CardsRouter");
const FooterRouter = require("./routers/FooterRouter");
const userRouter = require("./routers/UserRouter");
const ConnectDb = require("./config/mongodbConnect");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
ConnectDb()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

app.get("/", (req, res) => {
  res.send("You Entered the Backend");
});

app.use("/api", NavbarRouter);
app.use("/api", HeroRouter);
app.use("/api", AboutRouter);
app.use("/api", PopularRouter);
app.use("/api", CardsRouter);
app.use("/api", FooterRouter);
app.use("/api", userRouter);

module.exports = serverlessExpress({ app })

// app.listen(3000)
