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

const addNewProduct = (productDetails) => {
  // Assign content of listingAttributes object to variables
  const {
    farm_id,
    title,
    category,
    size,
    image_url,
    price,
    quantity,
  } = productDetails;

  // Place variables into array in correct order
  const queryParams = [
    farm_id,
    title,
    category,
    size,
    image_url,
    price,
    quantity,
  ];

  // Pass array to insertion query
  return db
  .query(`
  INSERT INTO listings (owner_id, title, description, price, category, photo_url)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;`,
  queryParams)

  .then(data => {
    return data.rows[0];
  })
  .catch(err => {
    return err.message;
  });
};

module.exports = (getProducts, getProductsByFarmId, addNewProduct)
