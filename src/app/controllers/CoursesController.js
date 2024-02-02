const Course = require("../models/Course");

class CoursesController {
  //[GET] /Courses/create
  create(req, res) {
    res.render("courses/create");
  }
  //[POST] /Courses/store Course.create only create a new Course.
  //But use Course.save can be used to edit and create
  store(req, res) {
    const newCourse = new Course(req.body);
    newCourse.save().then(() => {
      res.redirect("/");
    });
  }

  //[GET] /Courses/:slug
  show(req, res) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", {
          course,
        });
      });
  }

  //[GET] /Courses/edit/:id
  edit(req, res) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => {
        res.render("courses/edit", {
          course,
        });
      });
  }
  //[PUT] /Courses/:id
  update(req, res) {
    Course.findByIdAndUpdate(req.params.id, req.body).then(() => res.redirect("/me/stored/courses"));
  }

  delete(req, res) {
    Course.delete({ _id: req.params.id }).then(() => res.redirect("back"));
  }

  destroy(req, res) {
    Course.findByIdAndDelete(req.params.id).then(() => res.redirect("/me/trashed/courses"));
  }

  restore(req, res) {
    Course.restore({ _id: req.params.id }).then(() => res.redirect("back"));
  }
}

module.exports = new CoursesController();
