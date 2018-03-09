"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    //Al declarar el private, public, protected lo hace accesible según su nivel de protección en toda la clase sin
    //necesidad de declarar atributo y asignarlo en el constructor
    function Animal(_nombre) {
        this._nombre = _nombre;
    }
    Object.defineProperty(Animal.prototype, "nombre", {
        /*     Forma primitiva de hacer getter y setter en las clases
            getNombre(): string {
                return this._nombre;
            }
        
            setNombre(nombre: string): void {
                this._nombre = nombre;
            } */
        //Forma propia y más útil de TypeScript
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.log('No se permiten nombres menor a 3 caracteres.');
                return;
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
