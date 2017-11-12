import $ from 'jquery'

const actions = {}

let host
if (window && window.__PROD__) {
  host = __PROD__ ? 'parrot-ws.biwako.io' : 'localhost:3001'
} else {
  host = 'parrot-ws.biwako.io'
}

console.log(host)

// setup WebSocket
const ws = new WebSocket(`ws://${host}/echo`)

ws.onopen = e => console.log(e)

// set handler when on message
ws.onmessage = e => {
  const actionKey = JSON.parse(e.data).fishMessage
  if (actionKey && typeof actions[actionKey] === 'function') {
    actions[actionKey]()
  }
}

ws.onclose = e => console.log(e)

$.fn.fishEmit = function(message) {
  const payload = { fishMessage: message }
  ws.send(JSON.stringify(payload))
  return this
}

$.fn.onFishRecieve = function (slug, callback) {
  // register callbacks
  actions[slug] = callback.bind(this)
  return this
}
