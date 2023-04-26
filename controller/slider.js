const errMsg = require('../utility/errMsg');
const asyncHdl = require('../utility/asyncHdl');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Result = require('../utility/result');

/**
  => @POST
  => /api/v1/slider
  => Limited
*/
exports.createSlide = asyncHdl(async (req, res, next) => {
	const { caption } = req.body;

	if (!caption || !req.file) {
		return next(new errMsg('Slider image and caption are mandatory.', 400));
	}
	const filePath = '/uploads/slider/' + req.file.filename;

	const slide = await prisma.slider.create({
		data: {
			caption,
			image: filePath,
		},
	});

	res
		.status(200)
		.json(new Result(true, 'Slider created successful.', { slide }));
});

/**
  => @GET
  => /api/v1/slider
  => Public
*/
exports.fetchSlides = asyncHdl(async (req, res, next) => {
	const slides = await prisma.slider.findMany({});

	res.status(200).json(new Result(true, '', { slides }));
});

/**
  => @DELETE
  => /api/v1/slider/:id
  => Limited
*/
exports.deleteSlide = asyncHdl(async (req, res, next) => {
	const slide = await prisma.slider.delete({
		where: { id: req.params.id * 1 },
	});

	res
		.status(200)
		.json(new Result(true, 'Slide deleted successful.', { slide }));
});
