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

// function nope() {
//   var temp1 = "<script id='jquery-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>";
//   var temp2 = "<script id='client-script' src='../js/client.js'></script>";
//   $("#jquery-script").replaceWith(temp1);
//   $("#client-script").replaceWith(temp2);
//   var temp3 = "<script id='cloudflare-script' src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js'></script>";
//   var temp4 = "<script id='semicircle-script' src='../js/mainpage-semicircle.js'></script>";
//   var temp5 = "<script id='piechart-script' src='../js/mainpage-pie-chart.js'></script>";
//   var temp6 = "<script id='progressbar-script' src='https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.1.0/progressbar.min.js' charset='utf-8'></script>";
//   $("#cloudflare-script").replaceWith(temp3);
//   $("#semicircle-script").replaceWith(temp4);
//   $("#piechart-script").replaceWith(temp5);
//   $("#progressbar-script").replaceWith(temp6);
// }

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
                document.getElementsByTagName('body')[0].appendChild(script6);
              }
              document.getElementsByTagName('body')[0].appendChild(script5);
            }
            document.getElementsByTagName('body')[0].appendChild(script4);
          }
          document.getElementsByTagName('body')[0].appendChild(script3);
        }
        document.getElementsByTagName('body')[0].appendChild(script2);
    }
    document.getElementsByTagName('body')[0].appendChild(script1);

}