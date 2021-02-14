// server.js
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const internURL = require('./src/router/internRouter')

const app = express()
app.use(express.json())
app.use('/intern', internURL)
//mongoDB connection string

 const databaseURL = process.env.MONGODB_URI
 // mongoose connection
 mongoose.connect(databaseURL, {
   useNewUrlParser: true ,
   useUnifiedTopology: true})
  .then(() => {
      console.log("<<:::>> Connected to Database")
  })
  .catch(err => {
      console.log("There was an error while connecting to the database. " + err)
  })

const PORT = process.env.PORT

app.listen(PORT, ()=>{
  console.log("Server listen on port " + PORT)
})
