console.log('-----------------------------------------------------------');

function esPar(num) {
    let par = parseInt (num/2);
    let impar = parseFloat (num/2);

    if (par == impar ){
        console.log('el ' +num+ ' es PAR');
    } else {
        console.log('el ' +num+ ' es IMPAR');
    }
}

for (let i = 1; i<= 10; i++) {
        esPar (i);
}

console.log('-----------------------------------------------------------');

for (let y = 90; y<=100; y++) {
    if ((y%2) == 0) {
        console.log('el ' +y+ ' es PAR');
    } else {
        console.log('el ' +y+ ' es IMPAR');
    }
}

console.log('----------------------------1-------------------------------');

/* Escribe una función llamada imprimirNumeros que tome un número como parámetro e imprima
 todos los números desde 1 hasta ese número utilizando un ciclo for. */
 function imprimirNumeros (numero) {
    for (let x = 1; x <= numero; x++){
        console.log('el numero es: '+x);
    }
 }
 imprimirNumeros(7);

 console.log('----------------------------2-------------------------------');

/*  Crea una función llamada contarCaracteres que tome una cadena de texto y un carácter como parámetros, 
y devuelva la cantidad de veces que el carácter aparece en la cadena. Utiliza un ciclo for para recorrer la cadena. */

function contarCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

let cadena = "Hola mundo";
let caracter = "o";
console.log(`El carácter "${caracter}" aparece ${contarCaracteres(cadena, caracter)} veces en la cadena "${cadena}".`);

console.log('----------------------------3-------------------------------');

/* Implementa una función llamada duplicarCaracteres que tome una cadena de texto como parámetro y devuelva una nueva
 cadena donde cada carácter se duplique. Utiliza un ciclo for para iterar sobre la cadena original. */

 function duplicarCaracteres (texto) {
    let textoNuevo = ""
    for (let a = 0; a < texto.length; a++){
        textoNuevo += texto[a]+texto[a];
    }
    return textoNuevo;
 }
let texto = "Hola mundo";
let textoNuevo = duplicarCaracteres(texto);
console.log(textoNuevo);

console.log('----------------------------4-------------------------------');

/* Desarrolla una función llamada invertirNumero que tome un número como parámetro
 y devuelva el número invertido. Por ejemplo, si se pasa el número 123, la función
 debería devolver 321. Utiliza un ciclo for para invertir el número. */

function invertirNum (nume) {
   let numeroString = nume.toString();
   let numeroInvertido = "";
   for (let n = numeroString.length -1 ; n >= 0 ; n--) {
        numeroInvertido += numeroString[n];
   }
   return numeroInvertido
}
console.log(invertirNum(123));

console.log('----------------------------5-------------------------------');
/* Escribe una función llamada calcularPotencia que tome dos números como 
parámetros, la base y el exponente, y devuelva el resultado de elevar la base al
 exponente. Utiliza un ciclo for para realizar la multiplicación. */
function calcularPotencia (base, exponente) {
    let potencia= base;
    for (let p = 1; p <= exponente -1; p++){
        potencia *= base;
    }
    return potencia;
}
console.log(calcularPotencia(4,8));

console.log('----------------------------6-------------------------------');
/* Crea una función llamada contarDigitos que tome un número como parámetro y 
devuelva la cantidad de dígitos que tiene. Utiliza un ciclo for para contar los dígitos. */

function contarDigito(nu) {
    let nString = nu.toString();
    let cont = 0;
        for(let x = 0; x<nString.length; x++){
            cont ++;
        }
        return cont;
}
let nu=123456; 
console.log(`el numero ingresado: ${nu} contiene ${contarDigito(nu)} digitos`);

console.log('----------------------------7-------------------------------');

/* Implementa una función llamada reemplazarVocales que tome una cadena de texto como 
parámetro y devuelva una nueva cadena donde todas las vocales se reemplacen por un 
guion bajo (_). Utiliza un ciclo for para iterar sobre la cadena original. */

function reemplazarVocales (textoVocales) {
    let nuevoTexto = "";
    for (let v = 0;  v < textoVocales.length - 1; v++){
        let carac = textoVocales[v];
        if( 'aeiouAEIOU'.includes(carac)) {
            nuevoTexto += '_';
        } else {
            nuevoTexto += carac;
        }
    }
    return nuevoTexto;
}

let original = "Un murcielago color gris";
let laNueva = reemplazarVocales(original);
console.log("Cadena reemplazada:", laNueva);

console.log('----------------------------8-------------------------------');
/* Desarrolla una función llamada calcularFactorial que tome un número como parámetro 
y devuelva su factorial. Utiliza un ciclo for para realizar la multiplicación iterativa. */

function calcularFactorial (parametro) {
    let factorial = 1 ;
    for (let f = 1; f <= parametro; f++){
        factorial *= f;
    }
    return factorial;
}
console.log(calcularFactorial(5));

console.log('----------------------------9-------------------------------');
/* Escribe una función llamada imprimirPares que tome un número como parámetro e 
imprima todos los números pares desde 1 hasta ese número utilizando un ciclo for. */

function imprimePares (numerito) {
    for (let b = 1; b <= numerito; b++){
        if (([b] % 2) == 0) {
            console.log([b]);
        }
    }
}
console.log(imprimePares(10));

console.log('----------------------------10-------------------------------');
/* -Crea una función llamada contarLetrasMayusculas que tome una cadena de texto
como parámetro y devuelva la cantidad de letras mayúsculas que contiene. Utiliza
 un ciclo for para recorrer la cadena y un condicional if para verificar si cada 
 carácter es una letra mayúscula. */

function contarLetrasMayusculas (oracion) {
    let contadorcito = 0;
    for (let l = 0; l < oracion.length; l++) {
        let letrita = oracion[l];
        if (letrita >= 'A' && letrita <= 'Z' ) {
        contadorcito++;
        }
    }
    return contadorcito;
}
console.log(contarLetrasMayusculas('Hola MundIal De ArgenTinaS'));