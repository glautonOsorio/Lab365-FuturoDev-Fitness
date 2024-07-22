const { createCurso } = require("./function/curso.store");
const { findAllCursos } = require("./function/curso.index");
const { updateCurso } = require("./function/curso.update");
const { deleteCurso } = require("./function/curso.delete");

class CursosController {
  async store(req, res) {
    await createCurso(req, res);
  }

  async index(req, res) {
    await findAllCursos(req, res);
  }

  async update(req, res) {
    await updateCurso(req, res);
  }

  async destroy(req, res) {
    await deleteCurso(req, res);
  }
}

module.exports = new CursosController();
