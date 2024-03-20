/* 81 */
function saludar () {
    console.log('¡Hola, mundo!')
}
saludar();
/* 82 */
function sumar (num1, num2) {
    console.log(num1 + num2);
}
sumar(5,8);
/* 83 */
function esPar (num) {
    if ((num % 2) == 0) {
        console.log(`El numero ${num} es PAR`);
    } else {
        console.log(`El numero ${num} es IMPAR`)
    }
}
esPar(5);
/* 84 */
function calcularPromedio (notas) {
    let suma=0;
    for (let i = 0; i < notas.length; i++) {
        suma+= notas[i];
    }
    let promedio = suma/notas.length;
    return promedio;
}
let notas = [8, 9, 10, 10, 3];
promedio = calcularPromedio(notas);
console.log('El promedio es: ' +promedio);
/* 85 */
function revertirTexto (cadena) {
    let textoInvertido = ' ';
    for (let a = (cadena.length - 1); a >= 0; a--) {
        textoInvertido += cadena[a];
    }
    return textoInvertido;
}
console.log(revertirTexto('LEEEEEEBAM aloH'));



