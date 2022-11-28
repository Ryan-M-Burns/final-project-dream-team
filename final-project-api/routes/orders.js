const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Orders go here after completion');
});

module.exports = router;