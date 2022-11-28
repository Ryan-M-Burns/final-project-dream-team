DROP TABLE IF EXISTS products CASCADE;
DROP TYPE IF EXISTS categories CASCADE;
CREATE TYPE categories AS ENUM ('Greens', 'Root Vegetables', 'Fruits', 'Herbs', 'Fungi', 'Peppers', 'Squash', 'Tomatoes');
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  farm_id INTEGER REFERENCES farms(id),
  title VARCHAR(255) NOT NULL,
  category categories,
  size VARCHAR(255) NOT NULL,
  image_url TEXT,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  active_status VARCHAR(10) DEFAULT 'active',
  seasonal BOOLEAN DEFAULT false
);
