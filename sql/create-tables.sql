DROP TABLE IF EXISTS ratings;

CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  movie_id INTEGER NOT NULL,
  rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 10),
  user_id INTEGER,
  date_created TIMESTAMPTZ DEFAULT NOW(),
  date_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Keep an eye out for date_created or date_updated changing after first created.