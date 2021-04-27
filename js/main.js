/* javascript */

$(document).ready(function() {

console.log('hello');

$('#slider-inner').slick({
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

});