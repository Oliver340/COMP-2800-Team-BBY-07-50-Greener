'use strict';

$(function () {

  $("#index-signup").on("click", function () {
    window.location.replace("/signup");
  });

  $("#index-login").on("click", function () {
    window.location.replace("/login");
  });
});