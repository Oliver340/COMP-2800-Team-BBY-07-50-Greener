'use strict';

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
});