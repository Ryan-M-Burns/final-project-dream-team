const db = require('../connection');


export const getCategories = () => {
  return db
  .query(`SELECT DISTINCT category FROM products;`)
  .then(categories => {
    console.log('categories', categories.rows)
    return categories.rows;
  })
  .catch(err => {
    return err.mesage;
  });
}
