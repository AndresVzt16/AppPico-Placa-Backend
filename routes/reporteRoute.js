import express from "express"
import { consultarPlaca, verReportes } from "../controllers/reportesControllers.js"

const router = express.Router()


router.get('/',verReportes)
router.post('/consulta', consultarPlaca)


export default router
