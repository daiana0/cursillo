/* 86 */
let contador = 0;
function incrementarContador () {
    contador++;
    console.log('el contador en esta vuelta es:' +contador);
    }
incrementarContador();
incrementarContador();
/* 87 */
function calcularDescuento (precio, descuento) {
    descuento = precio * (descuento/100);
    let precioFinal = precio-descuento;
    return precioFinal
}
console.log(calcularDescuento(150, 20));
/* 88 */
function caclularFactorial (entero) {
let factorial = 1;
for (let i = entero; i > 0; i--) {
    factorial = factorial * [i];
}
console.log(factorial);
}
caclularFactorial(7);
/* 89 */
let nombre = 'Daiana';
function saludarPersonalizado () {
    console.log('Hola ' +nombre+ ' como estas?');
}
saludarPersonalizado();
/* 90 */
/* function crearLista (frutas) {
    console.log(frutas.join('-'))
}
crearLista(frutas['manzana', 'naranja', 'banana', 'sandia', 'melon']);

console.log(colores.join('-')); */