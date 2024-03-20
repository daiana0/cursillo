let stockActual = 0;
const capacidadTotal = 5000;
const cargaInicial = 3000;

stockActual += cargaInicial;

// Descarga de maíz del silo
const cantidadDescarga = 500;
if (stockActual < cantidadDescarga) {
  console.log("No hay suficiente maíz en el silo para descargar esa cantidad.");
} else {
  console.log(`Se descargaron ${cantidadDescarga} toneladas de maíz del silo.`);
  stockActual -= cantidadDescarga;
}

// Mostrar stock actualizado
console.log(`El stock actual de maíz en el silo es de ${stockActual} toneladas.`);
Math.PI