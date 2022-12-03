const express = require('express');
const { getOrdersByUserId } = require('../db/queries/orders');
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



module.exports = router;
