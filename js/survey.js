'use strict';


$(function () {
  $("#survey-begin").on("click", function (e) {
    e.preventDefault();
    localStorage.setItem("score", "0");
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

  // the following are functions to load the next question depending on the answer of the previous/current question for the transport section
  $('#tq1-4').on("click", function () {
    if (this.checked == true) {
      $("#tq2-container").css("display", "block");
    }
    else if (this.checked == false) {
      $("#tq2-container").css("display", "none");
    }
  });

  $('#tq1-1').on("click", function () {
    if (this.checked == true) {
      $("#tq9-container").css("display", "block");
    }
    else if (this.checked == false) {
      $("#tq9-container").css("display", "none");
    }
  });

  $('#tq1-2').on("click", function () {
    if (this.checked == true) {
      $("#tq10-container").css("display", "block");
    }
    else if (this.checked == false) {
      $("#tq10-container").css("display", "none");
    }
  });

  $('#tq1-3').on("click", function () {
    if (this.checked == true) {
      $("#tq8-container").css("display", "block");
    }
    else if (this.checked == false) {
      $("#tq8-container").css("display", "none");
    }
  });

  $('#tq1-5').on("click", function () {
    if (this.checked == true) {
      $("#tq7-container").css("display", "block");
    }
    else if (this.checked == false) {
      $("#tq7-container").css("display", "none");
    }
  });

  $('input:checkbox[name=tq2]').on("click", function () {
    $("#tq3-container").css("display", "block");
  });

  $('input:radio[name=tq3]').on("click", function () {
    $("#tq4-container").css("display", "block");
  });

  $("#tq4-1").on("click", function () {
    if (this.checked == true) {
      $("#tq5-container").css("display", "block");
    }
  });

  $("#tq4-2").on("click", function () {
    if (this.checked == true) {
      $("#tq5-container").css("display", "none");
      $("#tq6-container").css("display", "block");
    }
  });

  $('input:radio[name=tq5]').on("click", function () {
    $("#tq6-container").css("display", "block");
  });
  //end of serving up transport questions

  //score will be calculated for this section and next section served up
  $("#transport-done").on("click", function (e) {
    e.preventDefault();
    let score = localStorage.getItem("score");

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

    localStorage.setItem("score", score);

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
            waterQuestions;
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
          }
        });
        */
  });

  var waterQs = ["#wq1-container", "#wq2-container", "#wq3-container", "#wq4-container", "#wq5-container", "#wq6-container", "#wq7-container", "#wq8-container", "#wq9-container", "#wq10-container"]

  function waterQuestions() {
    let someWaterQ = waterQs;
    wqn1 = Math.floor(Math.random() * 10);
    let selected_wq1 = someWaterQ[wqn1];
    someWaterQ.splice(wqn1, 1);

    $(selected_wq1).css("display", "block");

    wqn2 = Math.floor(Math.random() * 9);
    let selected_wq2 = someWaterQ[wqn2];
    someWaterQ.splice(wqn2, 1);

    $(selected_wq1).on("click", function () {
      $(selected_wq2).css("display", "block");
    });

    wqn3 = Math.floor(Math.random() * 8);
    let selected_wq3 = someWaterQ[wqn3];
    someWaterQ.splice(wqn3, 1);

    $(selected_wq2).on("click", function () {
      $(selected_wq3).css("display", "block");
    });

  }

  $("#water-done").on("click", function (e) {
    e.preventDefault();
    let score = localStorage.getItem("score");

    $('input:radio[name=wq1]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq2]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq3]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq4]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq5]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq6]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq7]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq8]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq9]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=wq10]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    localStorage.setItem("score", score);

    /*
      $.ajax({
        url: "/survey-home",
        dataType: "html",
        type: "GET",
        data: { format: "home" },
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

  var homeQs = ["#hq1-container", "#hq2-container", "#hq3-container", "#hq4-container", "#hq5-container", "#hq6-container", "#hq7-container", "#hq8-container", "#hq9-container", "#hq10-container"]

  function homeQuestions() {
    let someHomeQ = homeQs;
    hqn1 = Math.floor(Math.random() * 10);
    let selected_hq1 = someHomeQ[hqn1];
    someHomeQ.splice(hqn1, 1);

    $(selected_hq1).css("display", "block");

    hqn2 = Math.floor(Math.random() * 9);
    let selected_hq2 = someHomeQ[hqn2];
    someHomeQ.splice(hqn2, 1);

    $(selected_hq1).on("click", function () {
      $(selected_hq2).css("display", "block");
    });

    hqn3 = Math.floor(Math.random() * 8);
    let selected_hq3 = someHomeQ[hqn3];
    someHomeQ.splice(hqn3, 1);

    $(selected_hq2).on("click", function () {
      $(selected_hq3).css("display", "block");
    });

  }

  $("#home-done").on("click", function (e) {
    e.preventDefault();
    let score = localStorage.getItem("score");

    $('input:radio[name=hq1]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq2]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq3]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq4]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq5]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq6]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq7]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq8]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq9]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=hq10]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    localStorage.setItem("score", score);

    //at the end of each section the is either stored in session or db
    /*
      $.ajax({
        url: "/survey-food",
        dataType: "html",
        type: "GET",
        data: { format: "food" },
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

  var foodQs = ["#fq1-container", "#fq2-container", "#fq3-container", "#fq4-container", "#fq5-container", "#fq6-container", "#fq7-container", "#fq8-container", "#fq9-container", "#fq10-container"]

  function foodQuestions() {
    let somefoodQ = foodQs;
    fqn1 = Math.floor(Math.random() * 10);
    let selected_fq1 = somefoodQ[fqn1];
    somefoodQ.splice(fqn1, 1);

    $(selected_fq1).css("display", "block");

    fqn2 = Math.floor(Math.random() * 9);
    let selected_fq2 = somefoodQ[fqn2];
    somefoodQ.splice(fqn2, 1);

    $(selected_fq1).on("click", function () {
      $(selected_fq2).css("display", "block");
    });

    fqn3 = Math.floor(Math.random() * 8);
    let selected_fq3 = somefoodQ[fqn3];
    somefoodQ.splice(fqn3, 1);

    $(selected_fq2).on("click", function () {
      $(selected_fq3).css("display", "block");
    });

  }

  $("#food-done").on("click", function (e) {
    e.preventDefault();
    let score = localStorage.getItem("score");

    $('input:radio[name=fq1]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq2]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq3]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq4]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq5]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq6]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq7]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq8]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq9]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    $('input:radio[name=fq10]').each(function () {
      if ($(this).is(':checked'))
        score += Number($(this).val());
    });

    localStorage.setItem("score", score);


    goGoals();


  });


  function goGoals() {
    $.ajax({
      url: "/goals",
      dataType: "html",
      type: "GET",
      data: { format: "goals" },
      success: function (data) {
        document.documentElement.innerHTML = data;

        if (document.getElementById("goals-identifier") != null) {
          changeToGoalsPage();
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

  function changeToGoalsPage() {
    var script1 = document.createElement('script');
    script1.id = "jquery-script";
    script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    script1.type = "text/javascript";
    script1.onload = function () {
      var script2 = document.createElement('script');
      script2.id = "client-script";
      script2.src = "../js/client.js";
      script2.type = "text/javascript";
      script2.onload = function () {
        var script3 = document.createElement('script');
        script3.id = "progressbar-script";
        script3.src = "https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.1.0/progressbar.js";
        script3.type = "text/javascript";
        script3.onload = function () {
          var script4 = document.createElement('script');
          script4.id = "challenges-tabs-script";
          script4.src = "../js/tabs-challenges.js";
          script4.type = "text/javascript";
          script4.onload = function () {
            var script5 = document.createElement('script');
            script5.id = "goals-script";
            script5.src = "../js/goals.js";
            script5.type = "text/javascript";
            document.getElementById('goals-script').replaceWith(script5);
          }
          document.getElementById('challenges-tabs-script').replaceWith(script4);
        }
        document.getElementById('progressbar-script').replaceWith(script3);
      }
      document.getElementById('client-script').replaceWith(script2);
    }
    document.getElementById('jquery-script').replaceWith(script1);
  }

  $("#skip-survey").on("click", function (e) {
    e.preventDefault();
    goGoals();
  });
});