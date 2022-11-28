DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  box_id INTEGER REFERENCES boxes(id),
  is_active BOOLEAN DEFAULT TRUE,
  completed_on DATE
);
