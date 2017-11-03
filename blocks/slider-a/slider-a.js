import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/slider.css";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css";

$(".js-slider-a").each(function(){
  var currenSlider = $(this)[0];
  $(currenSlider).slider({
    min: $(currenSlider).data("min"),
    max: $(currenSlider).data("max"),
    step: $(currenSlider).data("step")
  })
    .slider("float");
});