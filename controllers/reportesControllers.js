import obtenerDiaDeLaSemana from "../helpers/obtenerDia.js"
import obtenerDigito from "../helpers/obtenerDigito.js"
import restriccion from "../helpers/validarCirculacion.js"
import Reporte from "../models/Reporte.js"
const verReportes = async(req, res) => {
    try {
        const reportes = await Reporte.findAll()
        res.json(reportes)
    } catch (error) {
        return res.status(400).json({msg:"Ocurrio un error en la busqueda"})
    }
}

const consultarPlaca = async(req,res) => {
    const{fecha, placa, hora} = req.body

    
    const dia = obtenerDiaDeLaSemana(fecha)
    const digito = obtenerDigito(placa)

    const restringido = restriccion(dia, digito, hora)
 

    try {
        const reporteGenerado = await Reporte.create({fecha, placa, hora, restringido})
        res.json({reporteGenerado})
        
    } catch (error) {
        return res.status(400).json({msg:"Ocurrio un error al registrar"})
    }
}


export{
    verReportes,
    consultarPlaca
}