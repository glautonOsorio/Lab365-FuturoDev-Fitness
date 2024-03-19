// Selecionar elemento pelo ID e alterar sua cor de fundo
var meuElemento = document.getElementById("meuElemento");
meuElemento.style.backgroundColor = "lightgreen";

// Selecionar elementos pela classe e alterar o texto
var elementosClasse = document.getElementsByClassName("minhaClasse");

for (var i = 0; i < elementosClasse.length; i++) {
  elementosClasse[i].textContent = "Novo texto";
}

// Adicionar um novo elemento como filho
var novoElemento = document.createElement("p");
novoElemento.textContent = "Novo Elemento Filho";
document.getElementById("paiElemento").appendChild(novoElemento);

// Remover elemento filho
var elementoFilhoRemovido = document
  .getElementById("elementoPaiComFilho")
  .querySelector("p");
elementoFilhoRemovido.parentNode.removeChild(elementoFilhoRemovido);

// Alterar o estilo de todos os elementos de uma página HTML que tenham uma determinada classe
var elementosClasseNovaEstilo = document.getElementsByClassName("minhaClasse");
for (var j = 0; j < elementosClasseNovaEstilo.length; j++) {
  elementosClasseNovaEstilo[j].style.fontWeight = "bold";
}

// Adicionar uma nova classe a um elemento específico
document.getElementById("elementoComClasse").classList.add("novaClasse");

// Remover uma classe de um elemento específico
document
  .getElementById("elementoComClasseRemovida")
  .classList.remove("minhaClasse");
