import sqlite3 from "./db.js";

let db;

const insertQuery = async (data) => { // Accept data as a parameter
  // ---Define the SQL statement to insert data into the table
  const insertDataQuery = `
    INSERT INTO USERS (id, name, age)
    VALUES (?, ?, ?)
    `;

  // ---Execute the SQL statement to insert data into the table and handle errors
  try {
    // Establish database connection
    const db = await sqlite3.dbConnection();
    // Ensure db is defined
    if (!db) {
      throw new Error('Database connection is not established.');
    }

    // Prepare and run the SQL statement
    const stmt = db.prepare(insertDataQuery);
    const result = stmt.run(data.id, data.name, data.age); // Bind data to the statement
    console.log('Data inserted successfully.');
    return result; // Return the result of the insert operation

  } catch (error) {
    console.error('Error inserting data:', error.message);
  }
}

export default { insertQuery }