require('./circle-progress-bar.less');
require('jquery');

$(document).ready(function() {
    $('.js-circle-progress-bar__value').each(function(i){
        $(this).knob({
            "thickness": ".1",
            "bgColor": "#fff",
            "fgColor": "#e75735",
            "width": "100%",
            "height": "100%",
            "readOnly": "false",
            "font": "'Lato', sans-serif",
            "fontWeight": "300",
            "fontStyle": "normal"
        });
    });
});