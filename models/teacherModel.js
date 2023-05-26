const mongoose = require("mongoose");
const TeacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true
  },
  teacherAge: {
    type: String,
    required: true
  },
  teacherDept: {
    type: String,
    required: true
  },
  teachersPositionName: {
    type: String,
    required: true
  },
  teachersCourseName: {
    type: String,
    required: true
  }
});
const TeacherModel = mongoose.model("teacher", TeacherSchema);
module.exports = TeacherModel;
