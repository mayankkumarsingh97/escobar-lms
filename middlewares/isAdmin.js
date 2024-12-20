const Admin = require("../models/Staff/Admin");

const isAdmin = async (req, res, next) => {
  //find the user
  const user = req.userAuth._id;
  const adminFound = await Admin.findById(user);
  if (adminFound?.role === "admin") {
    next();
  } else {
    next(new Error("Access denied, admin only!"));
  }
};

module.exports= isAdmin
