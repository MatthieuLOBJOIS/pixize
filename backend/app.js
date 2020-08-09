const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stockRoutes = require('./routes/stock');
const userRoutes = require('./routes/user');

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.BDD_USERNAME}:${process.env.BDD_PASSWORD}@cluster0-nofxw.mongodb.net/pixize?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());
app.use('/stock', express.static('stock'));
app.use('/api/stock', stockRoutes);
app.use('/api/auth', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
