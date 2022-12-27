const express = require('express');
const {getOrdersByUserId, createNewOrder, addItemsToOrder, getOrdersByFarmId, getOrdersById, getAllOrders, getOrderItemsByOrderId, removeQuantity} = require('../db/queries/orders');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

router.get('/orderitems/:id', (req, res) => {
  const {id} = req.params;
  getOrderItemsByOrderId(id)
    .then(orders => {
      res.json(orders);
    })
    .catch(e => {
      res.send(e);
    });
});


router.get('/users/:id', (req, res) => {
  const {id} = req.params;
  getOrdersByUserId(id)
    .then(orders => {
      res.json(orders);
    })
    .catch(e => {
      res.send(e);
    });
});

router.get('/user/:id', (req, res) => {
  const {id} = req.params;
  getOrdersById(id)
    .then(orders => {
      res.json(orders);
    })
    .catch(e => {
      res.send(e);
    });
});

router.get('/farms/:id', (req, res) => {
  const {id} = req.params;
  getOrdersByFarmId(id)
    .then(orders => {
      res.json(orders);
    })
    .catch(e => {
      res.send(e);
    });
});

router.get('/', (req, res) => {
  getAllOrders()
    .then(orders => {
      res.json(orders);
    })
    .catch(e => {
      res.send(e);
    });
});

router.post('/', jsonParser, function(req, res) {

  const {
    userId,
    products
  } = req.body;

  createNewOrder(userId)
    .then(orderId => {
      for (const product of products) {
        addItemsToOrder(orderId.id, product);
        removeQuantity(product);

      }
    });
});


module.exports = router;
