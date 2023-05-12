const express = require('express');
const adminRouter = express.Router();

const {
	adminRegister,
	adminLogin,
	getSingleAdmin,
	getAdminProfile,
	getAllAdminProfile,
    updateAdmin
} = require('../../controllers/Staff/AdminCtrl');
const isLoggedIn = require('../../middlewares/isLoggedIn');
const isAdmin = require('../../middlewares/isAdmin');

adminRouter.post('/register', adminRegister);
adminRouter.post('/login', adminLogin);
adminRouter.get('/', isLoggedIn, getAllAdminProfile);
adminRouter.get('/profile', isLoggedIn, isAdmin, getAdminProfile);
adminRouter.get('/:id', isLoggedIn, isAdmin, getSingleAdmin);
adminRouter.put('/', isLoggedIn, isAdmin, updateAdmin);

module.exports = adminRouter;
