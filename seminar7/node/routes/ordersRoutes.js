const express = require('express');
const orders = require('../utils/constants');

const router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json(orders);
})

router.get('/:id', function (req, res) {
    const id = parseInt(req.params.id);

    const foundOrder = orders.find(el => el.id === id);

    if (foundOrder) {
        res.status(200).json(foundOrder);
    } else {
        res.status(404).json({ message: 'Order not found' })
    }
})

router.get('/:id', function (req, res) {
    const id = req.params.id;
    const foundOrder = orders.find(el => el.id == id);
 
    if (foundOrder) {
        res.json(foundOrder);
    } else {
        res.statusCode = 404;
        res.json({})
    }
})

router.post('/', function (req, res) {
    if (req.body) {
        const newOrder = {
            id: orders.length + 1,
            ...req.body
        }
        orders.push(newOrder);

        res.status(201).json(newOrder);
    } else {
        res.status(404).json({ message: 'Req.body is undefined' })
    }
})

router.put('/:id', function (req, res) {
    const id = parseInt(req.params.id);

    const foundOrderIndex = orders.findIndex(el => el.id === id);

    if (foundOrderIndex !== -1) {
        orders[foundOrderIndex] = {
            ...orders[foundOrderIndex],
            ...req.body
        }

        res.status(200).json(orders[foundOrderIndex]);
    } else {
        res.status(404).json({ message: 'Order not found' })
    }
})

router.delete('/:id', function (req, res) {
    const id = parseInt(req.params.id);

    const foundOrderIndex = orders.findIndex(el => el.id === id);

    if (foundOrderIndex !== -1) {
        orders.splice(foundOrderIndex, 1);

        res.status(200).json({ message: `Order with id ${id} was deleted.` })
        // res.status(204).end();
    } else {
        res.status(404).json({ message: 'Order not found' })
    }
})

module.exports = router;