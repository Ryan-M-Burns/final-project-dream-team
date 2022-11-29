const express = require('express');
const router = express.Router();
const {getFarms, getFarmById} = require('../db/queries/farms');

router.get('/', (req, res) => {
  getFarms()
    .then(farms => {
      res.json(farms);
    });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  getFarmById(id)
    .then(farm => {
      res.json(farm);
    });
});

router.get('/new', (req, res) => {
  res.send('new farm form goes here');
});

router.get('/:id/edit', (req, res) => {
  res.send('farm profile EDIT form goes here');
});

router.put('/:id', (req, res) => {
  res.send('farm profile UPDATE goes here');
});

router.delete('/:id', (req, res) => {
  res.send('farm profile DELETE goes here');
});

module.exports = router;