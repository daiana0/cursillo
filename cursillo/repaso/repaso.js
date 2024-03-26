console.log("-------------------------------41-------------------------------");
let nombre = "Daiana";
console.log(nombre);

console.log("-------------------------------42-------------------------------");
let edad = 29;
console.log(`soy daiana y tengo ${edad} años`);

console.log("-------------------------------43-------------------------------");
let esEstudiante = false;
if (esEstudiante == true) {
  console.log("es estudiante");
} else {
  console.log("No es estudiante");
}

console.log("-------------------------------44-------------------------------");
let fruta = "sandia";
console.log(`mi fruta favorita es ${fruta}`);

console.log("-------------------------------45-------------------------------");
let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let producto = numero1 * numero2;
let division = numero1 / numero2;

console.log(
  `la suma es ${suma}, la resta es ${resta}, el producto es ${producto} y la division entre los dos numero es ${division}`
);

console.log("-------------------------------46-------------------------------");
let celsius = 36;
let fahrenheit = celsius * (9 / 5) + 32;
console.log(
  `la temperatura de ${celsius}°C en grados Fahrenheit es: ${fahrenheit}°F`
);

console.log("-------------------------------47-------------------------------");
let precioProducto = 17.5;
let cantComprada = 5;
let total = precioProducto * cantComprada;
console.log("el total a pagar sera: $" + total);

console.log("-------------------------------48-------------------------------");
let radio = 5.3;
let area = Math.PI * (radio * radio);
console.log("el area del circulo es: " + area);

console.log("-------------------------------49-------------------------------");
let num1 = 33;
let num2 = 5;
if (num1 > num2) {
  console.log("true");
} else {
  console.log("false");
}

console.log("-------------------------------50-------------------------------");
let cadena1 = "Hola ";
let cadena2 = "Mundo";
console.log(cadena1 + cadena2);

console.log("-------------------------------51-------------------------------");
const años = 1;
if (años >= 18) {
  console.log("la persona es mayor de edad");
} else {
  console.log("la persona es menor de edad");
}

console.log("-------------------------------52-------------------------------");
let puntuacion = 85;
if (puntuacion >= 60) {
  console.log("esta aprobado");
} else {
  console.log("esta desaprobado");
}

console.log("-------------------------------43-------------------------------");
const diaSemana = "domingo";
switch (diaSemana) {
  case "lunes":
    console.log(diaSemana + " es un dia de semana");
    break;
  case "martes":
    console.log(diaSemana + " es un dia de semana");
    break;
  case "miercoles":
    console.log(diaSemana + " es un dia de semana");
    break;
  case "jueves":
    console.log(diaSemana + " es un dia de semana");
    break;
  case "viernes":
    console.log(diaSemana + " es un dia de semana");
    break;
  case "sabado":
    console.log(diaSemana + " es un dia de Fin de semana");
    break;

  default:
    console.log(diaSemana + " es un dia de Fin de semana");
    break;
}

console.log("-------------------------------54-------------------------------");
let nume1 = 7;
let nume2 = 9;
if (nume1 > nume2) {
    console.log('el numero ' +nume1 + ' es mayor que el numero ' +nume2);
} else if (nume1 < nume2) { 
    console.log('el numero ' +nume2 + ' es mayor que el numero ' +nume1);
} else {
    console.log('el numero ' +nume1 + ' es igual al numero ' +nume2);
}

console.log("-------------------------------55-------------------------------");
let color = 'amarillo';
if (color == 'rojo') {
    console.log('Ha ingresado el color ROJO');
} else if (color == 'azul') {
    console.log('Ha ingreado el colo AZUL');
} else if (color == 'verde') {
    console.log('Ha ingresado el color VERDE');
} else {
    console.log('Ha ingresado un colo que no pertenece a los colores R-A-V');
}

console.log("-------------------------------56-------------------------------");
const calific = 60;
if ((calific >= 60) && (calific<100)) {
    console.log('el alumno esta aprobado');
} else if (calific == 100){
    console.log('el alumno esta Excelente');
} else {
    console.log('el alumno esta reprobado');
}

console.log("-------------------------------57-------------------------------");
let numer = -1;
if (numer >=1) {
    console.log('el ' +numer+ ' es positivo');
} else if (numer == 0) {
    console.log('el numero ' +numer+ ' es cero');
}else {
    console.log ('el numero es negativo');
}

console.log("-------------------------------58-------------------------------");
console.log('la funcion es par?');
function esPar (numeros) {
    if ((numeros % 2) == 0) {
        console.log(true) 
       } else {
        console.log(false)
       }
}
esPar(4);


console.log("-------------------------------59-------------------------------");
let hora = 5;
if ((hora >= 6) && (hora <= 12)) {
    console.log('BUENOS DIAS');
} else if ((hora >= 13) && (hora <= 19)) {
    console.log('BUENAS TARDES');
} else {
    console.log('BUENAS NOCHES');
}

console.log("-------------------------------60-------------------------------");
let lado1 = 8;
let lado2 = 8;
let lado3 = 8;

if ((lado1 != lado2) && (lado2 != lado3)) {
    console.log('el triangulo es ESCALENO');
} else if ((lado1 == lado2) && (lado1 !== lado3)) {
    console.log('el triangulo es ISOSCELES');
} else {
    console.log('el trianfulo es EQUILATERO');
}

