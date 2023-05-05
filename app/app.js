const express = require('express');
const morgan = require('morgan');

const adminRouter = require('../routes/Staff/AdminRouter');

const app = express();

// =====Morgan Middleware=====
app.use(morgan('dev'));
// =====Body Parser Middleware=====
app.use(express.json());

app.get('/api/v1', (req, res) => {
    res.send('Welcome to School Mgt App');
})

// =====Routes=====
app.use('/api/v1/admins', adminRouter);

module.exports = app