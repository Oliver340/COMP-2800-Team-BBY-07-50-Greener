'use strict';

$(function () {

  $("#index-signup").on("click", function () {
    $.ajax({
      url: "/signup",
      dataType: "html",
      type: "GET",
      data: { format: "signup" },
      success: function (data) {
        document.documentElement.innerHTML = data;
  
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $("#index-login").on("click", function () {
    $.ajax({
      url: "/login",
      dataType: "html",
      type: "GET",
      data: { format: "login" },
      success: function (data) {
        document.documentElement.innerHTML = data;
  
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });
});