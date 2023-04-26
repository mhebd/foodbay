module.exports = (err, req, res, next) => {
	err ? console.log(err) : null;
	let message = err.message || 'SERVER ERROR';
	let status = err.status || 500;

	switch (err.code) {
		case 'P2025':
			message = `Data not found. ${err.meta.cause}`;
			break;

		case 'P2002':
			message = `Duplicate value found on ${err.meta.target.join(', ')} field.`;
		default:
			break;
	}

	res.status(status).json({
		success: false,
		message,
	});
	next();
};
