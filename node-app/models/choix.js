const mongoose = require("mongoose");

var Schema = mongoose.Schema


const choixSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  first: {
    type: String,
    default: 0,
  },
  second: {
    type: String,
    default: 0,
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