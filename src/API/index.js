import express from 'express'
import router from './Routes/Tareas.js'

const app = express()

const PORT = 3000

app.get('/', (_req, res) => {
    res.send('Estoy usando una api verdad funciona ya verdad')
})

app.use('/api/tareas', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
