const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const { connectDb } = require("./db")


const app = express()

app.use(express.json())




connectDb()
  
  .then(() => {
    app.listen(8080, () => console.log("Server is listening on http://localhost:8080"))
  })
  .catch((err) => {
    console.error("Failed to connect to database", err) 
    process.exit(1)
  })
