const express = require('express');
const router = express.Router();
const { getProducts, getProductById, addNewProduct, deleteProduct, updateProduct } = require('../db/queries/products.js');

router.get('/', (req, res) => {
  getProducts()
  .then(products => {
    res.json(products)
  })
});

router.get('/:id', (req, res) => {
const {id} = req.params;
  getProductById(id)
  .then(product => {
    res.json(product)
  })
})

router.get('/new', (req, res) => {
  addNewProduct()
  .then(product => {
    res.json(product)
  })
});


router.put('/:id', (req, res) => {
  updateProduct()
  .then(newProd => {
    res.json(newProd)
  })
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  deactivateProduct(id)
    then(data => {
      res.json(data)
    })
});



module.exports = router;
