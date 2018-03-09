export abstract class Animal {
    //Al declarar el private, public, protected lo hace accesible según su nivel de protección en toda la clase sin
    //necesidad de declarar atributo y asignarlo en el constructor
    constructor(protected _nombre: string) {
    }

    /*     Forma primitiva de hacer getter y setter en las clases
        getNombre(): string {
            return this._nombre;
        }
    
        setNombre(nombre: string): void {
            this._nombre = nombre;
        } */

    //Forma propia y más útil de TypeScript
    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        if(nombre.length <= 3){
            console.log('No se permiten nombres menor a 3 caracteres.');
            return;
        }
        this._nombre = nombre;
    }

    abstract estaExtinto(): void;
}