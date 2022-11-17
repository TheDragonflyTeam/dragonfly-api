const mongoose = require("mongoose");

var Schema = mongoose.Schema


const choixSchema = new mongoose.Schema({
  label: {
    type: String,
  },
  categorie:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie'}
  ],
  votes:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Votes'}
  ],
});

const Choix = mongoose.model("Choix", choixSchema);

module.exports = Choix;