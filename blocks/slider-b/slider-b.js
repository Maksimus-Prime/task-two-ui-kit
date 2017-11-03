import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/slider.css";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js";
import "./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css";

$(".js-slider-b").each(function(){
  var currentSlider = $(this)[0];
  $(currentSlider).slider({
    min: $(currentSlider).data("min"),
    max: $(currentSlider).data("max"),
    step: $(currentSlider).data("step"),
    range: true
  })
    .slider("pips", {
      rest: "label",
      step: 1
    });
});