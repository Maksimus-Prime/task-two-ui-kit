require('./circle-progress-bar-b.less');
require("jquery");

Chart.defaults.global.legend.display = false;
$('.js-circle-progress-bar-b__value').each(function(i){
    var ctx = $(this)[0];
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["sadf","adsf","adf","asdfd"],
        datasets: [
            {
                data: [24, 25, 40, 45],
                backgroundColor: [
                    "#747474",
                    "#e75735",
                    "#4eb7a8",
                    "#e5e5e5"
                ],
                borderWidth: 0
            }],
        options: {
            elements: {
                arc: {
                    borderColor: "#eee",
                    borderWidth: 2
                },
                line: {
                    backgroundColor: "#000"
                }
            }
        }
        }
    });
});