const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usersRoutes = require('../routes/usersRoutes');
const authRoutes = require('../routes/authRoutes');
const orderRoutes = require('../routes/orderRoutes');
const {verifyToken} = require('../utils');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);
app.use('/orders', verifyToken, orderRoutes);

module.exports = app;