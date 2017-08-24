const WebSocket = require('ws')

let sockets = []

const wss = new WebSocket.Server({
  port : process.env.PORT || 3002,
  path : '/echo',
})

wss.on('connection', socket => {
  console.log('connected!')
  sockets.push(socket)
  socket.on('message', message => {
    sockets.forEach(socket => {
      try {
        socket.send(message)
      } catch (e) {
        sockets.filter(x => x !== socket)
      }
    })
  })
  socket.on('close', arg => console.log(arg))
  socket.on('error', arg => console.log(arg))
})
