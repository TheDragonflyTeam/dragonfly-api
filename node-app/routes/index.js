const express = require("express");
const Citoyen = require("../models/citoyen");
const privateKey = require("../auth/private_key");
const jwt = require('jsonwebtoken');
const Categorie = require("../models/categorie");
const Vote = require("../models/vote");
const Choix = require("../models/choix");
const app = express();
const auth = require("../auth/auth");

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
                { citoyenId: citoyen._id },
                privateKey,
                { expiresIn: '24h' }
            );

            console.log(citoyen._id)
            console.log(privateKey)
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

app.post("/add-choix", auth, async (request, response) => {
  const choix = await Choix.create(request.body);

  try {
    message = `Le choix "${request.body.label}" a bien été enregistré`
    response.json(message).send(choix);
  } catch (error) {
    response.status(500).send(error);
  }

});

app.get("/choix/:id", auth, async (request, response) => {
  const choix = await Choix.find({ "categorie": { _id: request.params.id}});
  console.log(choix)
  try {
    response.send(choix);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.get("/add-vote", auth, async (request, response) => {
  const vote = await Vote.create(request.body);

  try {
    message = `Le vote "${request.body.label}" dans la catégorie ayant pour id : "${request.body.categorie}" a bien été enregistré`
    response.json(message).send(vote);
  } catch (error) {
    response.status(500).send(error);
  }

});


app.get("/citoyens", auth, async (request, response) => {
  const citoyen = await Citoyen.find({});
  console.log(citoyen)
  try {
    response.send(citoyen);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/citoyen/:id", auth, async (request, response) => {
  const citoyen = await Citoyen.find({ "_id": request.params.id});
  console.log(citoyen)
  try {
    response.send(citoyen);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/votes/:id", auth, async (request, response) => {
  const vote = await Vote.find({ "categorie": { _id: request.params.id}});
  console.log(vote)
  try {
    response.send(vote);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.get("/categories", auth, async (request, response) => {
  const categorie = await Categorie.find();

  try {
    response.send(categorie);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/register", async (request, response) => {
  const citoyen = await Citoyen.create(request.body);

  try {
    message = `Le citoyen ${request.body.firstName + " " + request.body.lastName} a bien été enregistré`
    response.json({ message, data: citoyen })  } catch (error) {
    response.status(500).send(error);
  }

});

module.exports = app;