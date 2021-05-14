'use strict';

//depending on whether the score gets saved to session or db, this number will be pulled from there instead
var score = 0;

$(function () {
  $("#survey-begin").on("click", function (e) {
    e.preventDefault();
    /*
    $.ajax({
      url: "/survey-transport",
      dataType: "html",
      type: "GET",
      data: { format: "transport" },
      success: function (data) {
        document.documentElement.innerHTML = data;
        var temp1 = "<script src='../js/survey.js'></script>";
        var temp2 = "<script id='client-script' src='../js/client.js'></script>";
        var temp3 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
        $("#survey-script").replaceWith(temp1);
        $("#client-script").replaceWith(temp2);
        $("#jquery-script").replaceWith(temp3);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#content").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    }); */
  });

  $("#transport-done").on("click", function (e) {
    e.preventDefault();

    $('input:checkbox[name=tq1]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:checkbox[name=tq2]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq3]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq4]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq5]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq6]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq7]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq8]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq9]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=tq10]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    console.log(score);

    //at the end of each section the is either stored in session or db
    /*
        $.ajax({
          url: "/survey-water",
          dataType: "html",
          type: "GET",
          data: { format: "water" },
          success: function (data) {
            document.documentElement.innerHTML = data;
            var temp1 = "<script src='../js/survey.js'></script>";
            var temp2 = "<script id='client-script' src='../js/client.js'></script>";
            var temp3 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
            $("#survey-script").replaceWith(temp1);
            $("#client-script").replaceWith(temp2);
            $("#jquery-script").replaceWith(temp3);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
          }
        });
        */
  });

  $("#water-done").on("click", function (e) {
    e.preventDefault();

    $('input:radio[name=wq1]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq2]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq3]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq4]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq5]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq6]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq7]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq8]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq9]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq10]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    console.log(score);

    //at the end of each section the is either stored in session or db
    /*
      $.ajax({
        url: "/survey-home",
        dataType: "html",
        type: "GET",
        data: { format: "home" },
        success: function (data) {
          document.documentElement.innerHTML = data;
          var temp1 = "<script src='../js/survey.js'></script>";
          var temp2 = "<script id='client-script' src='../js/client.js'></script>";
          var temp3 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
          $("#survey-script").replaceWith(temp1);
          $("#client-script").replaceWith(temp2);
          $("#jquery-script").replaceWith(temp3);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $("#content").text(jqXHR.statusText);
          console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
      });
      */

  });

  $("#home-done").on("click", function (e) {
    e.preventDefault();

    $('input:radio[name=hq1]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq2]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq3]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq4]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq5]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq6]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq7]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq8]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq9]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq10]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    console.log(score);

    //at the end of each section the is either stored in session or db
    /*
      $.ajax({
        url: "/survey-food",
        dataType: "html",
        type: "GET",
        data: { format: "food" },
        success: function (data) {
          document.documentElement.innerHTML = data;
          var temp1 = "<script src='../js/survey.js'></script>";
          var temp2 = "<script id='client-script' src='../js/client.js'></script>";
          var temp3 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
          $("#survey-script").replaceWith(temp1);
          $("#client-script").replaceWith(temp2);
          $("#jquery-script").replaceWith(temp3);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $("#content").text(jqXHR.statusText);
          console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
      });
      */

  });

  $("#food-done").on("click", function (e) {
    e.preventDefault();

    $('input:radio[name=fq1]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq2]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq3]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq4]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq5]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq6]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq7]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq8]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq9]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq10]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    console.log(score);

    //at the end of each section the is either stored in session or db


    //this should serve up a goal setting page instead
    /*
      $.ajax({
        url: "/mainpage",
        dataType: "html",
        type: "GET",
        data: { format: "mainpage" },
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
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $("#content").text(jqXHR.statusText);
          console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
      });
      */

  });
});