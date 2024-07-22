const Professor = require("../../../database/models/Professor.model");

module.exports.deleteProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const professor = await Professor.findByPk(id);

    if (!professor) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    await professor.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
