import { DataTypes } from "sequelize";
import db from "../db/connections";
import Usuario from "./usuario";

const Habilidad_Blanda = db.define('Habilidad_Blanda', {
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
    habilidad: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})


Habilidad_Blanda.sync();

export default Habilidad_Blanda;