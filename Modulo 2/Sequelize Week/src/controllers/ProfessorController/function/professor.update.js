const Professor = require("../../../database/models/Professor.model");

module.exports.updateProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, especialidade, email } = req.body;
    const professor = await Professor.findByPk(id);

    if (!professor) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    professor.nome = nome || professor.nome;
    professor.especialidade = especialidade || professor.especialidade;
    professor.email = email || professor.email;

    await professor.save();
    res.status(200).json(professor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
