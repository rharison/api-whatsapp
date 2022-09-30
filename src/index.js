import { startClient } from './api/index.js'
import { startServerHttp } from './http/index.js'

(async () => {
  startServerHttp()
  console.log('Starting client...')
  await startClient()
  console.log('Client started')
})()