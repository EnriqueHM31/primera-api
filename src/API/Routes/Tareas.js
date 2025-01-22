import express from 'express'
import * as ServicesTareas from '../Services/TareasService.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.send(ServicesTareas.getTareasSinPrioridad())
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const tarea = ServicesTareas.getTareasID(Number(id)) // Asumiendo que esta función busca la tarea por ID

    if (!tarea) {
        return res.status(404).send([{ error: 'Tarea no encontrada' }])
    }

    res.send(tarea)
})

router.post('/', (req, res) => {
    if (req.body === undefined) {
        return res.status(400).send({ error: 'No se recibieron datos' })
    }

    const { nombre, descripcion, prioridad, fecha } = req.body

    if (!nombre || !descripcion || !prioridad || !fecha) {
        return res.status(400).send('Todos los campos son obligatorios')
    }

    const tarea = ServicesTareas.postTareas({
        nombre,
        descripcion,
        prioridad,
        fecha,
    })

    res.json(tarea)
})

export default router
