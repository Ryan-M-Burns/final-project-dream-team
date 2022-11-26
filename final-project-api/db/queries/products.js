const db = require('../connection');

const getProducts = () => {
  return db
  .query('SELECT * FROM products;')
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
  INSERT INTO products (farm_id, title, category, size, image_url, price, quantity)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;`,
  queryParams)

  .then(data => {
    return data.rows[0];
  })
  .catch(err => {
    return err.message;
  });
};

const getProductById = (id) => {
return db
  .query(`
  SELECT * FROM products
  WHERE id = $1;`, [id])
  .then(data => {
    return data.rows
  })
  .catch(err => {
    return err.message;
  });
}

const deactivateProduct =(id) => {
return db
  .query(`
  UPDATE products SET active_status = false WHERE id = $1`, [id])
  .then(data => {
    return data.rows[0]
  })
  .catch(err => {
    return err.message;
  });
}




module.exports = {
  getProducts,
  addNewProduct,
  getProductById,
  deactivateProduct}
