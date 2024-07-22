const { Router } = require("express");
const cursosRoutes = require("./v1/cursos.routes");
const professorRoutes = require("./v1/professor.routes");

const routes = new Router();

routes.use("/cursos", cursosRoutes);
routes.use("/professor", professorRoutes);

module.exports = routes;
