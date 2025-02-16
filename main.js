let nota = Math.floor(Math.random() * 101);
console.log(nota);


if (nota >= 90) {
    console.log("Excelente");
} else if(nota >= 75 || nota >= 89) {
    console.log("bien");
} else if(nota >= 60 || nota >= 74) {
    console.log("Suficiente");
} else {
    console.log("No aprobado");
}