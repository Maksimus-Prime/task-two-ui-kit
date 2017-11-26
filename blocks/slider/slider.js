import es6bindall from "es6bindall";
import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/slider.css";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css";

class Slider {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initData", "getSliderSettings", "initSlider"];
    es6bindall(this, this.bindMethods);
    this.initData();
    this.getSliderSettings(this.sliderType);
    this.initSlider();
  }
  initData() {
    this.sliderType = $(this.domEl).data("type");
    this.sliderConf = {
      min: $(this.domEl).data("min"),
      max: $(this.domEl).data("max"),
      step: $(this.domEl).data("step"),
      range: undefined,
    };
    this.sliderConf.range = (this.sliderType === "pips") ? true : undefined;
  }
  initSliderSettings(sliderType) {
    if (sliderType === "pips") {
      this.sliderSettings = { rest: "label", step: 1 };
    } else {
      this.sliderSettings = undefined;
    }
  }
  initSlider() {
    $(this.domEl).slider(this.sliderConf).slider(this.sliderType, this.sliderSettings);
  }
}
/* eslint-disable no-unused-vars, func-names */
$(".js-slider").each(function () {
  const currentSlider = this;
  const el = new Slider(currentSlider);
});
/* eslint-disable no-unused-vars, func-names */
