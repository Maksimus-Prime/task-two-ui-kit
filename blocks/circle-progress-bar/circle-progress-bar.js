import "./../../frontend/vendor/jquery.knob.min.js";

$(document).ready(function() {
  $(".js-circle-progress-bar__value").each(function(){
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