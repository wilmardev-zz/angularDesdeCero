"use strict";
var primerosPasos;
primerosPasos = 'Primeros pasos con TypeScript!!';
console.log('Angular -> ', primerosPasos);
var declararBoolean = true; //Una forma de declarar boolean
var otraFormaBoolean; //Otra forma de declarar boolean
var declararString = 'Aprendiendo Angular'; //Declarar String
var multilineaString = "As\u00ED se puede declarar un String\n                            que contenga multilineas sin necesidad de\n                            utilizar concatenaci\u00F3n, conserva todos\n                            los espacios que se le pongan.";
var concatString = "En este momento estoy " + declararString; //Forma más óptima de concatenar String
console.log('Cadena normal -> ', declararString);
console.log('Cadena con multilínea -> ', multilineaString);
console.log('Cadena con concatenación -> ', concatString);
//  TypeScript Enums
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
;
console.log('\nEl dia de hoy es ', DiasSemana[DiasSemana.Jueves]);
// NO ES RECOMENDADO
var cualquierTipo; //Acepta cualquier tipo de variable
cualquierTipo = "Cualquiera";
cualquierTipo = 5;
cualquierTipo = true;
// json
var ejemploJson = {
    Nombre: 'Wilmar',
    Edad: 21
};
console.log('Ejemplo JSON -> ', ejemploJson);
//Se puede mutar el objeto así
ejemploJson.Nombre = 'Santiago';
ejemploJson.Edad = 25;
console.log('Ejemplo mutando JSON -> ', ejemploJson);
var respuesta = HiWorld();
console.log('\nEjemplo de función -> ', respuesta);
var ejemploArray = [1, 2, 3, 4];
var otroArray = ['Otra', 'forma', 'de', 'declarar', 'arreglos'];
console.log('Arreglo forma 1 -> ', ejemploArray);
console.log('Arreglo forma 2 -> ', otroArray);
LikeThis('Aprendiendo TypeSript');
function HiWorld() {
    return '¡¡ Hi World !!';
}
function LikeThis(message) {
    console.log('Ejemplo procedimiento -> ', message);
}
