$(document).ready(function(){
  $('li').hover(
     function(){
    $(this).find('ul').slideDown(200);
  }, function() {
    $(this).find('ul').slideUp(200);
  });
});
