// Declarar las matrices
var matriz_bruto = [];
var matriz_liquido = [];

// Solicitar el número de empleados de la empresa
var num_empleados = parseInt(prompt("Ingresa el número de empleados de la empresa: "));

// Recorrer el número de empleados
for (var i = 0; i < num_empleados; i++) {
    // Solicitar el nombre y el sueldo bruto del empleado
    var nombre = prompt("Ingresa el nombre del empleado: ");
    var sueldo_bruto = parseFloat(prompt("Ingresa el sueldo bruto del empleado: "));

    // Calcular el sueldo líquido
    var sueldo_liquido = sueldo_bruto * (1 - 0.1 - 0.07);

    // Agregar el empleado a cada matriz
    matriz_bruto.push([nombre, sueldo_bruto]);
    matriz_liquido.push([nombre, sueldo_liquido]);
}

// Imprimir las matrices
console.log("Matriz sueldo bruto:", matriz_bruto);
console.log("Matriz sueldo líquido:", matriz_liquido);
