const asyncHandler = require("express-async-handler");
//
const Admin = require("../../models/Staff/Admin");
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
    status: user,
    data: "Admin registered successfully!",
  });
});
//
//@desc Login Admin
//@ Route POST /api/admin/login
//@access Private
exports.loginAdminCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Admin logged successfully",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};
//@desc Get Single Admin
//@ Route GET /api/admin/id
//@access Private
exports.getAdminCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "single Admin details",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};
//@desc Get All Admin Details
//@ Route GET /api/admins
//@access Private
exports.getAdminsCtrl = (req, res) => {
  try {
    return res.json({
      status: "success",
      data: "all admins",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};
//@desc Delete Admin
//@ Delete /api/admin/delete:id
//@ access Private
exports.deleteAdminCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "admin deleted successfully",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};
//@desc Suspend Teacher By Admin
// @ PUT /api/suspend/teacher:id
// @ access Private
exports.adminSuspendTeacherCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "teacher suspended!",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};
//@desc unsuspend Teacher By Admin
// @ PUT /api/suspend/teacher:id
// @ access Private
exports.adminUnSuspendTeacherCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "teacher un-suspended!",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};

//@desc withdraw Teacher By Admin
// @ PUT /withdrow/teacher/:id
// @ access Private
exports.adminWithdrawTeacherCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Admin Withdraw teacher",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};

//@desc unwithdraw Teacher By Admin
// @ PUT /unwithdrow/teacher/:id
// @ access Private
exports.adminUnWithdrawTeacherCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Admin unWithdraw teacher",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};

//@desc Results Published By Admin
// @ PUT /publish/exam/:id
// @ access Private
exports.adminPublishTeacherCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Admin publish results ",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};
//@desc Results un-Published By Admin
// @ PUT /publish/exam/:id
// @ access Private
exports.adminUnPublishTeacherCtrl = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Admin un-publish results ",
    });
  } catch (err) {
    res.json({
      status: "Failed",
      error: err.message,
    });
  }
};
