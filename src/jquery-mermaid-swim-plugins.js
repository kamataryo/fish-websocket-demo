import $ from 'jquery'
import 'jquery.ripples'

$('body').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
})

$.fn.mermaidSwimUp = function() {
  return this
    .animate({ top: this.offset().top - 200 })
    .css({
      transform:'rotate(-90deg)',
      transitionDuration: '1s',
    })
}

$.fn.mermaidSwimDown = function() {
  return this
    .animate({ top: this.offset().top + 200 })
    .css({
      transform:'rotate(90deg)',
      transitionDuration: '1s',
    })
}

$.fn.mermaidSwimRight = function() {
  return this
    .animate({ left: this.offset().left + 200 })
    .css({
      transform:'rotate(0deg)',
      transitionDuration: '1s',
    })
}

$.fn.mermaidSwimLeft = function() {
  return this
    .animate({ left: this.offset().left - 200 })
    .css({
      transform:'rotate(180deg)',
      transitionDuration: '1s',
    })
}
