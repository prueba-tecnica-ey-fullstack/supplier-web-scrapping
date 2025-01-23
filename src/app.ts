import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cron from 'node-cron'

import routes from './routes/scrapping.routes'
import { verifyApiKey } from './middlewares/auth.middleware'
import { executeScrapping } from './tasks/scrapping.task'

const BASE_API_URL = '/api'
const app = express()

// TODO: add explicit origin list
app.use(cors())
app.use(morgan('dev'))

app.use(`${BASE_API_URL}`, verifyApiKey, routes)

cron.schedule('*/15 * * * *', executeScrapping)

export default app
