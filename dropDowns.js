'use strict';

(function dropDowns() {
    var serial = document.getElementById('serial');

    serial.onmouseover = function () {
        var ul = document.getElementsByClassName('seasons')[0];
        ul.style.display = "block";
        ul.style.position = "absolute";
        ul.style.padding = "0";
    };

    serial.onmouseout = function () {

        document.getElementsByClassName('seasons')[0].style.display = "none";
    }

    var movie = document.getElementById('movie');

    movie.onmouseover = function () {
        var ul = document.getElementsByClassName('movies')[0];
        ul.style.display = 'block';
        ul.style.position = 'absolute';
        ul.style.padding = "0";
    }

    movie.onmouseout = function () {
        document.getElementsByClassName('movies')[0].style.display = "none";
    }

    var logOutBtn = document.getElementById('registerButton');

    logOutBtn.onclick = function () {
        window.location = 'homePage.html';
    }

}());
