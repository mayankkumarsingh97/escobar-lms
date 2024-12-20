const asyncHandler = require("express-async-handler");
const { generateToken } = require("../../utils/generateToken");
const { verifyToken } = require("../../utils/verifyToken");
//
const Admin = require("../../models/Staff/Admin");
const { verify } = require("jsonwebtoken");
//
//@desc Register Admni
//@ Route POST /api/admin/register
//@access Private
exports.registerAdminCtrl = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //
  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    return res.json("admin already exists!");
  }
  const user = await Admin.create({ name, email, password });
  //
  return res.json({
    status: "success",
    data: user,
    message: "Admin registered successfully!",
  });
});
//
//@desc Login Admin
//@ Route POST /api/admin/login
//@access Private
exports.loginAdminCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Find user
  const user = await Admin.findOne({ email });

  //
  if (!user) res.json({ message: "user not found!" });
  //
  if (user && (await user.verifyPassword(password))) {
    // const token = generateToken(user._id);
    // const verify = verifyToken(token);
    res.status(201).json({
      token: generateToken(user._id),
      data: user,
      message: "admin loggedin suceess!",
    });
  } else {
    res.json({ message: "Invalid user" });
  }
});
//
//
//@desc Get Single Admin
//@ Route GET /api/admin/id
//@access Private
exports.getAdminProfileCtrl = asyncHandler(async (req, res) => {
  console.log(req.userAuth, "userAuth");
  const admin = await Admin.findById(req.userAuth._id).select(
    "-password -createdAt -updatedAt"
  );
  if (!admin) {
    throw Error("Admin does't exists!");
  }
  res.json({
    status: "success",
    data: admin,
  });
});
//@desc Get All Admin Details
//@ Route GET /api/admins
//@access Private
exports.getAdminsCtrl = asyncHandler(async (req, res) => {
  const admins = await Admin.find();
  return res.json({
    status: "success",
    data: admins,
    message: "all admins fetched successfully!",
  });
});
//@desc Delete Admin
//@ Delete /api/admin/delete:id
//@ access Private
exports.deleteAdminCtrl = asyncHandler((req, res) => {
  res.json({
    status: "success",
    data: "admin deleted successfully",
  });
});
//@desc Suspend Teacher By Admin
// @ PUT /api/suspend/teacher:id
// @ access Private
exports.adminSuspendTeacherCtrl = asyncHandler((req, res) => {
  res.json({
    status: "success",
    data: "teacher suspended!",
  });
});
//@desc unsuspend Teacher By Admin
// @ PUT /api/suspend/teacher:id
// @ access Private
exports.adminUnSuspendTeacherCtrl = asyncHandler((req, res) => {
  res.json({
    status: "success",
    data: "teacher un-suspended!",
  });
});

//@desc withdraw Teacher By Admin
// @ PUT /withdrow/teacher/:id
// @ access Private
exports.adminWithdrawTeacherCtrl = asyncHandler((req, res) => {
  res.json({
    status: "success",
    data: "Admin Withdraw teacher",
  });
});

//@desc unwithdraw Teacher By Admin
// @ PUT /unwithdrow/teacher/:id
// @ access Private
exports.adminUnWithdrawTeacherCtrl = asyncHandler((req, res) => {
  res.json({
    status: "success",
    data: "Admin unWithdraw teacher",
  });
});

//@desc Results Published By Admin
// @ PUT /publish/exam/:id
// @ access Private
exports.adminPublishTeacherCtrl = asyncHandler((req, res) => {
  res.json({
    status: "success",
    data: "Admin publish results ",
  });
});
//@desc Results un-Published By Admin
// @ PUT /publish/exam/:id
// @ access Private
exports.adminUnPublishTeacherCtrl = asyncHandler((req, res) => {
  res.json({
    status: "success",
    data: "Admin un-publish results ",
  });
});
