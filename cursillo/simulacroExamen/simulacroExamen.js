function condicionAlunmo(nota1, nota2, nota3) {
    let promedio = ((nota1+nota2+nota3)/3);
    let nota = promedio;

  if (nota >= 1 && nota <= 4) {
    console.log("LIBRE");
  } else if (nota > 4 && nota < 7) {
    console.log("LIBRE-REGULAR");
  } else if (nota > 6 && nota <= 10) {
    console.log("PROMOCIONADO");
  } else  {
  console.log("ERROR, Inserte una nota del 1 al 10");
  }
}

condicionAlunmo(0,0,0);
