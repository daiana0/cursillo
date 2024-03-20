/* REHACER */
/* 61 */
function esPrimo (numero) {
    if (numero <=1) {
        return false;
        /* porque el numero uno no tiene otro divisor mas q el uno */
    }
    for (let i = 2; i<= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(esPrimo(5));
/* 62 */
function invierteCadena (cadena) {
    let cadenaIvertida= '';
    for(let e = (cadena.length - 1 ); e >= 0; e--){
        cadenaIvertida += cadena[e];
    }
    return cadenaIvertida;
}
console.log(invierteCadena('Hola Mundo'));
/* 63 */
function calcularFactorial (entero) {
    let factorial = 1;
    for (let n = 1; n <= entero ; n++) {
        factorial *= n;
    }
    console.log(factorial);
}
calcularFactorial(5);
/* 64 */
function contarPalabras (texto) {
    let contador = 0;
    let esPalabra = false;
    for (l = 0; l <= texto.length; l++) {
        if ((l !== ' ')&&(esPalabra == false)) {
            contador += 1;
            esPalabra= true;
        } else {
            esPalabra=false;
        }
    }    
    return contador;
}
console.log(contarPalabras('hola mi vida, hola muñeca, hola mi gran amor'));
/* 65 */
function esPangrama (oracion) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    oracion = oracion.toLowerCase();
    let letrasEncontradas = {};
    for (u = 0; u < oracion.length; u++){
        let caracter = oracion[u]
        if (alfabeto.includes(caracter)) {
            letrasEncontradas[caracter] = true;
        }
    }
    return Object.keys(letrasEncontradas).length === 26;
}
console.log(esPangrama("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"));
/* 66 */
function sumaDigitos (num) {
    let suma = 0;
    while (num > 0) {
        suma += num % 10;
        num = Math.floor(num/10);
    }
    return suma;
}
console.log(sumaDigitos(123));
/* 67 */
function calcularPotencia (base, exponente) {
    return Math.pow(base, exponente);
}
console.log(calcularPotencia(2,4));
/* 68 */
/* 69 */
function ordenarArray (numbers) {
    return numbers.sort(function(a, b){
        return a - b;
    });
}
console.log(ordenarArray([5, 6, 7, 2, 21, 1, 9, 33]));
/* 70 */
function calcularFibonacci (nume) {
    if (nume <= 1) {
        return nume;
    } else {
        let aa = 0;
        let bb = 1;
        let temp;

        for (let ñ = 2; ñ <= nume; ñ++) {
            temp = aa + bb;
            aa = bb;
            bb = temp;
        }
        return bb;
    }
}
console.log(calcularFibonacci(0)); 
console.log(calcularFibonacci(1)); 
console.log(calcularFibonacci(2)); 
console.log(calcularFibonacci(5)); 
console.log(calcularFibonacci(10)); 

