import $ from 'jquery'

const actions = {}

const url = __PROD__ ? 'ws://parrot-ws.biwako.io/echo' : 'ws://localhost:3001/echo'
console.log(url)
// setup WebSocket
const ws = new WebSocket(url, ['soap'])

// set handler when on message
ws.onmessage = function(e) {
  const actionKey = JSON.parse(e.data).mermaidMessage
  if (actionKey && typeof actions[actionKey] === 'function') {
    actions[actionKey]()
  }
}

// ws.onclose = function(e) {
//   console.log(e)
// }
//
// ws.onerror = function(e) {
//   console.log(e)
// }

$.fn.mermaidEmit = function(message) {
  const payload = { mermaidMessage: message }
  ws.send(JSON.stringify(payload))
  return this
}

$.fn.onMermaidRecieve = function (slug, callback) {
  // register callbacks
  actions[slug] = callback.bind(this)
  return this
}
