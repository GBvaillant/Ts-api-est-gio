import express from 'express'
import cors from 'cors'
import { router } from './routes/suppRouter'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ msg: 'heloo !!' })
})

router(app)

app.listen(PORT, () => {
    console.log('server rodando 🚀')
})
