const router = require("express").Router();
const ProfessorController = require("../../controllers/ProfessorController");

router.get("/", ProfessorController.index);
router.get("/:id", ProfessorController.index);
router.post("/", ProfessorController.store);
router.put("/:id", ProfessorController.update);
router.delete("/:id", ProfessorController.destroy);

module.exports = router;
