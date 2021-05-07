var ctx = document.getElementById('myChart');
ctx.height = 400;
ctx.width = 400;

var data = {
    labels: ['Transportation', 'Home', 'Water', 'Diet'],
    datasets: [{
        label: 'Carbon Footprint Breakdown',
        data: [20, 30, 15, 10],
        backgroundColor: [
            'rgb(60, 115, 41)',
            'rgb(215, 46, 46)',
            'rgb(200, 233, 167)',
            'rgb(93, 184, 102)'
        ],
        hoverOffset: 4,
    }]
};

var option = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 30
                },
                borderColor: '#E6F0E4'
            }
        }
    }
};

var myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: option
});
