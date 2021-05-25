$(async function () {

    var scores = [];

    $.ajax({
        url: "/get-breakdown-transport",
        dataType: "json",
        type: "GET",
        success: function (data) {
            scores.push(parseInt(data[0].transportscore));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });

    $.ajax({
        url: "/get-breakdown-home",
        dataType: "json",
        type: "GET",
        success: function (data) {
            scores.push(parseInt(data[0].homescore));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });

    $.ajax({
        url: "/get-breakdown-water",
        dataType: "json",
        type: "GET",
        success: function (data) {
            scores.push(parseInt(data[0].waterscore));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });

    $.ajax({
        url: "/get-breakdown-food",
        dataType: "json",
        type: "GET",
        success: function (data) {
            scores.push(parseInt(data[0].foodscore));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });

    console.log(scores); 

    var ctx = document.getElementById('myChart');
    // ctx.height = 400;
    // ctx.width = 400;
    
    var data = {
        labels: ['Transportation', 'Home', 'Water', 'Diet'],
        datasets: [{
            label: 'Environmental Footprint Breakdown',
            data: [scores[0], scores[1], scores[3], scores[4]],
            backgroundColor: [
                'rgb(60, 115, 41)',
                'rgb(93, 184, 102)',
                'rgb(200, 233, 167)',
                'rgb(215, 46, 46)'
            ],
            hoverOffset: 4,
            borderColor: 'rgb(230, 240, 228)'
        }]
    };
    
    var option = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    }
                }
            }
        }
    };
    
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: option
    });

});