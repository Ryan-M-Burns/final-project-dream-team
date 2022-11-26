DROP TABLE IF EXISTS box_items CASCADE;
CREATE TABLE box_itmes (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER REFERENCES products(id),
  box_id INTEGER REFERENCES boxes(id),
  quantity INTEGER NOT NULL,
);
