import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Reporte = db.define('reportes', {
    placa:{
        type:DataTypes.STRING
    },
    fecha:{
        type:DataTypes.STRING
    },
    hora:{
        type:DataTypes.STRING
    },
    restringido:{
        
        type: DataTypes.BOOLEAN
    }
})


export default Reporte