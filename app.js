import Database from 'better-sqlite3'

// Path to your SQLite database file
const dbPath = './store.db';

// Attempt to connect to the database
let db
try {
  db = new Database(dbPath);
  console.log('Connected to the database successfully.');
} catch (error) {
  console.error('Error connecting to the database:', error.message);
  // Handle the error accordingly, e.g., exiting the application
  process.exit(1);
}

// Close the database connection
try {
  db.close();
  console.log('Database connection closed.');
} catch (error) {
  console.error('Error closing the database connection:', error.message);
}
