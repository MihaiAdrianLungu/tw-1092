const express = require('express');
const cors = require('cors');
const orders = require('./utils');
const app = express();

app.use(cors({
  origin: 'http://localhost:5500'
}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/orders', function(req, res) {
  res.json(orders);
})

app.get('/orders/:id', function(req, res) {
  const id = req.params.id;
  const foundOrder = orders.find(el => el.id == id);

  if (foundOrder) {
    res.json(foundOrder);
  } else {
    res.statusCode = 404;
    res.json({})
  }
})

app.post('/add-order', function(req, res) {
  console.log(req.body);
})

app.put('/update-order', function(req, res) {
  console.log(req.body)
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

app.listen(3000);