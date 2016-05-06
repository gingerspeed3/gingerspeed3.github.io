$(document).ready(function () {

  $('.hidden').fadeIn(500).removeClass('hidden');

  $('li').hover(function() {
    $(this).toggleClass('animated pulse')
  });

});
