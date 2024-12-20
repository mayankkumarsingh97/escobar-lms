const Admin = require("../models/Staff/Admin");
const { verifyToken } = require("../utils/verifyToken");

//
const isLoggedIn = async (req, res, next) => {
  const headerObject = req.headers;
  const token = headerObject?.authorization?.split(" ")[1];
  const verifiedToken = verifyToken(token);

  if (verifiedToken) {
    const user = await Admin.findById(verifiedToken.id).select(
      "name email role"
    );
    console.log(user);
    req.userAuth = user;
    next();
  } else {
    const err = new Error("Token expired!");
    next(err);
  }
};

module.exports = isLoggedIn;
