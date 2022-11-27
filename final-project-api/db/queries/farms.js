const db = require('../connection');

const getFarms = () => {
  return db
  .query('SELECT * FROM farms;')
  .then(data => {
    return data.rows;
  });
};




module.exports = { getFarms };
