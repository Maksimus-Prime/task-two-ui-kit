import "./style.less";
import "./favicons/favicons";
require("jquery");
require("jquery-ui");
let modules = requireAll(require.context("./../blocks", true, /^\.\/.*\.js$/));
require.context("./../blocks", true, /\.(less|jpe?g|png|svg|gif)$/);
require.context("./fonts", true, /\.css$/);
require.context("./pages/", true, /\.less$/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
