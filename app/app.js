const express = require("express");
const morgan = require("morgan");
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  globalErroHandler,
  notFound,
} = require("../middlewares/globalErrorHandler");
//
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
//
app.use(isLoggedIn);
//
app.use("/api/v1/admins", adminRouter);
//
//
//Error Middleware..
//
app.use(notFound);
//
app.use(globalErroHandler);
//
module.exports = app;
