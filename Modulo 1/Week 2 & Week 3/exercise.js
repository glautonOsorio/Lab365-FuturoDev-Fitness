// If else if if else

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

// Switch Stuff

function DayOfTheWeek(day) {
  switch (day) {
    case 1:
      console.log("Domingo");
      break;
    case 2:
      console.log("Segunda");
      break;
    case 3:
      console.log("Terça");
      break;
    case 4:
      console.log("Quarta");
      break;
    case 5:
      console.log("Quinta");
      break;
    case 6:
      console.log("Sexta");
      break;

    case 7:
      console.log("Sábado");
      break;

    default:
      console.log("Please bote entre 1 a 7");
      break;
  }
}

function Vowel(vowel) {
  switch (vowel) {
    case "a" || "e" || "i" || "o" || "u":
      console.log("Sua letra é uma vogal");
      break;

    default:
      console.log("Sua letra é uma consoante");
      break;
  }
}

function Month(month) {
  switch (month) {
    case 1:
      console.log("Janeiro");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    case 3:
      console.log("Março");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Maio");
      break;
    case 6:
      console.log("Junho");
      break;

    case 7:
      console.log("Julho");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9:
      console.log("Setembro");
      break;
    case 10:
      console.log("Outubro");
      break;
    case 11:
      console.log("Novembro");
      break;
    case 12:
      console.log("Dezembro");
      break;

    default:
      console.log("Please bote entre 1 a 12");
      break;
  }
}

function Days(day) {
  switch (day) {
    case "Segunda" || "Terça" || "Quarta" || "Quinta" || "Sexta":
      console.log("Dia util");
      break;
    case "Sabado" || "Domingo":
      console.log("Fim de semana");

    default:
      console.log("Coloque um doas 7 dias da semana");
      break;
  }
}

function Polygon(side) {
  switch (side) {
    case 3:
      console.log("Triângulo");
      break;
    case 4:
      console.log("Quadrilátero");
      break;
    case 5:
      console.log("Pentágono");
      break;
    case 6:
      console.log("Hexágono");
      break;
    case 7:
      console.log("Heptágono");
      break;
    case 8:
      console.log("Octógono");
      break;
    default:
      console.log("Polígono não identificado");
  }
}

function PositiveNegative(num) {
  switch (num) {
    case num > 0:
      console.log("Número positivo.");
      break;
    case num < 0:
      console.log("Número negativo.");
      break;
    default:
      console.log("O número é zero.");
  }
}

function Season(month) {
  switch (month) {
    case 12 || 1 || 2:
      console.log("Verão");
      break;
    case 3 || 4 || 5:
      console.log("Outono");
      break;
    case 6 || 7 || 8:
      console.log("Inverno");
      break;
    case 9 || 10 || 11:
      console.log("Primavera");
      break;
    default:
      console.log("Mês inválido");
  }
}
