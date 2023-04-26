const express = require('express');
const { private, limited } = require('../middleware/auth');
const {
	allUsers,
	registerUser,
	getProfile,
	updateAddress,
	loginUser,
	updateProfile,
} = require('../controller/user');
const router = express.Router();

router.route('/').get(private, limited, allUsers);
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').get(private, getProfile);
router.route('/update-address').put(private, updateAddress);
router.route('/update-profile').put(private, updateProfile);

module.exports = router;
