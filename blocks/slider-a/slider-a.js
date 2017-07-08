require('jquery');
require('jquery-ui');
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
require("./slider-a.less");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./../../frontend/vendor/SliderPips/dist/jquery-ui-slider-pips.css");


$('.slider-a').slider().slider('float');

/*
$('.slider-a').slider().slider('float');
*/