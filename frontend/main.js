function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
require("jquery");
require("./../node_modules/chart.js/dist/Chart.bundle.min.js");
var modules = requireAll(require.context("./../blocks", true, /^\.\/.*\.js$/));
require.context("./fonts",true,/\.css$/);
require("./style.less");

console.log("Hi from main.js!");
