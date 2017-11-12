import $ from 'jquery'
import './jquery-fish-websocket-plugin'
import './jquery-fish-swim-plugin'

const $fish = $('#fish')

$('.button').click(function() {
  $(this).fadeOut(50).fadeIn(10)
})

$('#up').click(() => $fish.fishEmit('up'))
$('#down').click(() => $fish.fishEmit('down'))
$('#right').click(() => $fish.fishEmit('right'))
$('#left').click(() => $fish.fishEmit('left'))

$fish
  .onFishRecieve('up',    function(){ this.fishSwimUp() })
  .onFishRecieve('down',  function(){ this.fishSwimDown() })
  .onFishRecieve('right', function(){ this.fishSwimRight() })
  .onFishRecieve('left',  function(){ this.fishSwimLeft() })


module.hot && module.hot.accept()
