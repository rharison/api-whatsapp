import venon from 'venom-bot'

let client;
let base64Qr;
let asciiQr;
let attemptsQr;
let urlCodeQr;
let statusSession;
let isConnected;

export async function sendMessage(to, body) {
  try {
    await client.sendText(to, body)
  } catch(err) {
    console.log(err)
  }
}

function controllerQrCode(base64Qrimg, asciiQR, attempts, urlCode) {
  base64Qr = base64Qrimg;
  asciiQr = asciiQR;
  attemptsQr = attempts;
  urlCodeQr = urlCode;
}

export function getInfoQrCode() {
  return {
    base64Qr,
    asciiQr,
    attemptsQr,
    urlCodeQr
  }
}

export function getIsConnected() {
  return isConnected
}

function controllerStatus(statusSession) {
  isConnected = ['isLogged', 'qrReadSuccess', 'chatsAvailable'].includes(statusSession)
}

export async function startClient() {
  try {
    if(!client) {
      client = await venon.create('api-whatsapp-dev', controllerQrCode, controllerStatus)
      sendMessage('5511999999999', 'Hello world!')
    }
  } catch(err) {
    console.log(err)
  }
}

export default {
  startClient,
  sendMessage,
  getIsConnected,
  getInfoQrCode
}