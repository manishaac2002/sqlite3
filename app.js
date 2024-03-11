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

// Define the SQL statement to create a table
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER
    )
`;

// Execute the SQL statement to create the table
try {
    db.exec(createTableQuery);
    console.log('Table created successfully.');
} catch (error) {
    console.error('Error creating table:', error.message);
} 

// Define the SQL statement to insert data into the table
const insertDataQuery = `
    INSERT INTO USERS (id, name, age)
    VALUES (?, ?, ?)
`;

// Data to be inserted
const data = ['1', 'mala', '23'];

// Execute the SQL statement to insert data into the table
try {
    db.prepare(insertDataQuery).run(data);
    console.log('Data inserted successfully.');
} catch (error) {
    console.error('Error inserting data:', error.message);
} 

// Close the database connection
try {
  db.close();
  console.log('Database connection closed.');
} catch (error) {
  console.error('Error closing the database connection:', error.message);
  // Handle the error accordingly
}
