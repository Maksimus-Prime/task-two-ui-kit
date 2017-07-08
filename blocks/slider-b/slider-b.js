require('jquery');
require("./slider-b.less");
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css");

$('.slider-b').slider({
	min: 0,
	max: 100,
	step: 25,
	range: true
})
.slider('pips', {
	rest: "label",
	step: 1
});