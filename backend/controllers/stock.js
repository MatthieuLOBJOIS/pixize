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
    stock
      .save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch((error) => res.status(400).json({ error }));
  });
};
