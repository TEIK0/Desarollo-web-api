"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Usuario = connections_1.default.define('Usuario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    pasword: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nacionalidad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nacimiento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
Usuario.sync();
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map