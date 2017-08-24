import $ from 'jquery'
import 'jquery-websocket-plugins'
import 'jquery-mermaid-swim-plugins'

const $fish = $('#fish')

$('#up').click(()    => $fish.mermaidEmit('up').mermaidSwimUp())
$('#down').click(()  => $fish.mermaidEmit('down').mermaidSwimDown())
$('#right').click(() => $fish.mermaidEmit('right').mermaidSwimRight())
$('#left').click(()  => $fish.mermaidEmit('left').mermaidSwimLeft())

$fish
  .onMermaidRecieve('up',    $self => $self.mermaidSwimUp())
  .onMermaidRecieve('down',  $self => $self.mermaidSwimDown())
  .onMermaidRecieve('right', $self => $self.mermaidSwimRight())
  .onMermaidRecieve('left',  $self => $self.mermaidSwimLeft())
