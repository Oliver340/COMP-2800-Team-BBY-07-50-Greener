var currentscore = 0;
var goal = 0;
var line;

$(function () {

    $('.tab-body').toggle();

    let activetab;

    $('#info, #progress').attr('style', 'display: block');

    $('#tabmenu').on('click', '.tablink-active', function (e) {
        activetab = e.target.id.replace('-tab', '');
        closeTab(e, activetab);
    });

    $('#tabmenu').on('click', '.tablink', function (e) {
        activetab = e.target.id.replace('-tab', '');
        showTab(e, activetab);
    });

    function showTab(e, tabID) {
        e.target.className = "tablink-active";
        $(`#${tabID}`).attr('style', 'display: block');
    }

    function closeTab(e, tabID) {
        e.target.className = "tablink";
        $(`#${tabID}`).attr('style', 'display: none');
    }

    line = new ProgressBar.Line('#progress', {
        color: '#3c7329',
        strokeWidth: 1,
        trailColor: '#d73242',
        trailWidth: 1,
        duration: 2000,
        easing: 'easeInOut',
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                position: 'relative',
                color: "black",
                "margin-top": "10px"
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + '% of your goal is complete');
        }
    });
    

    getCurrentScore();

    
    $('#water').on("click", '.check', function(e){
        let checkedElement = e.target.checked;
        let points = e.target.nextSibling.innerHTML;
        let onlyPoints = parseInt(points);
        if (checkedElement == true) {
            setWaterScore(onlyPoints * -1);
        } else {
            setWaterScore(onlyPoints);
        }
    });
    $('#food').on("click", '.check', function(e){
        let checkedElement = e.target.checked;
        let points = e.target.nextSibling.innerHTML;
        let onlyPoints = parseInt(points);
        if (checkedElement == true) {
            setFoodScore(onlyPoints * -1);
        } else {
            setFoodScore(onlyPoints);
        }
    });
    $('#commute').on("click", '.check', function(e){
        let checkedElement = e.target.checked;
        let points = e.target.nextSibling.innerHTML;
        let onlyPoints = parseInt(points);
        if (checkedElement == true) {
            setCommuteScore(onlyPoints * -1);
        } else {
            setCommuteScore(onlyPoints);
        }
    });
    $('#home').on("click", '.check', function(e){
        let checkedElement = e.target.checked;
        let points = e.target.nextSibling.innerHTML;
        let onlyPoints = parseInt(points);
        if (checkedElement == true) {
            setHomeScore(onlyPoints * -1);
        } else {
            setHomeScore(onlyPoints);
        }
    });

});

function setWaterScore(score) {
    $.ajax({
        url: "/update-water",
        dataType: "json",
        type: "POST",
        data: {wscore: score},
        success: function (data) {
            getCurrentScore();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
  
    });
}

function setFoodScore(score) {
    $.ajax({
        url: "/update-food",
        dataType: "json",
        type: "POST",
        data: {fscore: score},
        success: function (data) {
            getCurrentScore();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
  
    });
}

function setCommuteScore(score) {
    $.ajax({
        url: "/update-transport",
        dataType: "json",
        type: "POST",
        data: {tscore: score},
        success: function (data) {
            getCurrentScore();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
  
    });
}

function setHomeScore(score) {
    $.ajax({
        url: "/update-home",
        dataType: "json",
        type: "POST",
        data: {hscore: score},
        success: function (data) {
            getCurrentScore();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
  
    });
}



function animate() {

    if (currentscore != 0 && goal != 0) {
        var percentComplete = goal / currentscore;
        if (percentComplete >= 1) {
            percentComplete = 1;
        }
        line.animate(percentComplete);
    } else {
        line.animate(0);
    }

}

function getCurrentScore() {
    $.ajax({
      url: "/get-current-score",
      dataType: "json",
      type: "GET",
      success: function (data) {
          data = data[0].currentscore;
          if (data != null) {
            currentscore = data;
            getGoal();
          } else {
            currentscore = 0;
          }
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
  
    });
  }

function getGoal() {
    $.ajax({
        url: "/get-goal",
        dataType: "json",
        type: "GET",
        success: function (data) {
            data = data[0].goal;
            if (data != null) {
                goal = data;
                animate();
            } else {
                goal = 0;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    
    });
}