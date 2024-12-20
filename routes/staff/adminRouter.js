const express = require("express");
const {
  registerAdminCtrl,
  loginAdminCtrl,
  getAdminProfileCtrl,
  getAdminsCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnSuspendTeacherCtrl,
  adminWithdrawTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminPublishTeacherCtrl,
  adminUnPublishTeacherCtrl,
} = require("../../controllers/staff/adminCtrl");
const isLoggedIn = require("../../middlewares/isLoggedIn");
const isAdmin = require("../../middlewares/isAdmin");

const adminRouter = express.Router();
//
// admin register
//
adminRouter.post("/register", registerAdminCtrl);
//login
adminRouter.post("/login", loginAdminCtrl);
//
//Get Single admin
//
adminRouter.get("/profile", isLoggedIn, getAdminProfileCtrl);
//
//Get all admin
//
adminRouter.get("/", isLoggedIn, isAdmin, getAdminsCtrl);
//
//delete admin
//
adminRouter.delete("/:id", deleteAdminCtrl);
//
//Admin Suspending Teacher
//
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);
//
//...Admin Unsuspending teacher
//
adminRouter.put("/unsuspend/teacher/:id", adminUnSuspendTeacherCtrl);
//
//...Admin withdrawing teacher ....
//
adminRouter.put("/withdrow/teacher/:id", adminWithdrawTeacherCtrl);
//
//...Admin unwithdrawing teacher ....
//
adminRouter.put("/unwithdrow/teacher/:id", adminUnWithdrawTeacherCtrl);
//
//
//...Admin Publish Results ....
//
adminRouter.put("/publish/exam/:id", adminPublishTeacherCtrl);
//
//...Admin unPublish Results ....
//
adminRouter.put("/unpublish/exam/:id", adminUnPublishTeacherCtrl);
//
//
//
module.exports = adminRouter;
