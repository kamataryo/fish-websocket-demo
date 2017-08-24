import $ from 'jquery'
import 'jquery-websocket-plugins'
import 'jquery-mermaid-swim-plugins'

const $fish = $('#fish')

$('#up').click(()    => $fish.mermaidEmit('up'))//.mermaidSwimUp())
$('#down').click(()  => $fish.mermaidEmit('down'))//.mermaidSwimDown())
$('#right').click(() => $fish.mermaidEmit('right'))//.mermaidSwimRight())
$('#left').click(()  => $fish.mermaidEmit('left'))//.mermaidSwimLeft())

$fish
  .onMermaidRecieve('up',    function(){ this.mermaidSwimUp() })
  .onMermaidRecieve('down',  function(){ this.mermaidSwimDown() })
  .onMermaidRecieve('right', function(){ this.mermaidSwimRight() })
  .onMermaidRecieve('left',  function(){ this.mermaidSwimLeft() })
