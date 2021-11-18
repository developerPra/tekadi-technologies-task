$(document).ready(function(){
    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: [40, 35,40, 40, 30, 38],
            backgroundColor: [
                '#48D9BA',
                '#41C2D3',
                '#48D9BA',
                '#41C2D3',
                '#48D9BA',
                '#41C2D3'
            ],
            borderColor: [
                '#31ffd2',
                '#00e1ff',
                '#31ffd2',
                '#00e1ff',
                '#31ffd2',
                '#00e1ff'
            ],
            borderWidth: 1,
            
            barThickness: 12,
        }]
    },
    pointRadius: 4,
    options: {
        legend: {
            display: false
        },
     
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }, 
                 ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// line chart
var chart = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul'],
        datasets:[
            {
                data:[23,30,50,29,30,38,35],
                backgroundColor: [
                    '#48D9BA'
                ],
            },{
                data:[34,50,23,21,35,60,38],
                backgroundColor: [
                    '#41C2D3'
                ],
            }
    ],
    },
    options: {
        legend: {
            display: false
        },
    }
});
});