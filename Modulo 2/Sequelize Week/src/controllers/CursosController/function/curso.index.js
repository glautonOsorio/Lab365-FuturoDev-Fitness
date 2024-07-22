const { Op } = require("sequelize"); // Importar Op para usar LIKE
const Curso = require("../../../database/models/Cursos.model");

module.exports.findAllCursos = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, duracao } = req.query;

    const where = {};

    if (nome) {
      where.nome = {
        [Op.like]: `%${nome}%`,
      };
    }

    if (duracao) {
      const duracaoInt = parseInt(duracao, 10);
      if (!isNaN(duracaoInt)) {
        where.duracao = duracaoInt;
      }
    }

    if (id) {
      const curso = await Curso.findByPk(id);
      if (!curso) {
        return res.status(404).json({ error: "Curso não encontrado" });
      }
      return res.status(200).json(curso);
    }

    const cursos = await Curso.findAll({ where });
    res.status(200).json(cursos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
