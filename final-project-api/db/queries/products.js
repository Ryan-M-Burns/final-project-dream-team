const db = require('../connection');

const getProducts = () => {
  return db
  .query('SELECT * FROM products;')
  .then(products => {
    return products.rows;
  });
};

const getProductsByFarmId = (farmId) => {
  return db
  .query(`SELECT * FROM products
  WHERE farm_id = $1;`, [farmId])
  .then(products => {
    return products.rows;
  });
};

const addNewProduct = () => {
  return db
  .query(`
  INSERT INTO comments (user_id, listing_id, content)
  VALUES ($1, $2, $3) RETURNING *`,
  [userID, listingID, comment])

  .then(data => {
    return data.rows;
  })

  .catch(err => {
    return err.message;
  });
};

