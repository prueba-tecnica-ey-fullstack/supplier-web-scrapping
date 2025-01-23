import app from './app'
import { envs } from './config/envs'
import { executeScrapping } from './tasks/scrapping.task'

app.listen(envs.port, () => {
  console.log(`Listening to port ${envs.port}`)
  executeScrapping()
})