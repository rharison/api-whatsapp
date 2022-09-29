import venon from 'venom-bot'

let client;
let base64Qrimg;
let asciiQR;
let attempts;
let urlCode;
let statusSession;

async function sendMessage(to, body) {
  try {
    await client.sendText(to, body)
  } catch(err) {
    console.log(err)
  }
}

function controllerQrCode(base64Qrimg, asciiQR, attempts, urlCode) {
  base64Qrimg = base64Qrimg;
  asciiQR = asciiQR;
  attempts = attempts;
  urlCode = urlCode;
}

function getInfoQrCode() {
  return {
    base64Qrimg,
    attempts,
  }
}

function isConnected() {
  return statusSession === 'isLogged'
}

function controllerStatus(statusSession) {
  console.log('Status Session: ', statusSession);
}

async function start() {
  try {
    client = await venon.create('api-whatsapp-dev', controllerQrCode, controllerStatus,{headless: false})
    sendMessage('5564992747833@c.us', 'Animal')
  } catch(err) {
    console.log(err)
  }
}

export default start