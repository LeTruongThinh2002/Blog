var express = require("express");
var router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.get("/edit/:id", coursesController.edit);
router.get("/delete/:id", coursesController.delete);
router.patch("/:id/restore", coursesController.restore);
router.delete("/:id", coursesController.destroy);
router.put("/:id", coursesController.update);
router.get("/:slug", coursesController.show);

module.exports = router;
