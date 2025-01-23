import Database from 'better-sqlite3';

const db = new Database('./suppliers.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXISTS suppliers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firmName TEXT UNIQUE,
        address TEXT,
        country TEXT,
        fromDate TEXT,
        toDate TEXT,
        grounds TEXT
    )
`);

export default db;