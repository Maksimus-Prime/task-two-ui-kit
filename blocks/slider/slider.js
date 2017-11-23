import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/slider.css";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css";
import es6bindall from "es6bindall";

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
  getSliderSettings(sliderType) {
    if (sliderType === "pips") {
      return { rest: "label", step: 1 };
    }
  }
  initSlider() {
    $(this.domEl).slider(this.sliderConf).slider(this.sliderType, this.getSliderSettings(this.sliderType));
  }
}

$(".js-slider").each(function () {
  const currentSlider = this;
  const el = new Slider(currentSlider);
});
