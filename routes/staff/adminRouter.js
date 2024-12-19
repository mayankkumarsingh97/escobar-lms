const express = require("express");
const {
  registerAdminCtrl,
  loginAdminCtrl,
  getAdminCtrl,
  getAdminsCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnSuspendTeacherCtrl,
  adminWithdrawTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminPublishTeacherCtrl,
  adminUnPublishTeacherCtrl,
} = require("../../controllers/staff/adminCtrl");
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
adminRouter.get("/:id", getAdminCtrl);
//
//Get all admin
//
adminRouter.get("/", getAdminsCtrl);
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
