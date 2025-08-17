-- Postgres migrations for YouTube Companion Dashboard (minimal)

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  google_id TEXT UNIQUE,
  email TEXT,
  name TEXT,
  access_token TEXT,
  refresh_token TEXT,
  token_expiry TIMESTAMP,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS videos (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  video_id TEXT NOT NULL,
  title TEXT,
  description TEXT,
  channel_id TEXT,
  last_fetched_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS comments_log (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  video_id INTEGER REFERENCES videos(id),
  action TEXT,
  comment_id TEXT,
  payload JSONB,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS notes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  video_id INTEGER REFERENCES videos(id),
  title TEXT,
  body TEXT,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  type TEXT,
  details JSONB,
  created_at TIMESTAMP DEFAULT now()
);
