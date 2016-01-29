'use strict';

(function () {

    var logInBtn = document.getElementById('logInButton');
    var picture = document.getElementsByClassName('hideOnClick')[0];
    var buttons = document.getElementsByClassName('buttonsDiv')[0];
    logInBtn.onclick = function () {

        
        picture.style.display = "none";
        
        buttons.style.display = "none";

        var logInForm = document.getElementById('logInForm');
        logInForm.style.display = "block";
        logInForm.style.opacity = '1';

    }

    var signUpBtn = document.getElementById('singUpBtn');

    signUpBtn.onclick = function () {
        picture.style.display = "none";
        buttons.style.display = "none";
        var signUpForm = document.getElementById('signUpForm');
        signUpForm.style.display = "block";
        signUpForm.style.opacity = '1';
    }

    var backBtn = document.getElementById('logInBackBtn');
    backBtn.onclick = function () {
        window.location = 'homePage.html';
    }
    var backBtn2 = document.getElementById('signUpBackBtn');
    backBtn2.onclick = function () {
        window.location = 'homePage.html';
    }





})();

