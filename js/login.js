"use strict";
$(function () {

    $("#login-btn").on("click", function () {

        $.ajax({
            url: "/authenticate",
            type: "POST",
            dataType: "JSON",
            data: {
                loginUsername: $("#login-username").val(),
                loginPassword: $("#login-password").val()
            },
            success: function (data) {
                if (data['status'] == "success") {

                    goMain();

                } else {
                    $("#errorMsg").html(data['msg']);
                    $("#login-username").val("");
                    $("#login-password").val("");
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#errorMsg").text(jqXHR.statusText);
            }
        });

    });

});

function goMain() {
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
            var temp4 = "<script id='dialguage-script' src='../js/mainpage-dial-gauge.js'></script>";
            var temp5 = "<script id='piechart-script' src='../js/mainpage-pie-chart.js'></script>";
            var temp6 = "<script id='header-script' src='https://d3js.org/d3.v3.min.js' charset='utf-8'></script>";
            $("#cloudflare-script").replaceWith(temp3);
            $("#dialguage-script").replaceWith(temp4);
            $("#piechart-script").replaceWith(temp5);
            $("#header-script").replaceWith(temp6);
          } else {
            console.log("redirect");
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $("#content").text(jqXHR.statusText);
          console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
      });
}