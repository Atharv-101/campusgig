// /* ----- Employee Dashboard Chart Js For Applications Statistics ----- */
// Circle Doughnut Chart
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [' Direct 32%', 'Referal 28%', 'Oragnic 40%'],
        datasets: [{
            label: 'My First dataset',
            segmentShowStroke : true,
            segmentStrokeColor : "E8EAED",
            datasetStrokeWidth : 24,
            backgroundColor: ["#5BBB7B", "#FFEDE8", "#FBF7ED"],
            data: [50, 25, 25],
            responsive: true,
            borderWidth: 4,
            showScale: true
        }]
    },

    // Configuration options go here
    options: {
        aspectRatio: 0,
        cutoutPercentage : 60,
        responsive: true,
        legend: {
            position: 'left'
        }
    }
});

// LineChart Style 2
    var ctx = document.getElementById('myChartweave').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line', // also try bar or other graph types

    // The data for our dataset
    data: {
        labels: ["Jan", "Feb", "Marc", "April", "May", "June", "July", "Agust", "Sept", "Oct", "Nov", "Dec"],
        // Information about the dataset
    datasets: [{
            label: "Dataset",
            backgroundColor: 'rgba(251, 247, 237, 0.9)',
            borderColor: '#5BBB7B',
            data: [148, 140, 210, 120, 160, 140, 190, 170, 135, 210, 180, 249],
        }]
    },

    // Configuration options
    options: {
    layout: {
      padding: 10,
    },
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Precipitation in Toronto'
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    // labelString: 'Precipitation in mm'
                },
                ticks: {
                    min: 0,
                    max: 300,
                    // forces step size to be 5 units
                    stepSize: 50
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    // labelString: 'Month of the Year'
                }
            }]
        }
    }
});

