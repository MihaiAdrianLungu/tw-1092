const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { handleErrorResponse } = require('../utils');

const User = require('../database/models/User');

const router = express.Router();

router.post('/login', async function(req, res) {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if (!user) {
            return res.status(404).json({success: false, message: 'User not found', data: {}});
        }

        const isValidPassword = bcrypt.compareSync(password, user.dataValues.password);

        if(!isValidPassword) {
            return res.status(400).json({success: false, message: 'Invalid password!', data: {}});
        }

        const token = jwt.sign({id: user.dataValues.id}, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        })

        res.status(200).json({success: true, message: "User logged in", data: token})
    } catch (error) {
        handleErrorResponse(res, error, "Error logging user");
    }    
})

router.post('/check', function(req, res) {
    const token = req.body.token;

    if(!token) {
        return res.status(404).json({success: false, message: 'Token not found', data: {}});
    }

    const isValidPassword = jwt.verify(token, process.env.TOKEN_SECRET);

    if(!isValidPassword) {
        return res.status(400).json({success: false, message: 'Invalid token', data: {}});
    }

    res.status(200).json({success: true, message: "Valid token", data: {}})
})

module.exports = router;