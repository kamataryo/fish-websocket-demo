import $ from 'jquery'

const actions = {}

const host = __PROD__ ? 'parrot-ws.biwako.io' : 'localhost:3001'
console.log(host)
// setup WebSocket
const connection = new WebSocket('ws://' + host + '/echo', ['soap'])

// set handler when on message
connection.onmessage = function(e) {
  const actionKey = JSON.parse(e.data).mermaidMessage
  if (actionKey && typeof actions[actionKey] === 'function') {
    actions[actionKey]()
  }
}

connection.onclose = function(e) {
  console.log(e)
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
