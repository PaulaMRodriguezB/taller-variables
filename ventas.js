let ventas = [120000, 95000, 150000, 80000, 200000];

let suma = 0;

for (let i = 0; i < ventas.length; i++) {
    suma = suma + ventas[i];
}

let promedio = suma / ventas.length;

console.log("La suma total de las ventas es: " + suma);
console.log("El promedio de ventas es: " + promedio);