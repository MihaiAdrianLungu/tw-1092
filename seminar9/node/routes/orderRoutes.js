const express = require('express');
const { handleErrorResponse } = require('../utils');

const User = require('../database/models/User');
const Order = require('../database/models/Order');

const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const orders = await Order.findAll();

        res.status(200).json({success: true, message: "Orders found", data: orders})
    } catch (error) {
        handleErrorResponse(res, error, 'Error retrieving orders')
    }
})

router.get('/user', async function(req, res) {
    try {
        const userId = req.userId;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({success: false, message: 'User not found', data: {}});
        }

        const orders = await Order.findAll({
            where: {
                userId: userId
            }
        })

        return res.status(200).json({success: true, message: "Orders list for user", data: orders})
    } catch (error) {
        handleErrorResponse(res, error, 'Error retrieving orders for user')
    }
})

router.post('/', async function(req, res) {
    try {
        const {status, value} = req.body;
        const userId = req.userId;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({success: false, message: 'User not found', data: {}});
        }

        const newOrder = await Order.create({
            status,
            value,
            userId: userId
        })

        return res.status(200).json({success: true, message: "Created new order", data: newOrder})
    } catch (error) {
        handleErrorResponse(res, error, 'Error creating order')
    }
})

router.put('/:id', async function(req, res) {
    try {
        const userId = req.userId;
        const orderId = req.params.id;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({success: false, message: 'User not found', data: {}});
        }

        const order = await Order.findByPk(orderId);

        if (!order) {
            return res.status(404).json({success: false, message: 'Order not found', data: {}});
        }

        if (userId !== order.dataValues.userId) {
            return res.status(400).json({success: false, message: 'Not the same owner', data: {}});
        }

        const updatedOrder = await order.update(req.body);

        return res.status(200).json({success: true, message: 'Order updated', data: updatedOrder});
    } catch (error) {
        handleErrorResponse(res, error, 'Error updating order')
    }
})

router.delete('/:id', async function(req, res) {
    try {
        const orderId = req.params.id;

        const order = await Order.findByPk(orderId);

        if (!order) {
            return res.status(404).json({success: false, message: 'Order not found', data: {}});
        }

        await order.destroy();

        return res.status(200).json({success: true, message: 'Order deleted', data: {}});
    } catch (error) {
        handleErrorResponse(res, error, 'Error deleting order')
    }
})

module.exports = router;