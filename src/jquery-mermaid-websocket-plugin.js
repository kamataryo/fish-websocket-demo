import $ from 'jquery'

const actions = {}

const host = __PROD__ ? 'parrot-ws.biwako.io' : 'localhost:3001'
console.log(host)

// setup WebSocket
const ws = new WebSocket(`ws://${host}/echo`)

ws.onopen = e => console.log(e)

// set handler when on message
ws.onmessage = e => {
  const actionKey = JSON.parse(e.data).mermaidMessage
  if (actionKey && typeof actions[actionKey] === 'function') {
    actions[actionKey]()
  }
}

ws.onclose = e => console.log(e)

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
