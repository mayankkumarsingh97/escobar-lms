const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/lms_sys");
    //
    console.log("DB connected successfully :-)");
    //
  } catch (err) {
    console.log(`Failed  ::-()-${err.message}`);
  }
};

//
//
dbConnect();
//
//
