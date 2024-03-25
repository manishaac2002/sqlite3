import express from 'express';
import sqlite3 from './db.js';
import router from "./router.js";

const application =express()

application.use(express.json());
application.use(router)

const port =4000
// Start the server
  application.listen(port,
    async () => {
    console.log(`🎯 Server is Running on ${port}`)
    await sqlite3.dbConnection()
  }) 

  
