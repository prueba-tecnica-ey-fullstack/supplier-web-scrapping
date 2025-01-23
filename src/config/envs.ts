
import 'dotenv/config'
import * as joi from 'joi'

interface EnvVars {
  PORT: number
  API_KEY: string
}

const envSchema = joi.object({
  PORT: joi.number().required(),
  API_KEY: joi.string().required()
})
  .unknown(true)

const { error, value } = envSchema.validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value

export const envs = {
  port: envVars.PORT,
  apiKey: envVars.API_KEY
}