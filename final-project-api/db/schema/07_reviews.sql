DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  farm_id INTEGER REFERENCES farms(id),
  rating INTEGER NOT NULL,
  content TEXT,
  submitted_on DATE
);
