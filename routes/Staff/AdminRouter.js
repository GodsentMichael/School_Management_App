const express = require('express');
const adminRouter = express.Router();

const {adminRegister,adminLogin,getSingleAdmin,getAdminProfile, getAllAdminProfile } = require('../../controllers/Staff/AdminCtrl');
const isLoggedIn = require('../../middlewares/isLoggedIn');


adminRouter.post('/register', adminRegister );
adminRouter.post('/login', adminLogin );
adminRouter.get('/', isLoggedIn,getAllAdminProfile);
adminRouter.get('/profile', isLoggedIn,getAdminProfile );
adminRouter.get('/:id', isLoggedIn,getSingleAdmin );


module.exports = adminRouter;
