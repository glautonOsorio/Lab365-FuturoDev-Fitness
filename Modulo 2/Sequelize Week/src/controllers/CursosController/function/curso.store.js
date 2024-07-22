const Curso = require("../../../database/models/Cursos.model");

module.exports.createCurso = async (req, res) => {
  const { nome, duracao } = req.body;

  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({
      error: "Nome do curso é obrigatório e deve ser uma string não vazia.",
    });
  }

  if (!duracao || typeof duracao !== "number" || duracao <= 0) {
    return res.status(400).json({
      error:
        "Duração do curso é obrigatória e deve ser um número maior que zero.",
    });
  }

  try {
    const novoCurso = await Curso.create({ nome, duracao });
    res.status(201).json(novoCurso);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o curso." });
  }
};
