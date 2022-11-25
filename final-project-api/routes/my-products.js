const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('Farmers products go here');
});

router.get('/product/:id', (req, res) => {
  res.send('The farmers singular product goes here');
});

module.exports = router;