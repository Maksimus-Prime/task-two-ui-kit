import "./../../frontend/vendor/jquery.progressbar.js";
import "./../../frontend/vendor/jquery.progressbar.css";
import es6bindall from "es6bindall";

class Stages {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initData", "getSteps", "initStages"];
    es6bindall(this, this.bindMethods);
    this.initStages();
  }
  initData() {
    this.stepsNum = $(this.domEl).data("steps");
    this.currentStep = $(this.domEl).data("current");
  }
  getSteps() {
    const stepsArr = [];
    for (let i = 0; i < this.stepsNum; i++) {
      if (i == this.currentStep - 1) {
        stepsArr.push("@");
      } else {
        stepsArr.push("");
      }
    }
    return stepsArr;
  }
  initStages() {
    this.initData();
    $(this.domEl).progressbar({
      steps: this.getSteps(),
    });
  }
}

$(".js-stages").each(function () {
  const currentStages = this;
  const el = new Stages(currentStages);
});
