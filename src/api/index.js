import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import logger from '../lib/logger.js'
import v1 from './v1/router.js'

const ENV = process.env.NODE_ENV || 'local'
const PORT = process.env.PORT || 8080

config({ path: path.resolve(`./env/${ENV}.env`) })

const app = express()

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('combined'))

app.get('/health', (req, res) => {
  res.send("I'm Alive")
})

app.use('/api/v1', ...v1)

app.listen(PORT, () => {
  logger.info(`Server running at localhost:${PORT}`)

  mongoose.connect('mongodb://localhost:2017/react_express_monolit')
})
