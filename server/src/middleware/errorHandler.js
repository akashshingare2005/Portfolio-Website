const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server error",
  });
};

export default errorHandler;
