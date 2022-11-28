const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('The cart goes here');
});

router.get('/:id/edit', (req, res) => {
  res.send('The cart edits go here');
});

router.put('/:id', (req, res) => {
  res.send('The cart updates go here');
});

router.delete('/:id', (req, res) => {
  res.send('The cart delete goes here');
});



module.exports = router;