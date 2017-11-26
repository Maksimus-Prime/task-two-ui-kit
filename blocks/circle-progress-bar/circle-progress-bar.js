import es6bindall from "es6bindall";
import "./../../frontend/vendor/jquery.knob.min";

class CircleProgressBar {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initCircleProgressBar"];
    es6bindall(this, this.bindMethods);
    this.initCircleProgressBar();
  }
  initCircleProgressBar() {
    $(this.domEl).knob({
      thickness: ".1",
      bgColor: "#fff",
      fgColor: "#e75735",
      width: "100%",
      height: "100%",
      readOnly: "false",
      font: "'Lato', sans-serif",
      fontWeight: "300",
      fontStyle: "normal",
    });
  }
}
/* eslint-disable no-unused-vars, func-names */
$(".js-circle-progress-bar__value").each(function () {
  const currentCircleProgressBar = this;
  const el = new CircleProgressBar(currentCircleProgressBar);
});
/* eslint-disable no-unused-vars, func-names */
