import $ from 'jquery'

$.fn.mermaidEmit = function(message) {
  const payload = { mermaidMessage: message }
  console.log(payload)
  return this
}

$.fn.onMermaidRecieve = function (slug, callback) {
  if (slug === 'slug from websocket') {
    callback.call(this)
  }
  return this
}

// const connect = (url, username, password) {
//     const connection = new WebSocket(url, ['soap'])
//     connection.onopen = () => {
//       const message = JSON.stringify({
//         type: 'authentication',
//         username,
//         password,
//       })
//       connection.send(message)
//     }
//     connection.onmessage = e => {
//       const data = JSON.parse(e.data)
//
//       switch (data.type) {
//         case 'authorization':
//           if (data.token) {
//             this.setState(update(this.state, {
//               connection : { $set: connection },
//               token      : { $set: data.token },
//             }))
//           }
//           break
//         case 'downstream':
//           this.props.onSocketMessageRecieved(data)
//           break
//         default:
//           return
//       }
//     }
//
//     connection.onclose = () => {
//       this.setState(update(this.state, { connection: { $set: null } }))
//     }
//   }
//
//   /**
//    * sendMessage
//    * @param {object} data sending data
//    * @return {void}
//    */
//   sendMessage(data) {
//     const { connection, token } = this.state
//     const { pageNum } = data
//     if (connection && token) {
//       connection.send(JSON.stringify({ type: 'upstream', pageNum, token }))
//     }
//   }
