const Professor = require("../../../database/models/Professor.model");
const { Op } = require("sequelize");

module.exports.findAllProfessores = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, especialidade } = req.query;

    const where = {};

    if (nome) {
      where.nome = {
        [Op.like]: `%${nome}%`,
      };
    }

    if (especialidade) {
      where.especialidade = especialidade;
    }

    if (id) {
      const professor = await Professor.findByPk(id);
      if (!professor) {
        return res.status(404).json({ error: "Professor não encontrado" });
      }
      return res.status(200).json(professor);
    }

    const professores = await Professor.findAll({ where });
    res.status(200).json(professores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
