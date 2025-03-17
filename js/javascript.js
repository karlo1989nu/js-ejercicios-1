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
  console.log(contador);
  contador--;
}

//17. Función con return

function par(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(par(5));
console.log(par(6));

//18. Template Strings

function mensaje(nombre, edad) {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
}
console.log(mensaje("Juan", 30));

//19. Arrow Function

const suma = (a, b) => a + b;
console.log(suma(5, 3));

//20. forEach

let listanum = [1, 2, 3];

listanum.forEach((element) => {
  console.log(element);
});

//21. indexOf
let listfrut = ["manzana", "banana", "pera"];
console.log(listfrut.indexOf("banana"));

//22. Ordenar números con sort

let listsort = [5, 1, 3];
console.log(listsort.sort((a, b) => a - b));

//23. Filtrar con filter

let listpar = [1, 2, 3, 4];
let parnew = listpar.filter((element) => element % 2 === 0);
console.log(parnew);

//24. Transformar con map

let listmap = [1, 2, 3];
let listmapnew = listmap.map((element) => element * 2);
console.log(listmapnew);

//25. Constructor de objetos

function Persona(nombre) {
  this.nombre = nombre;
}
let persona = new Persona("Juan");

console.log(`Hola, soy ${persona.nombre}`);

//26. Métodos de fecha avanzados

let fechaActual = new Date();
let horas = fechaActual.getHours().toString().padStart(2, "0");
let minutos = fechaActual.getMinutes().toString().padStart(2, "0");
let segundos = fechaActual.getSeconds().toString().padStart(2, "0");

let horaActual = `${horas}:${minutos}:${segundos}`;
console.log("Hora actual:", horaActual);

//27. Redondeo con toFixed

let numeropi = 3.1415;
let numeroRedondeado = numero.toFixed(2);
console.log("Número redondeado a dos decimales:", numeroRedondeado);

//28. Buscar substrings con includes

let texto = "¡Hola Mundo!";
let palabra = "hola";
let contienePalabra = texto.toLowerCase().includes(palabra.toLowerCase());
console.log(`¿El texto contiene la palabra "${palabra}"? ${contienePalabra}`);

//29. Convertir strings con split y join
let frutas = "manzana,banana,pera";
let arrayFrutas = frutas.split(",");
console.log(arrayFrutas);

let stringFrutas = arrayFrutas.join("-");
console.log(stringFrutas);

//30. Destructuring de arrays
let numerosd = [10, 20, 30];
let [primero, , tercero] = numerosd;
console.log(`Primer elemento: ${primero}`);
console.log(`Tercer elemento: ${tercero}`);

//31. Destructuring de objetos

let personaObj = { nombre: "Ana", edad: 30 };
let { nombre, edad } = personaObj;
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);

//32. Closure

function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}

const contadores = crearContador();

console.log(contadores()); // 1
console.log(contadores()); // 2
console.log(contadores()); // 3

// 33. this en métodos de objeto
let coche = {
  marca: "Toyota",
  mostrarMarca: function () {
    console.log(this.marca);
  },
};
coche.mostrarMarca(); // Imprime "Toyota"

// 34. Clases
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

let rectangulo = new Rectangulo(5, 10);
console.log(`Área del rectángulo: ${rectangulo.area()}`); // Imprime el área del rectángulo

// 35. JSON
let objetoSimple = { nombre: "Carlos", edad: 25 };
let jsonString = JSON.stringify(objetoSimple);
console.log(`JSON string: ${jsonString}`);

let objetoParseado = JSON.parse(jsonString);
console.log(`Objeto parseado:`, objetoParseado);
