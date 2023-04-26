const errMsg = require('../utility/errMsg');
const asyncHdl = require('../utility/asyncHdl');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Result = require('../utility/result');

/**
  => @POST
  => /api/v1/review
  => Limited
*/
exports.createReview = asyncHdl(async (req, res, next) => {
	const { name, opinion } = req.body;

	if (!name || !opinion || !req.file) {
		return next(
			new errMsg('Reviewer name, opinion and image are mandatory.', 400)
		);
	}
	const filePath = '/uploads/review/' + req.file.filename;

	const review = await prisma.review.create({
		data: {
			name,
			opinion,
			image: filePath,
		},
	});

	res
		.status(200)
		.json(new Result(true, 'Review created successful.', { review }));
});

/**
  => @GET
  => /api/v1/review
  => Public
*/
exports.fetchReviews = asyncHdl(async (req, res, next) => {
	const reviews = await prisma.review.findMany({});

	res.status(200).json(new Result(true, '', { reviews }));
});

/**
  => @DELETE
  => /api/v1/review/:id
  => Limited
*/
exports.deleteReview = asyncHdl(async (req, res, next) => {
	const review = await prisma.review.delete({
		where: { id: req.params.id * 1 },
	});

	res
		.status(200)
		.json(new Result(true, 'Review deleted successful.', { review }));
});
