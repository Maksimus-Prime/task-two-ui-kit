require('jquery');
require("./slider-b.less");
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css");

$('.js-slider-b').each(function(i){
    var currentSlider = $(this)[0];
    $(currentSlider).slider({
        min: $(currentSlider).data("min"),
        max: $(currentSlider).data("max"),
        step: $(currentSlider).data("step"),
        range: true
    })
    .slider('pips', {
        rest: "label",
        step: 1
    });
});