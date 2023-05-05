const express = require('express');
const adminRouter = express.Router();

const {adminRegister,adminLogin } = require('../../controllers/Staff/AdminCtrl');

adminRouter.post('/register', adminRegister );

adminRouter.post('/login', adminLogin );


module.exports = adminRouter;
