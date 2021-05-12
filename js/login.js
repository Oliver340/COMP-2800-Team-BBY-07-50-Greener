"use strict";
$(document).ready(function () {
    $("#login-btn").click(function () {
        console.log("onclickloginbtn");
        $.ajax({
            url: "/authenticate",
            type: "POST",
            dataType: "JSON",
            data: {
                email: $("#email").val(),
                password: $("#password").val()
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