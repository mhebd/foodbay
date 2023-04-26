const errMsg = require('../utility/errMsg');
const asyncHdl = require('../utility/asyncHdl');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Result = require('../utility/result');

/**
  => @POST
  => /api/v1/category
  => Limited
*/
exports.createCategory = asyncHdl(async (req, res, next) => {
	const { name } = req.body;

	if (!name) {
		return next(new errMsg('Category name is mandatory.', 400));
	}

	const category = await prisma.category.create({
		data: { name },
	});

	res
		.status(200)
		.json(new Result(true, 'Category created successful.', { category }));
});

/**
  => @GET
  => /api/v1/category
  => Public
*/
exports.fetchCategories = asyncHdl(async (req, res, next) => {
	const categories = await prisma.category.findMany({});

	res.status(200).json(new Result(true, '', { categories }));
});

/**
  => @GET
  => /api/v1/category/:id
  => Public
*/
exports.FetchCategory = asyncHdl(async (req, res, next) => {
	const category = await prisma.category.findUnique({
		where: { id: req.params.id * 1 },
		include: { products: true },
	});

	res.status(200).json(new Result(true, '', { category }));
});
