import $ from 'jquery'
import './jquery-mermaid-websocket-plugin'
import './jquery-mermaid-swim-plugin'

const $fish = $('#fish')

$('.button').click(function() {
  $(this).fadeOut(50).fadeIn(10)
})

$('#up').click(() => $fish.mermaidEmit('up'))
$('#down').click(() => $fish.mermaidEmit('down'))
$('#right').click(() => $fish.mermaidEmit('right'))
$('#left').click(() => $fish.mermaidEmit('left'))

$fish
  .onMermaidRecieve('up',    function(){ this.mermaidSwimUp() })
  .onMermaidRecieve('down',  function(){ this.mermaidSwimDown() })
  .onMermaidRecieve('right', function(){ this.mermaidSwimRight() })
  .onMermaidRecieve('left',  function(){ this.mermaidSwimLeft() })


module.hot && module.hot.accept()
