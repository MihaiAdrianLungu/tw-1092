const express = require('express');
const cors = require('cors');
const usersRoutes = require('../routes/usersRoutes');
const app = express();

app.use(cors({origin: 'http://localhost:5500'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', usersRoutes);

module.exports = app;