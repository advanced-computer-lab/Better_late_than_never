exports.jsonResponseFormat = function (req, res, next) {
  res.successResponse = function ({ data, message, code }) {
    return res.status(code || 200).json({
      code: code || 200,
      data,
      message,
    });
  };

  res.errorResponse = function (message = "Server Error", code = 500) {
    return res.status(code).json({
      code,
      message,
    });
  };
  next();
};
