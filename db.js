import Database from 'better-sqlite3';

// Define a global variable to hold the database connection
let db;

const dbConnection = async () => {
  // Path to your SQLite database file
  const dbPath = './store.db';

  // Attempt to connect to the database
  try {
    db = new Database(dbPath);
    console.log('🟢 Connected to the database successfully.');
    return db; // Return the database connection object
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    // Handle the error accordingly, e.g., exiting the application
    process.exit(1);
  }
}


// Close the database connection
const closeConnection = async () => {
  try {
    if (db) {
      await db.close();
      console.log('Database connection closed.');
    } else {
      console.log('No active database connection to close.');
    }
  } catch (error) {
    console.error('Error closing the database connection:', error.message);
  }
}


export default { dbConnection, closeConnection, db };
