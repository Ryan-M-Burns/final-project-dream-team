const db = require('../connection');


const getCategories = () => {
  return db
  .query(`SELECT DISTINCT category FROM products ORDER BY category;`)
  .then(categories => {
    console.log('categories', categories.rows)
    return categories.rows;
  })
  .catch(err => {
    return err.mesage;
  });
}

module.exports = {getCategories}
