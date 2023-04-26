const express = require('express');
const path = require('path');
const multer = require('multer');
const { private, limited } = require('../middleware/auth');
const {
	createProduct,
	fetchProducts,
	deleteProduct,
	updateProduct,
	fetchSpecialProduct,
} = require('../controller/product');
const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../uploads/product'));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now();
		cb(null, uniqueSuffix + '-' + file.originalname);
	},
});

const upload = multer({ storage: storage });

router
	.route('/')
	.get(fetchProducts)
	.post(private, limited, upload.single('image'), createProduct);
router
	.route('/:id')
	.delete(private, limited, deleteProduct)
	.put(private, limited, upload.single('image'), updateProduct);
router.route('/special').get(fetchSpecialProduct);

module.exports = router;
