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
        var temp1 = "<script src='../js/signup.js'></script>";
        var temp2 = "<script src='../js/client.js'></script>";
        var temp3 = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        $("#content-to-replace").append(temp1);
        $("#content-to-replace").append(temp2);
        $("#content-to-replace").append(temp3);
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
        var temp1 = "<script src='../js/login.js'></script>";
        var temp2 = "<script src='../js/client.js'></script>";
        var temp3 = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        $("#content-to-replace").append(temp1);
        $("#content-to-replace").append(temp2);
        $("#content-to-replace").append(temp3);
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
        var temp1 = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js'></script>";
        var temp3 = "<script src='../js/mainpage-dial-gauge.js'></script>";
        var temp4 = "<script src='../js/mainpage-pie-chart.js'></script>";
        var temp5 = "<script src='../js/client.js'></script>";
        $("#content-to-replace").append(temp1);
        $("#content-to-replace").append(temp2);
        $("#content-to-replace").append(temp3);
        $("#content-to-replace").append(temp4);
        $("#content-to-replace").append(temp5);
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
        var temp1 = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script src='../js/tabs.js'></script>";
        var temp3 = "<script src='../js/jquery.barfiller.js'></script>";
        var temp4 = "<script src='../js/maingoal-bar.js'></script>";
        var temp5 = "<script src='../js/client.js'></script>";
        $("#content-to-replace").append(temp1);
        $("#content-to-replace").append(temp2);
        $("#content-to-replace").append(temp3);
        $("#content-to-replace").append(temp4);
        $("#content-to-replace").append(temp5);
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
        var temp1 = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script src='../js/tabs.js'></script>";
        var temp3 = "<script src='../js/client.js'></script>";
        $("#content-to-replace").append(temp1);
        $("#content-to-replace").append(temp2);
        $("#content-to-replace").append(temp3);

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

});