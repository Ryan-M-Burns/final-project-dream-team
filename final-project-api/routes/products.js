const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('products go here');
});

router.get('/:id', (req, res) => {
  res.send('products go here');
});

router.get('/new', (req, res) => {
  res.send('The farmers new product goes here');
});

router.get('/:id/edit', (req, res) => {
  res.send('Product edit goes here');
});

router.put('/:id', (req, res) => {
  res.send('Updated products go here');
});

router.delete('/:id', (req, res) => {
  res.send('deleted products go here');
});



module.exports = router;