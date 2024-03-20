let num1 = parseFloat(prompt('ingrese un numero'));
let num2 = parseFloat(prompt('ingrese un segundo numero'));
let num3 = parseFloat(prompt('ingrese un tercer numero'));

if (num1>num2 && num1>num3) {
    alert('el primer numero ingresado es el mayor');
} else if (num2>num1 && num2>num3) {
    alert('el segundo numero ingresado es el mayor');
} else alert('el ultimo numero ingresado es el mayor');

