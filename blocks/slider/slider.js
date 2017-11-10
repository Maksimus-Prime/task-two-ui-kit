import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/slider.css";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css";

$(".js-slider").each(function(){
  var currentSlider = $(this)[0];
  var sliderType = $(currentSlider).data("type");
  var sliderConf = {
    min: $(currentSlider).data("min"),
    max: $(currentSlider).data("max"),
    step: $(currentSlider).data("step"),
    range: undefined
  };
  sliderConf.range = (sliderType === "pips") ? true : undefined;
  function sliderSettings(sliderType) {
    if(sliderType === "pips") {
      return { rest: "label", step: 1 };
    }else {
      sliderConf.range = undefined;
      return;
    }
  }
  $(currentSlider).slider(sliderConf)
     .slider(sliderType, sliderSettings(sliderType))
});