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

                    goSurvey();

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

function goSurvey() {
    $.ajax({
        url: "/survey-intro",
        dataType: "html",
        type: "GET",
        data: { format: "survey-intro" },
        success: function (data) {
          document.documentElement.innerHTML = data;
          
          if (document.getElementById("survey-intro-identifier") != null) {
            changeToSurveyPage();
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

function changeToSurveyPage() {
  var script1 = document.createElement('script');
  script1.id = "jquery-script";
  script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
  script1.type = "text/javascript";
  script1.onload = function() {
    // var script2 = document.createElement('script');
    // script2.id = "client-script";
    // script2.src = "../js/client.js";
    // script2.type = "text/javascript";
    //   script2.onload = function() {
        var script3 = document.createElement('script');
        script3.id = "survey-script";
        script3.src = "../js/survey.js";
        script3.type = "text/javascript";
        document.getElementById('survey-script').replaceWith(script3);
      }
  //     document.getElementById('client-script').replaceWith(script2);
  // }
  document.getElementById('jquery-script').replaceWith(script1);
}