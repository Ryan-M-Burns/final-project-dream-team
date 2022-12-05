const express = require('express');
const { getOrdersByUserId, createNewOrder, addItemsToOrder, getOrdersByFarmId, getOrdersById } = require('../db/queries/orders');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

router.get('/users/:id', (req, res) => {
  const {id} = req.params
  getOrdersByUserId(id)
  .then(orders => {
    res.json(orders);
  })
  .catch(e => {
    res.send(e);
  })
});

router.get('/user/:id', (req, res) => {
  const {id} = req.params
  getOrdersById(id)
  .then(orders => {
    res.json(orders);
  })
  .catch(e => {
    res.send(e);
  })
})

router.get('/farms/:id', (req, res) => {
  const {id} = req.params;
  getOrdersByFarmId(id)
  .then(orders => {
    res.json(orders)
  })
  .catch(e => {
    res.send(e);
  })
})

router.put('/', jsonParser, (req, res) => {
  const {
    userId,
    products
  } = req.body

  createNewOrder(userId)
  .then(orderId => {
    addItemsToOrder(orderId, products)
    .then(order_items => {
      res.json(order_items)
    })
    .catch(e => {
      res.send(e);
    })
  })
})


module.exports = router;
