const express = require('express');
const { getCategories } = require('../db/queries/categories');

const router = express.Router();


router.get('/', (req, res) => {
  getCategories()
  .then(categories => {
    res.json(categories)
  })
});

module.exports = router;
