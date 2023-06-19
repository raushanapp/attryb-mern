const User = require("../model/user.model");
const ErrorResponse = require("../utils/errorResponse");
exports.register = async (req, res, next) => {
  const { firstName,lastName, email, password } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
  // res.send("Register router");
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Please Provide email and password", 400));
  }
  try {
    const user = await User.findOne({ email }).select("+password"); // select password and match the password through methods matchpassword
    if (!user) return next(new ErrorResponse("Invalid credentials", 401));
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return next(new ErrorResponse("Invalid credentials", 401));

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
  // res.send("Login router");
};
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    sucess: true,
    token,
  });
};
