const Curso = require("../../../database/models/Cursos.model");

module.exports.updateCurso = async (req, res) => {
  const { id } = req.params;
  const { nome, duracao } = req.body;

  try {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    if (nome) curso.nome = nome;
    if (duracao) curso.duracao = duracao;

    await curso.save();
    res.status(200).json(curso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
