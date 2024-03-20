/* Condicionales: */
/* 51 */
const edad = 28;
if (edad >= 18) {
  console.log("La persona es mayor de edad");
}
/* 52 */
const puntuacion = 5;
if (puntuacion >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
/* 53 */
let diaSemana = "Martes";

switch (diaSemana) {
  case "Lunes":
    console.log("Dia laboral");
    break;
  case "Martes":
    console.log("Dia laboral");
    break;
  case "Miercoles":
    console.log("Dia laboral");
    break;
  case "Jueves":
    console.log("Dia laboral");
    break;
  case "Viernes":
    console.log("Dia laboral");
    break;
  case  "Sabado":
    console.log("Fin de semana");
    break;
  case "Domingo":
    console.log("Fin de semana");
    break;
  default:
    console.log("Ingrese un dia de la semana correcto");
}
/* 54 */
const numero1 = 9;
const numero2 = 19;
const mayor = numero1 > numero2;
if (numero1 > numero2 ) {
    console.log(`el numero más grande es: ${numero1}`);
} else {
    console.log(`el numero más grande es: ${numero2}`);
}
/* 55 */
let color = 'Verde';
if (color == 'Rojo') {
     console.log('el color es Rojo');
} else if (color == 'Azul') {
    console.log('el color es Azul'); 
} else if (color == 'Verde') {
    console.log('el color es Verde');
} else {
    console.log('el color ingresado es otro');
}
/* 56 */
const calificacion = 100;
if (calificacion === 100) {
    console.log('EXCELENTE');
} else if (calificacion < 100 && calificacion >= 60) {
    console.log('APROBADO');
} else {
    console.log('DESAPROBADO')
}
/* 57 */
const numero = -3;
if (numero == 0) {
  console.log("el numero es CERO");
} else if (numero > 0) {
  console.log("el numero es POSITIVO");
} else console.log("el numero es NEGATIVO");
/* 58 */
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(5));
/* 59 */
const hora = 19;
if (hora >= 0 && hora < 12) {
    console.log('BUENOS DIAS');
} else if (hora >= 12 && hora <18 ) {
    console.log('BUENAS TARDES');
} else {
    console.log('BUENAS NOCHES');
}
/* 60 */
const lado1 = 3;
const lado2 = 5;
const lado3 = 3;
if ((lado1 === lado2) && (lado2&&lado3)) {
    console.log('el triangulo es EQUILATERO');
} else if ((lado1===lado2) || (lado2===lado3) || (lado1===lado3)) {
    console.log('el triangulo es ISOSCELES');
} else {
    console.log('el triangulo es ESCALENO');
}