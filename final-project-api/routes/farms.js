const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('farm profile goes here');
});

router.get('/new', (req, res) => {
  res.send('new farm form goes here');
});

router.get('/{id}/edit', (req, res) => {
  res.send('farm profile EDIT form goes here');
});

router.put('/{id}', (req, res) => {
  res.send('farm profile UPDATE goes here');
});

module.exports = router;
