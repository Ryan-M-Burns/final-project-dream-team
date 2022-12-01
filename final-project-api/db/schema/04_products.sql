DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  farm_id INTEGER REFERENCES farms(id),
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255),
  size VARCHAR(255) NOT NULL,
  image_url TEXT,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  active_status BOOLEAN DEFAULT true,
  seasonal BOOLEAN DEFAULT false
);
