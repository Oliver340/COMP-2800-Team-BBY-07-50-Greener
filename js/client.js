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

  $("#mainpage").on("click", function () {
    $.ajax({
      url: "/mainpage",
      dataType: "html",
      type: "GET",
      data: { format: "mainpage" },
      success: function (data) {
        document.documentElement.innerHTML = data;
  
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $("#challenges").on("click", function () {
    $.ajax({
      url: "/challenges",
      dataType: "html",
      type: "GET",
      data: { format: "challenges" },
      success: function (data) {
        document.documentElement.innerHTML = data;
  
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $("#information").on("click", function () {
    $.ajax({
      url: "/information",
      dataType: "html",
      type: "GET",
      data: { format: "information" },
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