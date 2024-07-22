const { createProfessor } = require("./function/professor.store");
const { findAllProfessores } = require("./function/professor.index");
const { updateProfessor } = require("./function/professor.update");
const { deleteProfessor } = require("./function/professor.delete");

class ProfessoresController {
  async store(req, res) {
    await createProfessor(req, res);
  }

  async index(req, res) {
    await findAllProfessores(req, res);
  }

  async update(req, res) {
    await updateProfessor(req, res);
  }

  async destroy(req, res) {
    await deleteProfessor(req, res);
  }
}

module.exports = new ProfessoresController();
