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
                    window.location.replace("/mainpage");
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