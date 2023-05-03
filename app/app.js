const express = require('express');
const morgan = require('morgan');

const app = express();

// =====Morgan Middleware=====
app.use(morgan('dev'));

module.exports = app