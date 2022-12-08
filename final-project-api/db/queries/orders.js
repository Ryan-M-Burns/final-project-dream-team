const db = require('../connection');

const getAllOrders = () => {
  return db
    .query(`
  SELECT * FROM orders`)
    .then(orders => {
      return orders.rows;
    })
    .catch(e => {
      return e.message;
    });
};

const getOrderItemsByOrderId = (orderId) => {
  return db
    .query(`
  SELECT * FROM order_items WHERE order_id = $1`, [orderId])
    .then(orders => {
      return orders.rows;
    })
    .catch(e => {
      return e.message;
    });
};


const getOrdersByUserId = (userId) => {
  return db
    .query(`
  SELECT o.*, p.title, p.price FROM orders AS o
  INNER JOIN order_items AS oi ON o.id = oi.order_id
  INNER JOIN products AS p ON oi.product_id = p.id
  WHERE user_id = $1
  GROUP BY o.id, p.title, p.price
  `, [userId])
    .then(orders => {
      return orders.rows;
    })
    .catch(e => {
      return e.message;
    });
};

const getProductsForOrder = (orderId) => {
  return db
    .query(`
  SELECT
  `, [orderId])
    .then(orderProds => {
      return orderProds.rows;
    });
};

const getOrdersById = (userId) => {
  return db
    .query(`
  SELECT id FROM orders
  WHERE user_id = $1
  `, [userId])
    .then(orders => {
      return orders.rows;
    });
};

const getOrdersByFarmId = (farmId) => {
  return db
    .query(`
  SELECT p.*, COUNT(p.id) FROM products AS p
  INNER JOIN order_items AS oi ON p.id = oi.product_id
  WHERE p.farm_id = $1
  GROUP BY p.id
  `, [farmId])
    .then(orders => {
      return orders.rows;
    });
};

const createNewOrder = (userId) => {
  return db
    .query(`
  INSERT INTO orders (user_id)
  VALUES ($1)
  RETURNING id;
  `, [userId])
    .then(id => {
      return id.rows[0];
    });
};

const addItemsToOrder = (orderId, product) => {
  console.log('product', product);
  return db
    .query(`
    INSERT INTO order_items (order_id, product_id, quantity)
    VALUES ($3, $1, $2)
    `, [product.id, product.quantity, orderId])
    .then(order_items => {
      return order_items.rows;
    });
};


const removeQuantity = (product) => {
  return db
  .query(`
  UPDATE products
  SET quantity = quantity - $1
  WHERE id = $2
  `, [product.cartQty, product.id])
}


module.exports = {getOrdersByUserId, getOrdersByFarmId, createNewOrder, addItemsToOrder, getOrdersById, getProductsForOrder, getAllOrders, getOrderItemsByOrderId};
