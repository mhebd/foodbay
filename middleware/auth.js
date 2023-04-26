const { verify } = require('jsonwebtoken');
const errMsg = require('../utility/errMsg');

exports.private = async (req, res, next) => {
	const token = req.headers['x-auth-token'];

	// Check has token
	if (!token) {
		return next(
			new errMsg(
				'Your are not authorized to access this page. Please login first.',
				401
			)
		);
	}

	const decode = await verify(token, process.env.JWT_SECRET);

	// Check has token valid
	if (!decode) {
		return next(
			new errMsg(
				'Your are not authorized to access this page. Please login again.',
				401
			)
		);
	}

	if (!decode.verified) {
		return next(
			new errMsg(
				'Your account is not verified yet. Please verify your account.',
				401
			)
		);
	}

	// Set user in request obj
	req.user = decode;
	next();
};

exports.limited = (req, res, next) => {
	if (req.user.role === 'ADMIN') {
		next();
	} else {
		return next(new errMsg('You have no permission to access this page.', 401));
	}
};
