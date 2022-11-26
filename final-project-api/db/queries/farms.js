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
      return farm.rows;
    })

    .catch(err => {
      return err.mesage;
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

const createFarm = (farmDetails) => {
  // Assign content of listingAttributes object to variables
  const {
    name,
    logo_url,
    email,
    description,
    street_address,
    city,
    postal_code,
    phone,
    is_family_owned,
    is_organic
  } = farmDetails;

  // Place variables into array in correct order
  const queryParams = [
    name,
    logo_url,
    email,
    description,
    street_address,
    city,
    postal_code,
    phone,
    is_family_owned,
    is_organic
  ];

  // Pass array to insertion query
  return db
    .query(`
  INSERT INTO farms ( name, logo_url, email, description, street_address, city, postal_code, phone, is_family_owned, is_organic)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  RETURNING *;`,
      queryParams);
};

const activateFarm = (farmId) => {
  return db
    .query(`
  UPDATE listings
  SET active_status = true
  WHERE id = $1 RETURNING *;`,
      [farmId]);
};

const deactivateFarm = (farmId) => {
  return db
    .query(`
  UPDATE listings
  SET active_status = false
  WHERE id = $1 RETURNING *;`,
      [farmId]);
};


module.exports = {getFarms, getFarmById, createFarm, activateFarm, deactivateFarm, getProductsByFarmId};
