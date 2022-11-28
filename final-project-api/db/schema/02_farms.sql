DROP TABLE IF EXISTS farms CASCADE;
CREATE TABLE farms (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  logo_url TEXT,
  email VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  active_status BOOLEAN DEFAULT FALSE,
  street_address TEXT NOT NULL,
  city VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  is_family_owned BOOLEAN DEFAULT FALSE,
  is_organic BOOLEAN DEFAULT FALSE,
  registered_at TIMESTAMP
);
