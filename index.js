import express from "express"
import dotenv from 'dotenv'
import reporteRoutes from './routes/reporteRoute.js'
import cors from 'cors'
import db from "./config/db.js"
dotenv.config()


try {
    await db.authenticate()
    await db.sync()

    console.log('Conexion a db correcta')
} catch (error) {
    
    console.log(error)
}

const dominiosPermitidos = [process.env.FRONTEND_URL]

const corsOptions = {
    origin : function ( origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1) {
            callback(null, true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}
const app = express()
app.use(cors(corsOptions))

app.use(express.json())


app.use('/api/reporte', reporteRoutes)

const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
    console.log('Servidor funcionando',PORT)
})
