const express = require("express");
const morgan = require("morgan");
const {globalErroHandler,notFound} = require("../middlewares/globalErrorHandler");
const adminRouter = require("../routes/staff/adminRouter");
const app = express();
app.use(express.json());
//
//Middlewares
//
app.use(morgan("dev"));
//
//Routes
//
app.use((req, res, next) => {
  console.log(`${req.method}${req.originalUrl}'`);
  next();
});
//
let user = {
  name: "Mayank",
  isAdmin: false,
  isLoggedIn: false,
};
//
const isLogin = (req, res, next) => {
  if (user.isLoggedIn) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized!",
    });
  }
};
//
// app.use(isLogin);
//
app.use("/api/v1/admins", adminRouter);
//
//
//Error Middleware..
//
app.use(notFound)
//
app.use(globalErroHandler);
//
module.exports = app;
