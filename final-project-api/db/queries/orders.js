const db = require('../connection');


const getOrdersByUserId = (userId) => {
  return db
  .query(`SELECT * FROM orders
  WHERE user_id = $1`,[userId])
  .then(orders => {
    return orders.rows;
  })
}

const getOrdersByFarmId = (farmId) => {
  return db
  .query(`
  SELECT p.*, COUNT(DISTINCT p.id) FROM products AS p
  INNER JOIN box_items AS bi ON p.id = bi.product_id
  INNER JOIN orders AS o ON o.box_id = box_items.box_id
  WHERE p.farm_id = $1
  GROUP BY p.id
  `,[farmId])
  .then()
}

const createNewOrder = (userId) => {
  return db
  .query(`
  
  `)
}
