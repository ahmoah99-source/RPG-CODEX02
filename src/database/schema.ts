// src/database/schema.ts

export const createTablesSQL = `
  -- 1. Worlds Table
  CREATE TABLE IF NOT EXISTS worlds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    world_name TEXT NOT NULL,
    region_bonus REAL DEFAULT 0
  );

  -- 2. Classes Table
  CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_name TEXT NOT NULL,
    stat_multiplier REAL DEFAULT 1.0
  );

  -- 3. Races Table
  CREATE TABLE IF NOT EXISTS races (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    race_name TEXT NOT NULL,
    bonus_strength REAL DEFAULT 0,
    bonus_agility REAL DEFAULT 0
  );

  -- 4. Levels Table
  CREATE TABLE IF NOT EXISTS levels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    level_number INTEGER NOT NULL,
    level_multiplier REAL DEFAULT 1.0
  );

  -- 5. Characters Table
  CREATE TABLE IF NOT EXISTS characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    base_strength REAL DEFAULT 0,
    base_agility REAL DEFAULT 0,
    base_body REAL DEFAULT 0,
    base_spirit REAL DEFAULT 0,
    world_id INTEGER,
    class_id INTEGER,
    race_id INTEGER,
    level_id INTEGER,
    FOREIGN KEY (world_id) REFERENCES worlds(id),
    FOREIGN KEY (class_id) REFERENCES classes(id),
    FOREIGN KEY (race_id) REFERENCES races(id),
    FOREIGN KEY (level_id) REFERENCES levels(id)
  );
`;

