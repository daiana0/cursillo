function tipoFigura(cantidadLado, lado) {
  let perimetro = 0;
  if ((cantidadLado < 0)  || (cantidadLado == 2)) {
    console.log("ERROR, Ingrese un numero igual o mayor a cero");
} else if (cantidadLado == 0) {
    console.log("La figura es un Circulo");
    perimetro = (2*Math.PI*lado);
    console.log(`el Perímetro del circulo es: ${perimetro} metros`);
  } else if (cantidadLado == 3) {
    console.log("La figura es un Triángulo");
    perimetro = (cantidadLado*lado);
    console.log(`el Perímetro del Triángulo es: ${perimetro} metros`);
  } else if (cantidadLado == 4) {
    console.log("La figura es un Cuadrado");
    perimetro = (cantidadLado*lado);
    console.log(`el Perímetro del Cuadrado es: ${perimetro} metros`);
  } else if (cantidadLado == 5) {
    console.log("La figura es un Pentágono");
    perimetro = (cantidadLado*lado);
    console.log(`el Perímetro del Pentágono es: ${perimetro} metros`);
  } else if (cantidadLado == 6) {
    console.log("La figura es un Hexágono");
    perimetro = (cantidadLado*lado);
    console.log(`el Perímetro del Hexágono es: ${perimetro} metros`);
  } else  {
    console.log("La figura es un Polígono");
    perimetro = (cantidadLado*lado);
    console.log(`el Perímetro del Polígono es: ${perimetro} metros`);
}

}

tipoFigura(4,2);
