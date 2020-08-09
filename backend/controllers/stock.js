const fs = require('fs');
const Stock = require('../models/Stock');

exports.getAllStock = (req, res, next) => {
  Stock.find()
    .then((stocks) => {
      res.status(200).json(stocks);
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

exports.getUserStock = (req, res, next) => {
  Stock.find({ userId: req.params.id })
    .then((stocks) => {
      res.status(200).json(stocks);
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

exports.createStock = (req, res, next) => {
  req.files.map((file) => {
    const stockObject = {
      ...file,
      userId: req.params.id,
    };

    const stock = new Stock({
      ...stockObject,
      stockUrl: `${req.protocol}://${req.get('host')}/${stockObject.path}`,
    });
    return stock
      .save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch((error) => res.status(400).json({ error }));
  });
};

exports.deleteStock = (req, res, next) => {
  try {
    fs.unlink(req.body.path, () => {
      Stock.deleteOne({ path: req.body.path })
        .then(() => {
          res.status(200).json({
            message: 'Deleted!',
          });
        })
        .catch((error) => {
          res.status(400).json({
            error,
          });
        });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
