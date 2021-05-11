/* javascript */

$(document).ready(function() {

console.log('hello');

$('#slider-inner').slick({
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('#slider-inner').slick('slickGoTo', slideno - 1);
 });

});

