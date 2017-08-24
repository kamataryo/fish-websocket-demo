import $ from 'jquery'

const actions = {}

// setup WebSocket
const connection = new WebSocket('ws://' + __WS_HOST__ + '/echo', ['soap'])

// exec
connection.onmessage = function(e) {
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
