// Link     : https://data.mongodb-api.com/app/data-safqf/endpoint/data/v1
// Api key  : T8EZhvnsS8oFKeivC9N3H8ylYzpUtCAh265M84YoxGwxTZJcnUyNd2X16oJK2Xst
// Uri      : mongodb+srv://jhubert:<password>@cluster0.7mx7vhx.mongodb.net/dragonfly?retryWrites=true&w=majority

const express = require("express");
const mongoose = require("mongoose");
const Router = require("../routes")

const app = express();

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