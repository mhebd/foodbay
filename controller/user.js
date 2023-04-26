const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const asyncHdl = require('../utility/asyncHdl');
const errMsg = require('../utility/errMsg');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const Result = require('../utility/result');
const { sign } = require('jsonwebtoken');

/**
  => @POST
  => /api/v1/user/register
  => Public
*/
exports.registerUser = asyncHdl(async (req, res, next) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return next(new errMsg('All field is mandatory', 400));
	}

	let user = await prisma.user.findUnique({ where: { email } });

	if (user) {
		return next(new errMsg('User already exist', 400));
	}

	const hashPass = await bcrypt.hash(password, 12);
	const gravatarUrl = await gravatar.url(
		email,
		{ s: '100', r: 'x', d: 'retro' },
		true
	);

	user = await prisma.user.create({
		data: {
			name,
			email,
			password: hashPass,
			gravatar: gravatarUrl,
		},
	});

	res
		.status(200)
		.json(new Result(true, 'Account created successful.', { user }));
});

/**
	=> @POST
	=> /api/v1/user/login
	=> Public
*/
exports.loginUser = asyncHdl(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new errMsg('All field is mandatory.', 400));
	}

	let user = await prisma.user.findUnique({
		where: { email },
	});

	if (!user) {
		return next(new errMsg('User not fund.', 404));
	}

	const matchPass = await bcrypt.compare(password, user.password);

	if (!matchPass) {
		return next(new errMsg('User email or password not match.', 404));
	}

	const token = await sign(
		{
			id: user.id,
			role: user.role,
			verified: user.verified,
		},
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRES }
	);

	res.status(200).json(new Result(true, 'Login successful.', { user, token }));
});

/**
  => @GET
  => /api/v1/user/profile
  => Private
*/
exports.getProfile = asyncHdl(async (req, res, next) => {
	const { id } = req.user;
	user = await prisma.user.findUnique({
		where: { id: id * 1 },
		include: {
			address: true,
		},
	});
	res.status(200).json(new Result(true, '', { user }));
});

/**
	=> @PUT
	=> /api/v1/user/update-profile
	=> Private
*/
exports.updateProfile = asyncHdl(async (req, res, next) => {
	const { id } = req.user;
	const { name, phone } = req.body;
	let data = {};

	if (name) data.name = name;
	if (phone) data.phone = phone;

	const user = await prisma.user.update({
		where: { id },
		data,
	});

	res
		.status(200)
		.json(new Result(true, 'Profile updated successful.', { user }));
});

/**
	=> @PUT
	=> /api/v1/user/update-address
	=> Private
*/
exports.updateAddress = asyncHdl(async (req, res, next) => {
	const id = req.user.id * 1;
	const { country, city, zip, address } = req.body;

	let data = {};
	if (country) data.country = country;
	if (city) data.city = city;
	if (zip) data.zip = zip;
	if (address) data.address = address;

	const hasAddress = await prisma.address.findUnique({
		where: { userId: id },
	});

	if (hasAddress) {
		await prisma.address.update({
			where: { userId: id },
			data,
		});
	} else {
		await prisma.address.create({
			data: {
				...data,
				user: {
					connect: { id },
				},
			},
		});
	}

	const user = await prisma.user.findUnique({
		where: { id: id },
		include: { address: true },
	});

	res
		.status(200)
		.json(new Result(true, 'Address updated successful.', { user }));
});

/**
  => @GET
  => /api/v1/user
  => Limited
*/
exports.allUsers = asyncHdl(async (req, res, next) => {
	const users = await prisma.user.findMany({});

	res.status(200).json(new Result(true, '', { users }));
});
