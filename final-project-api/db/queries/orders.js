const db = require('../connection');


const getOrdersByUserId = (userId) => {
  return db
  .query(`SELECT * FROM orders WHERE user_id = $1
  `, [userId])
  .then(orders => {
    return orders.rows;
  })
  .catch(e => {
    return e.message
  })
}

const getOrdersByFarmId = (farmId) => {
  return db
  .query(`
  SELECT p.*, COUNT(DISTINCT p.id) FROM products AS p
  INNER JOIN order_items AS oi ON p.id = oi.product_id
  WHERE p.farm_id = $1
  GROUP BY p.id
  `,[farmId])
  .then(orders => {
    return orders.rows;
  })
}

const createNewOrder = (userId) => {
  return db
  .query(`
  INSERT INTO orders (user_id)
  VALUES ($1)
  RETURNING id;
  `,[userId])
  .then(id => {
    return id.rows[0]
  })
}

const addItemsToOrder = (orderId, products) => {
  for (let product of products) {
    return db
    .query(`
    INSERT INTO order_items (product_id, quantity)
    VALUES ($1, $2)
    WHERE id = $3
    `, [product.id, product.quantity, orderId])
    .then(order_items => {
      return order_items.rows;
    })
  }

}

module.exports = { getOrdersByUserId, getOrdersByFarmId, createNewOrder, addItemsToOrder}
