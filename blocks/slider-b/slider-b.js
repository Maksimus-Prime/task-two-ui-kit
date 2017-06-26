require('jquery'); 
require('jquery-ui'); 
require("./slider-b.less");

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