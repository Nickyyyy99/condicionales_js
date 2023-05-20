"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

// const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

if (texto1.localeCompare(texto2) < 0 ) {
 alert(texto1 + " va primero en el diccionario que " + texto2); 
} else if (texto1.localeCompare(texto2) > 0) {
alert(texto1 + " va despues en el diccionario que " + texto2);
} else { 
alert(texto1 + " es igual a " + texto2); 
}
const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda

// if (texto1 == copiaTexto1) {
//     console.log("El texto1 es igual al copiaTexto1");
// } else { 
//     console.log("El texto1 no es igual al copiaTexto1");
// }

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
// if (copiaTexto1 === texto1) {
//     console.log(copiaTexto1 + " es distinto a " + texto1);
// }
