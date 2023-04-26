const express = require('express');
const { private, limited } = require('../middleware/auth');
const {
	CreateFCard,
	FetchFCards,
	updateFCard,
	deleteFCard,
} = require('../controller/featuredCard');
const router = express.Router();

router.route('/').post(private, limited, CreateFCard).get(FetchFCards);
router
	.route('/:id')
	.put(private, limited, updateFCard)
	.delete(private, limited, deleteFCard);

module.exports = router;
