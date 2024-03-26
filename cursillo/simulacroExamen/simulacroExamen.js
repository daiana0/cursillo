function condicionAlunmo (nota) {
    if (nota <= 4){
        console.log('LIBRE');
    } else if (nota > 4 && nota < 7) {
        console.log('LIBRE-REGULAR');
    } else {
        console.log('PROMOCIONADO');
    }
}

condicionAlunmo(7);