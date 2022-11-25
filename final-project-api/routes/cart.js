const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('The cart goes here');
});

module.exports = router;