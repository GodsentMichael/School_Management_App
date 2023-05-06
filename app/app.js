// Importing modules
const express = require('express');
const morgan = require('morgan');

//Importing files
const adminRouter = require('../routes/Staff/AdminRouter');
const {globalErrHandler, notFoundErr} = require('../middlewares/globalErrHandler');

const app = express();

// =====Morgan Middleware=====
app.use(morgan('dev'));

// =====Body Parser Middleware=====
app.use(express.json());

//Creating my own morgan middleware
// app.use((req, res, next) => {
// 	console.log(`${req.method} ${req.originalUrl}`);
//     next();
// });

app.get('/api/v1', (req, res) => {
    res.send('Welcome to School Mgt App');
});

// =====Routes=====
app.use('/api/v1/admins', adminRouter);

// =====Error Handler=====
app.use(notFoundErr)
app.use(globalErrHandler);


module.exports = app;
