const errMsg = require('../utility/errMsg');
const asyncHdl = require('../utility/asyncHdl');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Result = require('../utility/result');

/**
  => @POST
  => /api/v1/featured-card
  => Limited
*/
exports.CreateFCard = asyncHdl(async (req, res, next) => {
	const { title, caption, icon } = req.body;

	if (!title || !caption || !icon) {
		return next(new errMsg('All fields are mandatory.', 400));
	}

	const featuredCard = await prisma.featuredCard.create({
		data: {
			title,
			caption,
			icon,
		},
	});

	res
		.status(200)
		.json(
			new Result(true, 'Featured card created successful.', { featuredCard })
		);
});

/**
	=> @GET
	=> /api/v1/featured-card
	=> Public
*/
exports.FetchFCards = asyncHdl(async (req, res, next) => {
	const featuredCards = await prisma.featuredCard.findMany({});

	res.status(200).json(new Result(true, '', { featuredCards }));
});

/**
	=> @PUt
	=> /api/v1/featured-card/:id
	=> Limited
*/
exports.updateFCard = asyncHdl(async (req, res, next) => {
	const { title, caption, icon } = req.body;
	let data = {};

	if (title) data.title = title;
	if (caption) data.caption = caption;
	if (icon) data.icon = icon;

	const featuredCard = await prisma.featuredCard.update({
		where: { id: req.params.id * 1 },
		data,
	});

	res
		.status(200)
		.json(new Result(true, 'Featured card updated.', { featuredCard }));
});

/**
	=> @DELETE
	=> /api/v1/featured-card/:id
	=> Limited
*/
exports.deleteFCard = asyncHdl(async (req, res, next) => {
	const featuredCard = await prisma.featuredCard.delete({
		where: { id: req.params.id * 1 },
	});

	res
		.status(200)
		.json(new Result(true, 'Featured card deleted.', { featuredCard }));
});
