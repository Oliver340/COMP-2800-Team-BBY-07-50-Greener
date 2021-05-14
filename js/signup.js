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
                    $("#signup-username").val("");
                    $("#signup-password").val("");
                    $("#signup-first-name").val("");
                    $("#signup-last-name").val("");
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
          
          if (document.getElementById("mainpage-identifier") != null) {
            changePage();
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

function changePage() {
  var script1 = document.createElement('script');
  script1.id = "jquery-script";
  script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
  script1.type = "text/javascript";
  script1.onload = function() {
    var script2 = document.createElement('script');
    script2.id = "client-script";
    script2.src = "../js/client.js";
    script2.type = "text/javascript";
      script2.onload = function() {
        var script3 = document.createElement('script');
        script3.id = "cloudflare-script";
        script3.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js";
        script3.type = "text/javascript";
        script3.onload = function() {
          var script4 = document.createElement('script');
          script4.id = "progressbar-script";
          script4.src = "https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.1.0/progressbar.min.js";
          script4.type = "text/javascript";
          script4.onload = function() {
            var script5 = document.createElement('script');
            script5.id = "piechart-script";
            script5.src = "../js/mainpage-pie-chart.js";
            script5.type = "text/javascript";
            script5.onload = function() {
              var script6 = document.createElement('script');
              script6.id = "semicircle-script";
              script6.src = "../js/mainpage-semicircle.js";
              script6.type = "text/javascript";
              document.getElementById('semicircle-script').replaceWith(script6);
            }
            document.getElementById('piechart-script').replaceWith(script5);
          }
          document.getElementById('progressbar-script').replaceWith(script4);
        }
        document.getElementById('cloudflare-script').replaceWith(script3);
      }
      document.getElementById('client-script').replaceWith(script2);
  }
  document.getElementById('jquery-script').replaceWith(script1);

}