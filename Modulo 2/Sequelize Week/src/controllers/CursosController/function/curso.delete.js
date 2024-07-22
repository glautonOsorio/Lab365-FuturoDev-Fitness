const Curso = require("../../../database/models/Cursos.model");

module.exports.deleteCurso = async (req, res) => {
  const { id } = req.params;

  try {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    await curso.destroy();
    res.status(200).json({ message: "Curso deletado com sucesso" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
