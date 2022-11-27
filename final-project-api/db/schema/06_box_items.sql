DROP TABLE IF EXISTS box_items CASCADE;
CREATE TABLE box_itmes (
  id SERIAL PRIMARY KEY NOT NULL,
  box_id INTEGER REFERENCES boxes(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
);
