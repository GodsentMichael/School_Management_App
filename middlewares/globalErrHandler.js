//Error handler for my endpoints.
const globalErrHandler = (err, req, res, next) => {
	//status
	//message
	//stack
	const status = err?.status ? err?.status : 'Failed';
	const message = err?.message || 'Internal server Error';
	const stack = err?.stack || 'No stack trace';
	const statusCode = err?.statusCode ? err?.statusCode : 500;
	res.status(statusCode).json({
		status,
		message,
		stack,
	});
};

//Error handler for non existent endpoints.
const notFoundErr = (req, res, next) => {
	const error = new Error(
		`Can't find - ${req.originalUrl} with ${req.method} method on server.`
	);
    next(error);
};

module.exports = { globalErrHandler, notFoundErr };
