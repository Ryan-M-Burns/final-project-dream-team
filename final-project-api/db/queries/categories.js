const db = require('../connection');


export const getCategories = () => {
  return db
  .query(`SELECT DISTINCT category FROM products;`)
  .then(categories => {
    return categories.rows;
  })
  .catch(err => {
    return err.mesage;
  });
}
