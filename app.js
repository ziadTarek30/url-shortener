const express = require("express");
const app = express();
const mainRouter = require("./routes/main");
require("dotenv").config();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use("/", mainRouter);

const port = process.env.PORT || 3000;
const start = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, () => console.log("listening on port 3000"));
};
start();