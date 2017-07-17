require('jquery');
require("./slider-b.less");
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css");

var newSlider = document.getElementById("yoursalary");
var sliderMin = +newSlider.dataset.min, sliderMax = +newSlider.dataset.max, sliderStep = +newSlider.dataset.step;
$('.slider-b').slider({
	min: sliderMin,
	max: sliderMax,
	step: sliderStep,
	range: true
})
.slider('pips', {
	rest: "label",
	step: 1
});