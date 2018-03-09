"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Tigre = /** @class */ (function (_super) {
    __extends(Tigre, _super);
    function Tigre(nombre, raza) {
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza;
        return _this;
    }
    Tigre.prototype.estaExtinto = function () {
        console.log(this._nombre + " no est\u00E1 extinto");
    };
    Tigre.prototype.principalCaracteristica = function () {
        console.log(this._nombre + " es cazador por excelencia");
    };
    return Tigre;
}(animal_1.Animal));
exports.Tigre = Tigre;
