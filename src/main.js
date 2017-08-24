import $ from 'jquery'
import 'jquery-websocket-plugins'
import 'jquery-mermaid-swim-plugins'

const $fish = $('#fish')

$('.button').click(function() {
  $(this).fadeOut(50).fadeIn(10)
})

$('#up').click(function() {    $fish.mermaidEmit('up') })
$('#down').click(function() {  $fish.mermaidEmit('down') })
$('#right').click(function() { $fish.mermaidEmit('right') })
$('#left').click(function() {  $fish.mermaidEmit('left') })

$fish
  .onMermaidRecieve('up',    function(){ this.mermaidSwimUp() })
  .onMermaidRecieve('down',  function(){ this.mermaidSwimDown() })
  .onMermaidRecieve('right', function(){ this.mermaidSwimRight() })
  .onMermaidRecieve('left',  function(){ this.mermaidSwimLeft() })
