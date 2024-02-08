function Age(age) {
  if ((age) => 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

function Number(num) {
  if (num > 0) {
    console.log("Numero positivo");
  } else if (num < 0) {
    console.log("Numero negativo");
  } else {
    console.log("O seu numero é 0 ");
  }
}

function Year(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Ano bissexto.");
  } else {
    console.log("Não é bissexto.");
  }
}

function Par(par) {
  if (par % 2 === 0) {
    console.log("Numero é par");
  } else {
    console.log("Numero é impar");
  }
}

function Students(note) {
  if (note >= 7) {
    console.log("Aluno passou");
  } else if (note === 5 || note === 6) {
    console.log("Aluno está em recuperação");
  } else {
    console.log("Aluno reprovado");
  }
}

function Numbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log("O primeiro número é o maior.");
  } else if (num2 > num1 && num2 > num3) {
    console.log("O segundo número é o maior.");
  } else {
    console.log("O terceiro número é o maior.");
  }
}

function ParYear(year) {
  if (year % 2 === 0) {
    console.log("Ano é par");
  } else {
    console.log("Ano é impar");
  }
}
