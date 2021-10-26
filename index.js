import express from 'express'
import server from 'http'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 7000

const app = express()
const serv = server.createServer(app)
const io = new Server(serv, {
  cors: { origin: '*' },
})

function IO() {
  io.on('connection', (socket) => {
    socket.on('message', (payload) => {
      console.log(payload)
      io.emit('message', payload)
    })
  })
}

async function start() {
  try {
    serv.listen(PORT, () => {
      IO()
      console.log('Все заебись')
    })
  } catch (e) {
    console.log('ХуйнаёХуйныавыавыаыыы', e)
  }
}
start()

export default app
