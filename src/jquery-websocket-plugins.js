import $ from 'jquery'

const actions = {}

const url = __PROD__ ? 'ws://parot-websocket.biwako.io/echo' : 'ws://localhost:3001/echo'

// setup WebSocket
const connection = new WebSocket(url, ['soap'])

// exec
connection.onmessage = e => {
  const actionKey = JSON.parse(e.data).mermaidMessage
  if (actionKey && typeof actions[actionKey] === 'function') {
    actions[actionKey]()
  }
}

$.fn.mermaidEmit = function(message) {
  const payload = { mermaidMessage: message }
  connection.send(JSON.stringify(payload))
  return this
}

$.fn.onMermaidRecieve = function (slug, callback) {
  // register callbacks
  actions[slug] = callback.bind(this)
  return this
}
