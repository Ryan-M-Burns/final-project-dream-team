const express = require('express');
const { getOrdersByUserId, createNewOrder, addItemsToOrder } = require('../db/queries/orders');
const router = express.Router();

router.get('/', (req, res) => {
  getOrdersByUserId(userId)
  .then(orders => {
    res.json(orders);
  })
  .catch(e => {
    res.send(e);
  })
});

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
