import express from 'express';
import sqlite3 from './db.js';

const application =express()

application.use(express.json());

const port =4000
// Start the server
  application.listen(port,
    async () => {
    console.log(`🎯 Server is Running on ${port}`)
    await sqlite3.dbConnection()
  }) 

  
