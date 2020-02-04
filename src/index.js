/**
 *  Server for Manancial App
 *  by: Lucas Lima
 **/
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URL_DB = "".concat(process.env.DB_PROTOCOL, process.env.DB_USER,
  process.env.DB_PASS, process.env.DB_URL, process.env.DB_SCHEMA, process.env.DB_PARAMS);
  
app.use(express.json());
mongoose.connect(URL_DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(response => {
  console.log("Mongoose ON with version => ".concat(response.version));
})
.catch(error => {
  console.error(error);
});

// Register All Models
requireDir('./models/');

app.use('/api', require('./routes'));

app.listen(PORT, ()=>{
  console.log("Listen on port => ".concat(PORT));
});
