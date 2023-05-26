const TeacherModel = require("../models/teacherModel");

module.exports.HomeController = (req, res) => {
  res.render("home");
};
module.exports.InsertPageController = (req, res) => {
  res.render("insert");
};
module.exports.UpdatePageController = (req, res) => {
  res.render("update");
};
module.exports.DeletePageController = (req, res) => {
  res.render("delete");
};
module.exports.SearchPageController = (req, res) => {
  res.render("search");
};
module.exports.InsertionController = (req, res) => {
  const { name, age, dept, position, course } = req.body;
  const teacher = new TeacherModel({
    teacherAge: age,
    teacherDept: dept,
    teacherName: name,
    teachersPositionName: position,
    teachersCourseName: course
  });
  teacher.save().then(() => {
    res.json({
      message: "Data saved successfully"
    });
  });
};
module.exports.UpdationController = (req, res) => {
  const { name, age, dept, position, course, id } = req.body;
  TeacherModel.updateOne(
    { _id: id },
    {
      $set: {
        teacherAge: age,
        teacherDept: dept,
        teacherName: name,
        teacherspositionName: position,
        teacherscourseName: course
      }
    }
  ).then(() => {
    res.json({
      message: "Data updated successfully"
    });
  });
};
module.exports.DeletionController = (req, res) => {
  const { id } = req.body;
  TeacherModel.deleteOne({ _id: id }).then(() => {
    res.json({
      message: "Data deleted successfully"
    });
  });
};
module.exports.SearchController = (req, res) => {
  const { id } = req.body;
  TeacherModel.findOne({ _id: id }).then((response) => {
    res.json({
      data: response
    });
  });
};
