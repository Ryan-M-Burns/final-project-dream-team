const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return err.message;
    });
};

const getUserWithId = (id) => {
  return db
    .query('SELECT * FROM users WHERE id = $1', [id])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return err.message;
    });
};

module.exports = {getUsers, getUserWithId};
