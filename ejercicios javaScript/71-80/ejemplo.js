/* 71 */
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
/* 72 */
while (i <= 10) {
    console.log(i);
    i++;
}
/* 73 */
let frutas = ['manzana', 'frutilla', 'banana', 'sandia'];
for (elemeto of frutas) {
}
console.log(frutas);
/* 74 */
let contador = 1;
do {
    console.log(contador);
    contador++;
} while (contador <=5)
/* 75 */
for (let a = 1; a<=20; a++) {
    if ((a%2)==0) {
        console.log(`el numero ${a} es Par`);
    } else {
        console.log(`el numero ${a} es Impar`);
    }
}
/* 76 */
let arreglo1 = ['hola', 'mundo', 'como', 'estas?'];
for (arrelo1 = 0; arreglo1 <= arreglo1.length; arreglo1++) { 
}
console.log(arreglo1.join(' '));
/* 77 */
const mercaderia = {
    nombre: 'arroz',
    peso: '1kg',
    precio: '$750',
};
for (propiedad in mercaderia) {
    console.log(mercaderia);
}
/* 78 */
let numAleatorio;
while (numAleatorio != 7) {
    numAleatorio = Math.floor(Math.random()*11);
    console.log(numAleatorio);
    }
/* 79 */
function tablas (producto) {
    for (let numer = 1; numer <= 10; numer++){
        let resultado= numer * producto;
        console.log(resultado);
    }
}
(tablas(5));
/* 80 */
const numeros = [5, 8, 6, 33, 1, 7, 9, 2];
let numMayor = numeros[0];
for (let e = 1; e < numeros.length; e++) {
   if (numeros[e] > numMayor) {
    numMayor= numeros[e];
   }

}
console.log(numMayor);