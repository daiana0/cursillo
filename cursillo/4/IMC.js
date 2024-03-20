let peso = parseFloat(prompt('ingrese el peso en kg'));
let altura = parseFloat(prompt('ingrese la altura en m'));
let imc = peso / (altura * altura);
alert('el IMC de la persona es: '+imc);