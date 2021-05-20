'use strict';

$(function () {

  $("#index-signup").on("click", function () {
    $.ajax({
      url: "/signup",
      dataType: "html",
      type: "GET",
      data: {
        format: "signup"
      },
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
      data: {
        format: "login"
      },
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
      data: {
        format: "mainpage"
      },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        if (document.getElementById("mainpage-identifier") != null) {
          var temp3 = "<script id='cloudflare-script' src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js'></script>";
          var temp4 = "<script id='semicircle-script' src='../js/mainpage-semicircle.js'></script>";
          var temp5 = "<script id='piechart-script' src='../js/mainpage-pie-chart.js'></script>";
          var temp6 = "<script id='progressbar-script' src='https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.1.0/progressbar.min.js' charset='utf-8'></script>";
          $("#cloudflare-script").replaceWith(temp3);
          $("#semicircle-script").replaceWith(temp4);
          $("#piechart-script").replaceWith(temp5);
          $("#progressbar-script").replaceWith(temp6);
        } else {
          console.log("redirect");
        }
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
      data: {
        format: "challenges"
      },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        if (document.getElementById("challenges-identifier") != null) {
          var temp3 = "<script id='challenges-tabs-script' src='../js/tabs-challenges.js'></script>";
          var temp4 = "<script id='progressbar-script' src='https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.1.0/progressbar.js'></script>";
          var temp5 = "<script id='challenges-populate' src='../js/challenges-populate.js'></script>"
          $("#challenges-tabs-script").replaceWith(temp3);
          $("#progressbar-script").replaceWith(temp4);
          $("#challenges-populate").replaceWith(temp5);
        } else {
          console.log("redirect");
        }
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
      data: {
        format: "information"
      },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        if (document.getElementById("information-identifier") != null) {
          var temp3 = "<script id='information-tabs-script' src='../js/tabs-information.js'></script>";
          $("#information-tabs-script").replaceWith(temp3);
        } else {
          console.log("redirect");
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });




  $("#about").on("click", function () {
    $.ajax({
      url: "/about",
      dataType: "html",
      type: "GET",
      data: {
        format: "about"
      },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        if (document.getElementById("about-identifier") != null) {
          var temp3 = "<script id='about-script' src='../js/about.js'></script>";
          var temp4 = "<script id='egg-script' src='../js/egg.js'></script>";
          $("#about-script").replaceWith(temp3);
          $("#egg-script").replaceWith(temp4);

        } else {
          console.log("redirect");
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $("#goals").on("click", function () {
    $.ajax({
      url: "/goals",
      dataType: "html",
      type: "GET",
      data: {
        format: "goals"
      },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        if (document.getElementById("goals-identifier") != null) {
          var temp3 = "<script id='goals-script' src='../js/goals.js'></script>";
          var temp4 = "<script id='barfiller-script' src='../js/jquery.barfiller.js'></script>";
          var temp5 = "<script id='maingoalbar-script' src='../js/maingoal-bar.js'></script>";
          $("#goals-script").replaceWith(temp3);
          $("#barfiller-script").replaceWith(temp4);
          $("#maingoalbar-script").replaceWith(temp5);
        } else {
          console.log("redirect");
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $("#settings").on("click", function () {
    $.ajax({
      url: "/settings",
      dataType: "html",
      type: "GET",
      data: {
        format: "settings"
      },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        if (document.getElementById("goals-identifier") != null) {
          console.log("no redirect");
        } else {
          console.log("redirect");
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $("#nav-login").on("click", function () {
    $.ajax({
      url: "/login",
      dataType: "html",
      type: "GET",
      data: {
        format: "login"
      },
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

  $("#nav-logout").on("click", function () {
    $.ajax({
      url: "/logout",
      dataType: "html",
      type: "GET",
      data: {
        format: "logout"
      },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        $("#jquery-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

});