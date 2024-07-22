const Professor = require("../../../database/models/Professor.model");

module.exports.createProfessor = async (req, res) => {
  try {
    const { nome, especialidade, email } = req.body;
    const professor = await Professor.create({ nome, especialidade, email });
    res.status(201).json(professor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
