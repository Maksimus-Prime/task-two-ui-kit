function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

require("jquery");
require("jquery-ui");
require('youtube-iframe');
var YouTubeIframeLoader = require('youtube-iframe');
require("./main.less");
require("./signup1.less");
require("./signup2.less");
require("./signup3.less");
require("./signup3.less");
require("./login.less");
require("./event.less");
require("./allevents.less");
require("./test-block.less");
require("./user.less");
require("./../vendor/select2.min.js");
require("../../node_modules/chart.js/dist/Chart.bundle.min.js");
require("./../vendor/jquery.knob.js");

var modules = requireAll(require.context("./../../blocks", true, /^\.\/.*\.js$/));
require.context("./../fonts",true,/\.css$/);
require("./../vendor/select2.min.css");
require.context("./../../blocks",true,/\.less$/);
require.context("./../../blocks",true,/\.(jpe?g|png|svg|gif)$/);

require("./../vendor/SliderPips/dist/jquery-ui-slider-pips.js");
require("./../vendor/SliderPips/dist/jquery-ui-slider-pips.css");