import express from 'express'
import { sendMessage, getInfoQrCode, getIsConnected } from '../api/index.js'

export function startServerHttp() {
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/status', (req, res) => {
    const qr_code = getInfoQrCode()
    const connected = getIsConnected()
    res.send({
      qr_code,
      connected
    })
  })

  app.post('/message', async (req, res) => {
    try {
      const { to, body } = req.body
      await sendMessage(to, body)
      res.status(200).json({
        status: 'ok',
        message: 'Message sent successfully'
      })
    } catch(err) {
      console.log(err)
      res.status(500).json({
        status: 'error',
        message: 'Error sending message: ' + err
      })
    }
  })

  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
}

export default {
  startServerHttp
}
