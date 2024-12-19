const express = require("express");
const morgan = require("morgan");
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
//
app.use("/api/v1/admins", adminRouter);
//
//
//
module.exports = app;
