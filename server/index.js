//js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

// Mongo DB conncetion
const database = "mongodb+srv://danielmlimag:F0pu3rwFfDiujfMG@cluster0.zf9fdx0.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));

//Routes
app.use("/", require("./routes/newsRoutes"));
const PORT = 4111;
app.listen(PORT, console.log("Server has started at port " + PORT));
