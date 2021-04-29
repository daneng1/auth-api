'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const server = require('./src/server.js');

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true,
  useCreateIndex: true,
 })
  .then(() => {
    server.start(port);
  })
  .catch(e => console.error(e));
