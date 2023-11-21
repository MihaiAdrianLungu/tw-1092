const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { handleErrorResponse } = require('../utils');

const User = require('../database/models/User');

router.get('/', async function (req, res) {
    try {
        const users = await User.findAll();

        users.forEach(user => {
            delete user.dataValues.password;
        })

        return res.status(200).json(users);
    } catch (error) {
        handleErrorResponse(res, error, "Error retrieving users");
    }
})

router.get('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found", data: {} })
        }

        delete user.dataValues.password;

        return res.status(200).json({ success: true, message: "User was found", data: user });

    } catch (error) {
        handleErrorResponse(res, error, "Error retrieving user")
    }
})

router.post('/', async function (req, res) {
    try {
        const { username, email, role, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            username,
            password: hash,
            role,
            email
        })

        delete newUser.dataValues.password;

        res.status(201).json(newUser);
    } catch (error) {
        handleErrorResponse(res, error, "Error creating user")
    }
})

router.put('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found", data: {} })
        }

        const updatedUser = await user.update(req.body);

        delete updatedUser.dataValues.password;

        return res.status(200).json({ success: true, message: "User was updated", data: updatedUser });
    } catch (error) {
        handleErrorResponse(res, error, "Error updating user")
    }
})

router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found", data: {} })
        }

        await user.destroy();

        return res.status(200).json({ success: true, message: "User was deleted", data: {} })
    } catch (error) {
        handleErrorResponse(res, error, "Error deleting user")
    }
})

module.exports = router;