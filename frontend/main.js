function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
require("jquery");
require("jquery-ui");
var modules = requireAll(require.context("./../blocks", true, /^\.\/.*\.js$/));
import "./style.less";
import "./favicons/favicons";
require.context("./../blocks",true,/\.(jpe?g|png|svg|gif)$/);
require.context("./fonts",true,/\.css$/);
require.context("./../blocks",true,/\.less$/);
require.context("./pages/",true,/\.less$/);