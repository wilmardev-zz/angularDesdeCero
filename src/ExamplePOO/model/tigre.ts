import { Animal } from "./animal";

export class Tigre extends Animal {   //Export se usa para que esta clase pueda ser usada desde otro contexto
    constructor(nombre: string, private raza: string) {
        super(nombre);
    }

    estaExtinto():void{
        console.log(`${this._nombre} no está extinto`);
    }

    principalCaracteristica():void{
        console.log(`${this._nombre} es cazador por excelencia`);
    }
}