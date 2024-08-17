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

const consultarPlaca = async(req, res) => {
    const { fecha, placa, hora } = req.body;

    // Validaciones previas
    if (!fecha || !placa || !hora) {
        return res.status(400).json({ msg: "Todos los campos (fecha, placa, hora) son obligatorios" });
    }

    const dia = obtenerDiaDeLaSemana(fecha);
    const digito = obtenerDigito(placa);

    // Validar si el día es válido antes de llamar a restriccion
    if (!dia || !restricciones[dia]) {
        return res.status(400).json({ msg: "El día proporcionado no es válido o no está sujeto a restricciones" });
    }

    const restringido = restriccion(dia, digito, hora);

    try {
        const reporteGenerado = await Reporte.create({ fecha, placa, hora, restringido });
        res.json({ reporteGenerado });
    } catch (error) {
        return res.status(400).json({ msg: "Ocurrió un error al registrar el reporte" });
    }
};


export{
    verReportes,
    consultarPlaca
}