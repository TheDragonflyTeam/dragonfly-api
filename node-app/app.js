var express = require('express');
var path = require('path');
var cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const mongoose = require("mongoose");
const Router = require("./routes")

app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://jhubert:x3k%3Fbx&8gS6&nhSP@cluster0.7mx7vhx.mongodb.net/dragonfly?retryWrites=true&w=majority`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

module.exports = app;
