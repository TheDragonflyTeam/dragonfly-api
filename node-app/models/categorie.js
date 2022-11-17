const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  label: {
    type: String,
    default: 0,
  },
  votes:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Vote'}
  ],
  choix: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Choix'}
  ]
});

const Categorie = mongoose.model("Categorie", categorieSchema);

module.exports = Categorie;