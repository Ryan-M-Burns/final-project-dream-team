const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('The boxes go here');
});

router.get('/:id', (req, res) => {
  res.send('The box goes here');
});

module.exports = router;