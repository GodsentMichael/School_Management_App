const express = require('express');
const adminRouter = express.Router();

const {adminRegister,adminLogin,getSingleAdmin } = require('../../controllers/Staff/AdminCtrl');
const isLoggedIn = require('../../middlewares/isLoggedIn');


adminRouter.post('/register', adminRegister );
adminRouter.post('/login', adminLogin );
adminRouter.get('/:id', isLoggedIn,getSingleAdmin );


module.exports = adminRouter;
