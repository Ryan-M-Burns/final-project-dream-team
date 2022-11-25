const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.send('All products go here');
});

router.get('/box', (req, res) => {
  res.send('Boxes + descriptions go here');
});

router.get('/farms', (req, res) => {
  res.send('Farms go here');
});

router.get('/farms/{id}', (req, res) => {
  res.send('A singular farm goes here');
});

module.exports = router;