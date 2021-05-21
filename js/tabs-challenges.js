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

    

    

});

function animate() {

    console.log(currentscore);
    console.log(goal);
    if (currentscore != 0 && goal != 0) {
        var percentComplete = goal / currentscore;
        console.log("%: " + percentComplete);
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
          console.log("Current Score: " + data[0].currentscore);
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
            console.log("Goal: " + data[0].goal);
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