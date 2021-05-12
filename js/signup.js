"use strict";
$(function () {

    $("#signup-btn").on("click", function () {

        $.ajax({
            url: "/newUser",
            type: "POST",
            dataType: "JSON",
            data: {
                signupUsername: $("#signup-username").val(),
                signupFirstName: $("#signup-first-name").val(),
                signupLastName: $("#signup-last-name").val(),
                signupPassword: $("#signup-password").val()
            },
            success: function (data) {
                if (data['status'] == "success") {

                    goMain();

                } else {
                    $("#errorMsg").html(data['msg']);
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#errorMsg").text(jqXHR.statusText);
            }
        });

    });

});

//this needs to replaced with something that serves up the survey
function goMain() {
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
}