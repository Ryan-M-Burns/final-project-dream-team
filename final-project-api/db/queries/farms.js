const db = require('../connection');

const getFarms = () => {
  return db
  .query('SELECT * FROM farms;')
  .then(data => {
    return data.rows;
  });
};

const getFarmById = (farmId) => {
  return db
  .query(`
  SELECT * FROM farms
  WHERE id = $1`,
  [farmId])

  .then(farm => {
    return farm.rows
  })

  .catch(err => {
    return err.mesage
  });
};


module.exports = { getFarms, getFarmById };
