'use strict';

$(document).ready(function () {

  $("#index-signup").click(function () {
    $.ajax({
      url: "/signup",
      type: "GET",
      dataType: "JSON",
      data: {},
      success: function(data) {
          if(data['status'] == "success") {
              window.location.replace("/signup");
          } else {
              $("#error").html(data['msg']);
          }

      },
      error: function(jqXHR, textStatus, errorThrown) {
          $("body").text(jqXHR.statusText);
      }
  });
  });
});