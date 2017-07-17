require('jquery');
require('jquery-ui');
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
require("./slider-a.less");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css");

var newSlider = document.getElementById("price");
var sliderMin = +newSlider.dataset.min, sliderMax = +newSlider.dataset.max, sliderStep = +newSlider.dataset.step;
console.log(sliderMin);
$('.slider-a').slider({
	min: sliderMin,
	max: sliderMax,
	step: sliderStep
	})
	.slider('float');