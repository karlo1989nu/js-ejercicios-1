function hola() {
  console.log("Hola mundo");
}
hola();

let numero = 10;
const string = "Miauloja";
console.log(numero);
console.log(string);

let numeros = 42;
const strings = "Javascript";
let miau = true;

console.log(typeof numeros);
console.log(typeof strings);
console.log(typeof miau);

function sume(a, b) {
  console.log(a + b);
}
sume(15, 3);

function division(a, b) {
  console.log(a / b);
}
division(8, 2);
// Calcular y mostrar el resultado de la expresión (15 + 3) * (8 / 2)
let resultado = (15 + 3) * (8 / 2);
console.log("El resultado de la expresión (15 + 3) * (8 / 2) es: " + resultado);

function multiplicacion(a, b, c, d) {
  console.log((a + b) * (c / d));
}
multiplicacion(85, 48, 15, 82);

let mayoromenor = 0;

if (mayoromenor < 0) {
  console.log("El número es negativo");
} else if (mayoromenor === 0) {
  console.log("El número es cero");
} else {
  console.log("El número es positivo");
}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let minusculas = "hola mundo";
let mayusculas = minusculas.toUpperCase() + " desde JS";
console.log(mayusculas);

let lista = ["manzana", "banana", "pera"];
console.log(lista[1]);

let lista2 = ["manzana"];
console.log(lista2);
lista2.push("naranja");
console.log(lista2);
lista2.pop();
console.log(lista2);

let usuario = {
  nombre: "Juan",
  edad: 30,
};
console.log(usuario.nombre);
console.log(usuario.edad);

usuario.saludar = console.log("Hola");

console.log(Date());

console.log(Math.floor(Math.random() * 11));

// Programa que usa switch para determinar el día de la semana

let dia = Math.floor(Math.random() * 8);
console.log(dia);

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;

  default:
    console.log("Error: no existe tal día de la semana");
    break;
}
/*
while (((i = 5), i <= 5 && i >= 1, i--)) {
  console.log(i);
}   ???????????
*/
let contador = 5;
while (contador >= 1) {
  console.log(i);
  constador--;
}
