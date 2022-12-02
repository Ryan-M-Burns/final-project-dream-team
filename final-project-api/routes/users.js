const express = require('express');
const router = express.Router();
const {getUsers} = require('../db/queries/users.js');

router.get('/', (req, res) => {
  getUsers()
    .then(users => {
      res.json(users);
    });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  getUserWithId(id)
    .then((user) => {
      res.cookie("userId", user.id);
    });
});


module.exports = router;