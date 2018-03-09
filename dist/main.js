"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tigre_1 = require("./ExamplePOO/model/tigre");
var tigre;
tigre = new tigre_1.Tigre('Zeus', 'Vengala');
console.log('El animal es -> ', tigre);
tigre.estaExtinto();
// Casting
tigre.principalCaracteristica();
tigre.nombre = 'He';
//Otra forma de casting
tigre.estaExtinto();
