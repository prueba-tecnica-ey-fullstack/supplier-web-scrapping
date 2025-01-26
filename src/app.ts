import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cron from 'node-cron'
import rateLimit from 'express-rate-limit';

import routes from './routes/scrapping.routes'
import { verifyApiKey } from './middlewares/auth.middleware'
import { executeScrapping } from './tasks/scrapping.task'
import { envs } from './config/envs';

const BASE_API_URL = '/api'
const app = express()

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: 'Demasiadas solicitudes desde esta IP. Por favor, intenta de nuevo en unos minutos',
});

app.use(cors())
app.use(limiter)
app.use(morgan('dev'))

app.use(`${BASE_API_URL}`, verifyApiKey, routes)

cron.schedule(`*/${envs.scrappingFrequencyMinutes} * * * *`, executeScrapping)

export default app
