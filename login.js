'use strict';

$(document).ready(function(){
  $('#signin').click(function(){
    /*$.ajax({
      type: 'GET',
      url: 'http://localhost:8080/test',
      success: function(result){
        console.log(result);
    }});*/

    var user = $('#username').val();
    var pass = $('#password').val();
    $.post('http://localhost:8080/test',
    {
        username: user,
        password: pass
    },
    function(data, status){
        console.log('data: ' + data + '\nStatus: ' + status);
    });
  });

});

/*(function redirect() {
    var logInBtn = document.getElementById('signin');
    logInBtn.onclick = function () {
        window.location = 'homePageLogIn.html';
    }
}());
*/
