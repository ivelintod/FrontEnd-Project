'use strict';

$(document).ready(function(){
  $('.registration').fadeIn(700);

  $('#logInButton').click(function(){
    $('#mask').fadeIn(500);
    $('#log').slideToggle();
  });

  $('#registerButton').click(function(){
    $('#mask').fadeIn(500);
    $('#reg').slideToggle();
  })

  $('#mask').click(function(){
    $('#mask, .popup-window').hide();
  })

});
/*
  var div = $('.marginTop');
  var pos = div.position();

  $(window).scroll(function(){
    var windowpos = $(window).scrollTop();
    if(windowpos >= (pos.top - 100)){
      div.fadeIn(700);
    }
  })
});
*/
