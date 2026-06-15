// src/database/db.ts
import * as SQLite from 'expo-sqlite';
import { createTablesSQL } from './schema';

// Open the application database
const db = SQLite.openDatabaseSync('rpg_database.db');

export const initDatabase = () => {
  try {
    // Execute SQL commands from schema.ts
    db.execSync(createTablesSQL);
    console.log("Database tables initialized successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

export default db;
