const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  label: {
    type: String,
    default: 0,
  },
  citoyen:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Citoyen'}
  ],
  categorie:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie'}
  ],
  choix: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Choix'}
  ]
});

const Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;