require('./circle-progress-bar-b.less');
require("jquery");

var ctx = $('.circle-progress-bar-b__value');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [
        "first",
        "second",
        "third",
        "fourth"
    ],
    datasets: [
        {
            data: [10, 25, 40, 45],
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
                borderColor: "#eee"
            }
        }
    }
}
});