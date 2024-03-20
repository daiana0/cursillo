let numAleatorio =  Math.floor(Math.random()*100);
let num;
do {
    num =prompt('ingresa un numero entre 1 y 100');
        if (numAleatorio > num) {
            prompt('el numero que buscas en mas grande');
        } else {
            if (numAleatorio < num) {
                prompt('el numero que buscas en mas chico');
            }
        }
    
} while (num == numAleatorio);
prompt('adivinaste! el numero es: ' +num);
