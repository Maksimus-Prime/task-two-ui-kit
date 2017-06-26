function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

require("jquery");
require("jquery-ui");
require("../node_modules/chart.js/dist/Chart.bundle.min.js");
require("./vendor/jquery.knob.min.js");
require("./vendor/SliderPips/dist/jquery-ui-slider-pips.min.js");
var modules = requireAll(require.context("./../blocks", true, /^\.\/.*\.js$/));
require.context("./fonts",true,/\.css$/);
require("./style.less");
require("./vendor/SliderPips/dist/jquery-ui-slider-pips.css");