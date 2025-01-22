import express from 'express'
import router from './Routes/Tareas.js'

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('APRENDIENDO LAS BASES DE UNA API')
})

app.use('/api/tareas', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
