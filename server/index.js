//js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

// Mongo DB conncetion
const database = process.env.MONGODB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));

//Routes
app.use("/", require("./routes/newsRoutes"));
const PORT = 4111;
app.listen(PORT, console.log("Server has started at port " + PORT));
