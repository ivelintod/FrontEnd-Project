'use strict';

$(document).ready(function(){
  $('#signup').click(function(){
    /*$.ajax({
      type: 'GET',
      url: 'http://localhost:8080/test',
      success: function(result){
        console.log(result);
    }});*/

    var
      user = $('#usernameSign').val(),
      pass = $('#passwordSign').val(),
      rpass = $('#passwordRpt').val(),
      email = $('#email').val(),
      fname = $('#fname').val(),
      lname = $('#lname').val();

    $.post('http://localhost:8080/register',
    {
        username: user,
        password: pass,
        repeat_password: rpass,
        email: email,
        first_name: fname,
        last_name: lname
    },
    function(data, status){
        console.log('data: ' + data + '\nStatus: ' + status);
    });
  });
});
