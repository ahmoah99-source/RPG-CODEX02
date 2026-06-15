import * as SQLite from 'expo-sqlite';
import { createTablesSQL } from './schema';
const db = SQLite.openDatabaseSync('rpg_database.db');
export const initDatabase = () => {
  try {
    db.execSync(createTablesSQL);
  } catch (error) { console.error(error); }
};
export default db;
