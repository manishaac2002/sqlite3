import Database from 'better-sqlite3'

const dbConnection = async () => {
  // Path to your SQLite database file
  const dbPath = './store.db';

  //   // Attempt to connect to the database
  let db
  try {
    db = new Database(dbPath);
    console.log('🟢 Connected to the database successfully.');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    // Handle the error accordingly, e.g., exiting the application
    process.exit(1);
  }
}
// Close the database connection
try {
  db.close();
  console.log('Database connection closed.');
} catch (error) {
  console.error('Error closing the database connection:', error.message);
}

const insertQuery = async () => {
  // ---Define the SQL statement to insert data into the table
  const insertDataQuery = `
    INSERT INTO USERS (id, name, age)
    VALUES (?, ?, ?)
    `;

  // ---Execute the SQL statement to insert data into the table and handle errors
  try {
    // Establish database connection
    const db = await dbConnection();
    console.log(insertDataQuery);
    // Ensure db is defined
    if (!db) {
      throw new Error('Database connection is not established.');
    }

    // Prepare and run the SQL statement
    const stmt = db.prepare(insertDataQuery);
    console.log(insertDataQuery);
    const result = stmt.run(data);
    console.log('Data inserted successfully.');

  } catch (error) {
    console.error('Error inserting data:', error.message);
  }
}


export default { dbConnection, insertQuery }