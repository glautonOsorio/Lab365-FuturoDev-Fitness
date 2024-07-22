const { Router } = require("express");
const cursosRoutes = require("./v1/cursos.routes");

const routes = new Router();

routes.use("/cursos", cursosRoutes);

module.exports = routes;
