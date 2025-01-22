import express from 'express'
import * as ServicesTareas from '../Services/TareasService.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.send(ServicesTareas.getTareasSinPrioridad())
})

router.post('/', (_, res) => {
    res.send('Hola posting')
})

export default router
