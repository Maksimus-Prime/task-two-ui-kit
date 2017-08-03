require('./circle-progress-bar.less');
require('jquery');

$('.circle-progress-bar__input').each(function(i){
	$(this).knob({
		"thickness": ".1",
		"bgColor": "#fff",
		"fgColor": "#e75735",
		"width": "100%",
		"height": "100%",
		"fontSize": "4.5625rem",
		"readOnly": "false"
	});
});
