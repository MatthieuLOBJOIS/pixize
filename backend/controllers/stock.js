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
