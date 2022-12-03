const express = require('express');
const { getOrdersByUserId, createNewOrder, addItemsToOrder, getOrdersByFarmId } = require('../db/queries/orders');
const router = express.Router();

router.get('/users/:id', (req, res) => {
  const userId = req.params
  getOrdersByUserId(userId)
  .then(orders => {
    res.json(orders);
  })
  .catch(e => {
    res.send(e);
  })
});

router.get('/farms/:id', (req, res) => {
  const farmId = req.params;
  getOrdersByFarmId(farmId)
  .then(orders => {
    res.json(orders)
  })
  .catch(e => {
    res.send(e);
  })
})

router.put('/', (req, res) => {
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
