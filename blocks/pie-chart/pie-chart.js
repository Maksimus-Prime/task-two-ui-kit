import "./../../node_modules/chart.js/dist/Chart.bundle.min.js";
import es6bindall from "es6bindall";
Chart.defaults.global.legend.display = false;

class PieChart {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initPieChart"];
    es6bindall(this, this.bindMethods);
    this.initPieChart();
  }
  initPieChart() {
    const ctx = this.domEl.getContext("2d");
    const values = $(this.domEl).data("values").split(",");
    const myDoughnutChart = new Chart(ctx, {
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
  }
}

$(".js-pie-chart").each(function(){
  const currentPieChart = $(this)[0];
  const el = new PieChart(currentPieChart);  
});
