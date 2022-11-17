const mongoose = require("mongoose");

const citoyenSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: 0,
  },
  lastName: {
    type: String,
    default: 0,
  },
  email: {
    type: String,
    default: 0,
    required: true,
  },
  password: {
    type: String,
    default: 0,
  },
  votes:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Vote'}
  ]
});

const Citoyen = mongoose.model("Citoyen", citoyenSchema);

module.exports = Citoyen;