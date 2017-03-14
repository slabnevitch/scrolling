$(document).ready(function(){
  var $orange = $('.orange'),
      $orangeTop = $orange.offset().top,
      delay = 5000;
  //alert($orangeTop);
  setTimeout(function(){
    $('html, body').animate({scrollTop: $orangeTop}, 1000);
  }, delay);
});