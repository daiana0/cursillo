function condicionAlunmo(nota1, nota2, nota3) {
    let promedio = ((nota1+nota2+nota3)/3);
    let nota = promedio;

  if (nota >= 1 && nota <= 4) {
    return "LIBRE";
  } else if (nota > 4 && nota < 7) {
    return "LIBRE-REGULAR";
  } else if (nota > 6 && nota <= 10) {
    return "PROMOCIONADO";
  } else  {
  return "ERROR, Inserte una nota del 1 al 10";
  }
}

console.log(condicionAlunmo(0,0,0));
