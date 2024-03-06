"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const usuario_1 = __importDefault(require("./usuario"));
const Experiencia = connections_1.default.define('Experiencia', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuario_1.default,
            key: 'id'
        }
    },
    empresa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha_inicio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha_salida: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
Experiencia.sync();
exports.default = Experiencia;
//# sourceMappingURL=experiencia.js.map