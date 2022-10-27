const express = require("express");
const Citoyen = require("../models/citoyen");
const voteModel = require("../models/vote");
const categorie = require("../models/categorie");
const choixModel = require("../models/choix");
const privateKey = require("../auth/private_key");
const jwt = require('jsonwebtoken');
const Categorie = require("../models/categorie");
const Vote = require("../models/vote");
const app = express();


app.post('/login', (req, res) => {
  Citoyen.findOne({email: req.body.email})
      .then((citoyen) => {
          if (!citoyen) {
              const message = "L'utilisateur demandé n'existe pas."
              return res.status(40).json({ message })
          }
          if(req.body.password === citoyen.password) {
            
            console.log('ok');
            // JWT
            const token = jwt.sign(
                { citoyenId: citoyen.id },
                privateKey,
                { expiresIn: '24h' }
            );

            console.log(token);

            const message = `L'utilisateur a été connecté avec succès`
            return res.json({ message, data: citoyen, token })
          } else {
              const message = 'Le mot de passe est incorrect'
              return res.status(401).json({ message })
          }
      })
      .catch((error) => {
          const message =
              "L'utilisateur n'as pas pu se connecter. Réessayez dans quelques instants."
          return res.json({ message, data: error })
      })
})

app.put("")

app.post("/add-vote", async (request, response) => {
  const vote = await Vote.create(request.body);

  try {
    await vote.save();
    response.send(vote);
  } catch (error) {
    response.status(500).send(error);
  }

});

app.get("/citoyens", async (request, response) => {
  const citoyen = await Citoyen.find({});
  console.log(citoyen)
  try {
    response.send(citoyen);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/votes/:id", async (request, response) => {
  const vote = await Vote.find({ "categorie": { _id: request.params.id}});
  console.log(vote)
  try {
    response.send(vote);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.get("/categories", async (request, response) => {
  const categorie = await Categorie.find();

  try {
    response.send(categorie);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;



