const express = require('express');
const multer = require('multer');
const path = require('path');
const { private, limited } = require('../middleware/auth');
const {
	createSlide,
	fetchSlides,
	deleteSlide,
} = require('../controller/slider');
const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../uploads/slider'));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now();
		cb(null, uniqueSuffix + '-' + file.originalname);
	},
});

const upload = multer({ storage: storage });

router
	.route('/')
	.post(private, limited, upload.single('image'), createSlide)
	.get(fetchSlides);
router.route('/:id').delete(private, limited, deleteSlide);

module.exports = router;
