const CursosController = require("../../controllers/CursosController");
const router = require("express").Router();

router.get("/", CursosController.index);
router.get("/:id", CursosController.index);
router.post("/", CursosController.store);
router.put("/:id", CursosController.update);
router.delete("/:id", CursosController.destroy);

module.exports = router;
