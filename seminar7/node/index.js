const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const ordersRoutes = require('./routes/ordersRoutes');
const logger = require('./utils/middlewares');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: process.env.CLIENT_URL || 'http://127.0.0.1:5500'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(logger);

app.use('/orders', ordersRoutes);

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

// req.params
app.get('/user/:id', function(req, res) {
  const id = req.params.id;
  // res.send(`User with id: ${id}`);
  res.json({msg: `User with id: ${id}`});
})

// req.query
app.get('/resursa', function(req, res) {
  const pagina = req.query.pagina;
  const limita = req.query.limita;

  res.send(`Pagina: ${pagina}, Limita: ${limita}`);
})

app.listen(PORT, function() {
  console.log(`Server running on port: ${PORT}`)
});