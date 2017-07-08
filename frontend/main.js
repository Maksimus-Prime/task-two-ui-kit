function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

require("jquery");
require("jquery-ui");
require('youtube-iframe');
var YouTubeIframeLoader = require('youtube-iframe');
require("./style.less");
require("../node_modules/chart.js/dist/Chart.bundle.min.js");
require("./vendor/jquery.knob.min.js");
var modules = requireAll(require.context("./../blocks", true, /^\.\/.*\.js$/));
require.context("./fonts",true,/\.css$/);




require("./vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./vendor/SliderPips/dist/jquery-ui-slider-pips.css");


