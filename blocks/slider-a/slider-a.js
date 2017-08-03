require('jquery');
require('jquery-ui');
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
require("./slider-a.less");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css");

$('.slider-a').each(function(i){
	var currenSlider = $(this)[0];
	$(currenSlider).slider({
		min: $(currenSlider).data("min"),
		max: $(currenSlider).data("max"),
		step: $(currenSlider).data("step")
		})
		.slider('float');
});
