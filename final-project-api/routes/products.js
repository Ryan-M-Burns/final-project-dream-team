const express = require('express');
const router = express.Router();
const { getProducts, getProductById, addNewProduct, deleteProduct, updateProduct } = require('../db/queries/products.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

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

router.post('/', jsonParser, (req, res) => {
  console.log(req.body)
  addNewProduct(req.body)
  .then(product => {
    res.json(product)
  })
  .catch(err => {
    return err.message;
  });
});


router.put('/:id', jsonParser, (req, res) => {
  updateProduct(req.body)
  .then(newProd => {
    res.json(newProd)
  })
});

// router.put('/:id', (req, res) => {
//   const {id} = req.params;
//   deactivateProduct(id)
//     then(data => {
//       res.json(data)
//     })
// });



module.exports = router;
