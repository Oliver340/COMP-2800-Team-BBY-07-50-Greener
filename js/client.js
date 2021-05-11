'use strict';

$(function () {

  $("#index-signup").on("click", function () {
    $.ajax({
      url: "/signup",
      type: "GET",
      dataType: "JSON",
      data: {},
      success: function (data) {
        if (data['status'] == "success") {
          window.location.replace("/signup");
        } else {
          $("#error").html(data['msg']);
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("body").text(jqXHR.statusText);
      }
    });
  });

  $("#index-login").on("click", function () {
    $.ajax({
      url: "/login",
      type: "GET",
      dataType: "JSON",
      data: {},
      success: function (data) {
        if (data['status'] == "success") {
          window.location.replace("/login");
        } else {
          $("#error").html(data['msg']);
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("body").text(jqXHR.statusText);
      }
    });
  });
});