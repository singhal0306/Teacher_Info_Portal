const mongoose = require("mongoose");
require("dotenv").config();
module.exports.ConnectDB =  ()=> {
  mongoose
    .connect(
      `mongodb+srv://web:${process.env.PASSWORD}@cluster0.oig9riw.mongodb.net/teacher_db?retryWrites=true&w=majority`

    )
    .then(() => {
      console.log("Connected to the Database");
    })
    .catch((err) => {
      console.log(err);
    });
};
