const http = require("node:http");

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/fundamentos") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    return response.end("Hello world, fundamentos nodejs aplicado.");
  }

  response.statusCode = 404;
  response.end("Rota não encontrada");
});

const port = 3333;
const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(
    `Servidor está rodando na porta ${port}: http://${hostname}:${port}`
  );
});
