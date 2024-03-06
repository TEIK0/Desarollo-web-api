import { DataTypes } from "sequelize";
import db from "../db/connections";
import Usuario from "./usuario";

const Experiencia = db.define('Experiencia', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
          }
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_inicio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_salida: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
})


Experiencia.sync();

export default Experiencia;