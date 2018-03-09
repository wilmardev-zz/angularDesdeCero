import { Animal } from "./ExamplePOO/model/animal";
import { Tigre } from "./ExamplePOO/model/tigre";

let tigre: Animal;
tigre = new Tigre('Zeus','Vengala');
console.log('El animal es -> ', tigre);

tigre.estaExtinto();
// Casting
(tigre as Tigre).principalCaracteristica();
tigre.nombre = 'He';
//Otra forma de casting
(<Tigre>tigre).estaExtinto();