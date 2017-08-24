import $ from 'jquery'

const actions = {}

const host = __PROD__ ? 'parrot-ws.biwako.io' : 'localhost:3001'

// setup WebSocket
const connection = new WebSocket(`ws://${host}/echo`, ['soap'])

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
