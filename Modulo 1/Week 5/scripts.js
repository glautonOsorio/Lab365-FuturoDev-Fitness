document.addEventListener("DOMContentLoaded", function () {
  const produtos = [
    { nome: "Feijão", codigo: "001", preco: 5.99 },
    { nome: "Arroz", codigo: "002", preco: 23.99 },
    { nome: "Macarrão", codigo: "003", preco: 3.49 },
    // Adicione mais produtos conforme necessário
  ];

  const carrinho = [];

  const consultarBtn = document.getElementById("consultar-btn");
  const comprarBtn = document.getElementById("comprar-btn");
  const calcularTotalBtn = document.getElementById("calcular-total-btn");
  const precoProduto = document.getElementById("preco-produto");
  const carrinhoDisplay = document.getElementById("carrinho");
  const valorTotalDisplay = document.getElementById("valor-total");

  consultarBtn.addEventListener("click", function () {
    const produtoInput = document.getElementById("produto-input").value;
    const produtoEncontrado = produtos.find(
      (produto) =>
        produto.nome === produtoInput || produto.codigo === produtoInput
    );
    if (produtoEncontrado) {
      precoProduto.innerText = `O valor do produto é: R$ ${produtoEncontrado.preco.toFixed(
        2
      )}`;
    } else {
      precoProduto.innerText = "Produto não encontrado.";
    }
  });

  comprarBtn.addEventListener("click", function () {
    const produtoInput = document.getElementById("produto-input").value;
    const produtoEncontrado = produtos.find(
      (produto) =>
        produto.nome === produtoInput || produto.codigo === produtoInput
    );
    if (produtoEncontrado) {
      carrinho.push(produtoEncontrado);
      carrinhoDisplay.innerText = "Carrinho de Compras:";
      carrinho.forEach((item) => {
        carrinhoDisplay.innerText += `\n- ${item.nome} (R$ ${item.preco.toFixed(
          2
        )})`;
      });
    } else {
      alert("Produto não encontrado.");
    }
  });

  calcularTotalBtn.addEventListener("click", function () {
    let total = 0;
    carrinho.forEach((item) => {
      total += item.preco;
    });
    if (total > 0) {
      valorTotalDisplay.innerText = `Total da Compra: R$ ${total.toFixed(2)}`;
    } else {
      valorTotalDisplay.innerText = "Carrinho vazio.";
    }
  });
});
