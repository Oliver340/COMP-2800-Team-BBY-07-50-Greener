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
        var temp1 = "<script id='signup-script' src='../js/signup.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        var temp3 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        $("#signup-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        $("#jquery-script").replaceWith(temp3);
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
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        var temp3 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        $("#login-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        $("#jquery-script").replaceWith(temp3);
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
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='cloudflare-script' src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js'></script>";
        var temp3 = "<script id='dialguage-script' src='../js/mainpage-dial-gauge.js'></script>";
        var temp4 = "<script id='piechart-script' src='../js/mainpage-pie-chart.js'></script>";
        var temp5 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#cloudflare-script").replaceWith(temp2);
        $("#dialguage-script").replaceWith(temp3);
        $("#piechart-script").replaceWith(temp4);
        $("#client-script").replaceWith(temp5);
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
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='challenges-tabs-script' src='../js/tabs-challenges.js'></script>";
        var temp3 = "<script id='barfiller-script' src='../js/jquery.barfiller.js'></script>";
        var temp4 = "<script id='maingoalbar-script' src='../js/maingoal-bar.js'></script>";
        var temp5 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#challenges-tabs-script").replaceWith(temp2);
        $("#barfiller-script").replaceWith(temp3);
        $("#maingoalbar-script").replaceWith(temp4);
        $("#client-script").replaceWith(temp5);
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
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='information-tabs-script' src='../js/tabs-information.js'></script>";
        var temp3 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#information-tabs-script").replaceWith(temp2);
        $("#client-script").replaceWith(temp3);

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

});