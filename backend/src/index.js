import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from '../src/routes/index'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

routes(app)

app.listen(process.env.PORT ? Number(process.env.PORT) : 3001)
console.log("Servidor Iniciado")
