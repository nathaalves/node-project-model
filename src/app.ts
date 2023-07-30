import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { router } from './routes/router'
import { options } from './config/configCors'
import cookieParser from 'cookie-parser'
import { errorHandler } from './middlewares/errorHandler'
import { validateOrigin } from './middlewares/validateOrigin'

const app = express()

app.use(validateOrigin)

app.use(cors(options))
app.use(express.json())
app.use(cookieParser())

app.use(router)

app.use(errorHandler)

export { app }
