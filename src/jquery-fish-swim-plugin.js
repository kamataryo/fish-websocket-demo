import $ from 'jquery'

$.fn.fishSwimUp = function() {
  return this
    .animate({ top: this.offset().top - 200 }, 300)
    .css({
      transform:'rotate(-90deg)',
      transitionDuration: '1s',
    })
}

$.fn.fishSwimDown = function() {
  return this
    .animate({ top: this.offset().top + 200 }, 300)
    .css({
      transform:'rotate(90deg)',
      transitionDuration: '1s',
    })
}

$.fn.fishSwimRight = function() {
  return this
    .animate({ left: this.offset().left + 200 }, 300)
    .css({
      transform:'rotate(0deg)',
      transitionDuration: '1s',
    })
}

$.fn.fishSwimLeft = function() {
  return this
    .animate({ left: this.offset().left - 200 }, 300)
    .css({
      transform:'rotate(180deg)',
      transitionDuration: '1s',
    })
}
