let primerosPasos: String;
primerosPasos = 'Primeros pasos con TypeScript!!';
console.log('Angular -> ', primerosPasos);

let declararBoolean = true;     //Una forma de declarar boolean
let otraFormaBoolean: boolean;   //Otra forma de declarar boolean

let declararString: string = 'Aprendiendo Angular';      //Declarar String
let multilineaString: string = `Así se puede declarar un String
                            que contenga multilineas sin necesidad de
                            utilizar concatenación, conserva todos
                            los espacios que se le pongan.`;

let concatString: string = `En este momento estoy ${declararString}`;    //Forma más óptima de concatenar String

console.log('Cadena normal -> ', declararString);
console.log('Cadena con multilínea -> ', multilineaString);
console.log('Cadena con concatenación -> ', concatString);

//  TypeScript Enums
enum DiasSemana { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo };

console.log('\nEl dia de hoy es ', DiasSemana[DiasSemana.Jueves]);

// NO ES RECOMENDADO
let cualquierTipo: any;                          //Acepta cualquier tipo de variable
cualquierTipo = "Cualquiera";
cualquierTipo = 5;
cualquierTipo = true;

// json
const ejemploJson: any = {
    Nombre: 'Wilmar',
    Edad: 21
};
console.log('Ejemplo JSON -> ', ejemploJson)

//Se puede mutar el objeto así
ejemploJson.Nombre = 'Santiago';
ejemploJson.Edad = 25;
console.log('Ejemplo mutando JSON -> ', ejemploJson)

let respuesta = HiWorld();
console.log('\nEjemplo de función -> ', respuesta);

let ejemploArray: number[] = [1, 2, 3, 4];
let otroArray: Array<string> = ['Otra', 'forma', 'de', 'declarar', 'arreglos'];

console.log('Arreglo forma 1 -> ', ejemploArray);
console.log('Arreglo forma 2 -> ', otroArray);

LikeThis('Aprendiendo TypeSript');

function HiWorld(): string {                                 //Función
    return '¡¡ Hi World !!';
}

function LikeThis(message: string): void {                     //Procedimiento con parámetros
    console.log('Ejemplo procedimiento -> ', message);
}