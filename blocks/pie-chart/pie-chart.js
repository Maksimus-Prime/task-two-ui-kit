import "./../../node_modules/chart.js/dist/Chart.bundle.min.js";
Chart.defaults.global.legend.display = false;

$(".js-pie-chart").each(function(){
  var el = $(this)[0];
  var ctx = el.getContext("2d");
  var values = $(el).data("values").split(",");
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [{
        data: values,
        backgroundColor: [
          "#747474",
          "#e75735",
          "#4eb7a8",
          "#e5e5e5"
        ],
        borderWidth: 0
      }],
    },
    options: {
      tooltips: {
        enabled: false
      },
      hover: {mode: null},
      cutoutPercentage: 65,
      elements: {
        arc: {
          borderColor: "#eee",
          borderWidth: 1
        },
        line: {
          backgroundColor: "#000"
        }
      }
    }
  });
});