// [M1S04] - Ex 1 - Função de mensagem

const message = "Hello Underworld";

console.log(message);

// [M1S04] - Ex 2 - Atribuição de valores

//const prompt = prompt("Write something here");
const test = "Write something here";

console.log(test);

// [M1S04] - Ex 3 - Concatenação

const firstString = "I really";

const secondString = "pancakes and japanese curry";

console.log(`${firstString} like ${secondString}`);

// [M1S04] - Ex 4 -Função com parâmetros

function Addiction(num1, num2) {
  return console.log(num1 + num2);
}
Addiction(5, 12);

// [M1S04] - Ex 5 - Estruturas condicionais

function Number(num) {
  if (num > 0) {
    return console.log("Positive number");
  } else if (num < 0) {
    return console.log("Negative number");
  } else {
    return console.log("Your number is 0");
  }
}

Number(4);
Number(-4);
Number(0);

// [M1S04] - Ex 6 - Objetos

const people = [
  {
    name: "Akio Otsuka",
    age: 64,
    nationality: "Japanese",
    profession: "Voice Actor",
  },
  {
    name: "Nobunaga Shimazaki",
    age: 35,
    nationality: "Japanese",
    profession: "Voice Actor",
  },
  {
    name: "Takaya Kuroda ",
    age: 58,
    nationality: "Japanese",
    profession: "Voice Actor",
  },
  {
    name: "Hidenari Ugaki  ",
    age: 60,
    nationality: "Japanese",
    profession: "Voice Actor",
  },
];

people.forEach((person) => {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Nationality:", person.nationality);
  console.log("Profession:", person.profession);
});

// [M1S04] - Ex 7 - Função cumprimentos

function GetHours() {
  const date = new Date();

  const hour = date.getHours();

  if (hour >= 6 && hour < 12) {
    return console.log("Good Morning");
  } else if (hour >= 12 && hour < 18) {
    return console.log("Good Afternoon");
  } else {
    return console.log("Good Night");
  }
}

GetHours();

//[M1S04] - Ex 8 - Função par/impar

function Par(par) {
  par % 2 === 0 ? console.log("Even number") : console.log("Odd number");
}

Par(8);
Par(7);

// [M1S04] - Ex 9 - Switch/case

function Vowel(vowel) {
  switch (vowel) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("Your letter is a vowel");
      break;

    default:
      console.log("Your letter is a consonant");
      break;
  }
}

Vowel("e");
Vowel("b");

// [M1S04] - Ex 10 - Solicitação de dados em função

// const agePrompt = prompt("Digite sua idade");

const testAge1 = 18;

const testAge2 = 12;

function Age(age) {
  age >= 18
    ? console.log("You are of legal age")
    : console.log("You are a minor");
}

Age(testAge1);
Age(testAge2);
