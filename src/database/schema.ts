export const createTablesSQL = `
  CREATE TABLE IF NOT EXISTS worlds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    world_name TEXT NOT NULL,
    region_bonus REAL DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_name TEXT NOT NULL,
    stat_multiplier REAL DEFAULT 1.0
  );
  CREATE TABLE IF NOT EXISTS races (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    race_name TEXT NOT NULL,
    bonus_strength REAL DEFAULT 0,
    bonus_agility REAL DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    class_name TEXT,
    base_strength REAL DEFAULT 0,
    base_agility REAL DEFAULT 0
  );
`;
