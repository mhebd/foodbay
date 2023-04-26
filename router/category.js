const express = require('express');
const { private, limited } = require('../middleware/auth');
const {
	createCategory,
	fetchCategories,
	FetchCategory,
} = require('../controller/category');
const router = express.Router();

router.route('/').post(private, limited, createCategory).get(fetchCategories);
router.route('/:id').get(FetchCategory);

module.exports = router;
