const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = (req, res, next) => {
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        username: req.body.username,
        mail: req.body.mail,
        password: hash,
        check: req.body.check,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ mail: req.body.mail })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id, userData: user },
              'RANDOM_TOKEN_SECRET',
              {
                expiresIn: '24h',
              }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.updateUser = (req, res, next) => {
  // console.log('request ok', req.body);
  const user = req.body;
  User.updateOne({ _id: user._id }, { ...req.body })
    .then(() => {
      res.status(200).json({
        message: 'Objet modifié!',
        userId: user._id,
        token: jwt.sign(
          { userId: user._id, userData: user },
          'RANDOM_TOKEN_SECRET',
          {
            expiresIn: '24h',
          }
        ),
      });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};
