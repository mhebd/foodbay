const errMsg = require('../utility/errMsg');
const asyncHdl = require('../utility/asyncHdl');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Result = require('../utility/result');

/**
  => @POST
  => /api/v1/product
  => Limited
*/
exports.createProduct = asyncHdl(async (req, res, next) => {
	const { name, price, discount, featured, special, category } = req.body;

	if (!name || !price || !category || !req.file) {
		return next(new errMsg('All fields are mandatory.', 400));
	}

	const filePath = `/uploads/product/` + req.file.filename;
	let data = {};

	if (name) data.name = name;
	if (price) data.price = price * 1;
	if (discount) data.discount = discount * 1;
	if (featured == 'true') data.featured = true;
	if (featured == 'false') data.featured = false;
	if (special == 'true') data.special = true;
	if (special == 'false') data.special = false;

	const product = await prisma.product.create({
		data: {
			...data,
			category: {
				connect: { id: category * 1 },
			},
			image: filePath,
		},
	});

	res
		.status(200)
		.json(new Result(true, 'Product created successful.', { product }));
});

/**
  => @GET
  => /api/v1/product
  => Public
*/
exports.fetchProducts = asyncHdl(async (req, res, next) => {
	const products = await prisma.product.findMany({
		include: { category: true },
	});

	res.status(200).json(new Result(true, '', { products }));
});

/**
  => @PUt
  => /api/v1/product/:id
  => Limited
*/
exports.updateProduct = asyncHdl(async (req, res, next) => {
	const { name, price, discount, featured, special, category } = req.body;
	console.log(featured);

	let data = {};
	let filePath;
	if (req.file) {
		filePath = `/uploads/product/` + req.file.filename;
	}

	if (name) data.name = name;
	if (price) data.price = price * 1;
	if (discount) data.discount = discount * 1;
	if (featured == 'true') data.featured = true;
	if (featured == 'false') data.featured = false;
	if (special == 'true') data.special = true;
	if (special == 'false') data.special = false;
	if (filePath) data.image = filePath;
	if (category) data.category = { connect: { id: category * 1 } };

	console.log(data);

	const product = await prisma.product.update({
		where: { id: req.params.id * 1 },
		data,
	});

	res
		.status(200)
		.json(new Result(true, 'Product updated successful.', { product }));
});

/**
  => @DELETE
  => /api/v1/product/:id
  => Limited
*/
exports.deleteProduct = asyncHdl(async (req, res, next) => {
	const product = await prisma.product.delete({
		where: { id: req.params.id * 1 },
	});

	res
		.status(200)
		.json(new Result(true, 'Product deleted successful.', { product }));
});

/**
	=> @GET
	=> /api/v1/product/special
	=> Public
*/
exports.fetchSpecialProduct = asyncHdl(async (req, res, next) => {
	const products = await prisma.product.findMany({
		where: { special: true },
		include: { category: true },
	});

	res.status(200).json(new Result(true, '', { products }));
});
