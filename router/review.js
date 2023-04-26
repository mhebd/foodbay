const express = require('express');
const multer = require('multer');
const path = require('path');
const { private, limited } = require('../middleware/auth');
const {} = require('../controller/slider');
const {
	createReview,
	fetchReviews,
	deleteReview,
} = require('../controller/review');
const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../uploads/review'));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now();
		cb(null, uniqueSuffix + '-' + file.originalname);
	},
});

const upload = multer({ storage: storage });

router
	.route('/')
	.post(private, limited, upload.single('image'), createReview)
	.get(fetchReviews);
router.route('/:id').delete(private, limited, deleteReview);

module.exports = router;
